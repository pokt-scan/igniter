import React, { useCallback, useEffect, useMemo, useState } from "react";
import type { Theme } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { DialogComponentProps } from "../common/Dialog";
import {
  TransactionStatus,
  TransactionType,
  useCreateTransactionMutation,
  useListProvidersQuery,
} from "@igniter/graphql";
import { convertToPokt, roundAndSeparate } from "@/lib/utils";
import { useSnackbar } from "@/lib/snackbar";
import { LoadingDialog } from "../common/LoadingDialog";

import FullWidthDivider from "../common/FullWidthDivider";
import BinSelectSwitch from "./BinSelectSwitch";
import StakeBreakdown from "./StakeBreakdown";
import CustomSelect from "../common/form/Select";
import { usePoktWalletContext } from "@/context/PoktWallet";

interface NewNodeButtonType {
  active: boolean;
  theme: Theme;
}

const NewNodeButton = styled(Button, {
  shouldForwardProp: (prop: string) => prop !== "active",
})(({ theme, active }: NewNodeButtonType) => ({
  height: "32px",
  minWidth: "34px",
  border: "none",
  fontWeight: 400,
  fontFamily: "Overpass Mono",
  backgroundColor: active
    ? theme.isLight
      ? theme.customColors.pure_white
      : theme.customColors.cloud1
    : "transparent",
  boxShadow: active ? undefined : "none",
  padding: "8px 10px",
  "&:hover": {
    backgroundColor: theme.palette.divider,
  },
}));

export interface NodeStakeDialogProps
  extends Pick<
    DialogComponentProps,
    Exclude<keyof DialogComponentProps, "children" | "actions">
  > {
  client: any;
  initialValues?: { [key: string]: unknown };
  onSuccessSubmit?: (data: unknown) => Promise<unknown> | unknown;
}

interface TokensData {
  nodesCount: number;
  stakeTokens: number;
  fees: number;
  funds: number;
  tokensRequired: number;
  remainingInWallet: number;
  middlemanFee: string;
}

const PER_NODE_FEE = 0.01;

const STAKE_BINS = [
  { label: "All Nodes", value: 0, filter: {} },
  { label: "15K", value: 15000, filter: {} },
  { label: "30K", value: 30000, filter: {} },
  { label: "45K", value: 45000, filter: {} },
  { label: "60K", value: 60000, filter: {} },
];

const NodeStakeDialog: React.FC<NodeStakeDialogProps> = ({
  client,
  open,
  onClose,
  initialValues,
  onSuccessSubmit,
  ...others
}) => {
  const theme: Theme = useTheme();
  const { showToast } = useSnackbar();

  const { address, signMessage, stakeNode, balance, publicKey } =
    usePoktWalletContext();

  const {
    data: providersData,
    loading: providersLoading,
    error,
  } = useListProvidersQuery();

  const [createTransaction] = useCreateTransactionMutation();

  const [loading, setLoading] = useState(false);
  const [numberOfNewNodes, setNumberOfNewNodes] = useState(1);
  const [selectedBin, setSelectedBin] = useState(STAKE_BINS[1].value);
  const [invalidStake, setInvalidStake] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState("");
  const [outputAddress, setOutputAddress] = useState("");

  const [tokensData, setTokensData] = useState<TokensData>({
    nodesCount: 0,
    stakeTokens: 0,
    fees: 0,
    funds: 0,
    tokensRequired: 0,
    remainingInWallet: 0,
    middlemanFee: "1%",
  });

  const providers = useMemo(() => {
    return providersData?.allProviders?.nodes || [];
  }, [providersData]);

  const customNewNodesSelected = useMemo(() => {
    if (numberOfNewNodes >= 10) return true;
    return false;
  }, [numberOfNewNodes]);

  const resetSelection = useCallback(() => {
    setNumberOfNewNodes(1);
    setSelectedBin(STAKE_BINS[1].value);
    setInvalidStake(false);
    setSelectedProvider("");
  }, []);

  const handleClose = useCallback(
    (e: Event, reason: string) => {
      //prevent closing of modal, if action in progress
      if (loading) {
        e.stopPropagation();
        return;
      }

      resetSelection();

      if (onClose) onClose(e, reason);
    },
    [onClose, loading]
  );

  const onSubmitDone = useCallback(
    async (hash, nodeAddress, stakeAmount, providerId) => {
      if (onSuccessSubmit) onSuccessSubmit(hash);

      await createTransaction({
        variables: {
          input: {
            transaction: {
              hash,
              type: TransactionType.Stake,
              status: TransactionStatus.Pending,
              from: address as unknown as string,
              amount: parseInt(stakeAmount),
              to: nodeAddress,
              providerId,
            },
          },
        },
      });

      showToast(
        <Stack>
          <Box>Stake operation successfully created.</Box>
          <Box>An email will be sent once the process is done.</Box>
          <Box>This process may take up to 1 hour.</Box>
        </Stack>,
        "success",
        null,
        { persist: true }
      );

      handleClose(null, "success");
    },
    [onSuccessSubmit, handleClose, showToast]
  );

  const maxNumberOfNewNodes = useMemo(() => {
    if (balance) {
      const maxNodes = Math.floor(
        convertToPokt(balance) / (selectedBin + PER_NODE_FEE)
      );
      return maxNodes > 10 ? 10 : maxNodes;
    }
    return 0;
  }, [selectedBin, balance]);

  const [minimumSelectableBin, maxSelectableBin] = useMemo(() => {
    return [STAKE_BINS[1].value, STAKE_BINS[STAKE_BINS.length - 1].value];
  }, [balance]);

  useEffect(() => {
    let nodesCount = 0;
    let stakeTokens = 0;
    let fees = 0;
    let funds = 0;
    let tokensRequired = 0;
    let invalid = false;
    const middlemanFee = "1%";

    nodesCount = numberOfNewNodes;
    stakeTokens = numberOfNewNodes * selectedBin;
    fees = numberOfNewNodes * PER_NODE_FEE;

    tokensRequired = stakeTokens + fees + funds;

    setTokensData({
      nodesCount,
      stakeTokens,
      fees,
      funds,
      tokensRequired,
      middlemanFee,
      remainingInWallet: convertToPokt(balance) - tokensRequired,
    });
    setInvalidStake(invalid);
  }, [balance, numberOfNewNodes, selectedBin]);

  useEffect(() => {
    if (!outputAddress) {
      setOutputAddress(address);
    }
  }, [address, publicKey]);

  const onSubmit = useCallback(
    async (values) => {
      try {
        setLoading(true);

        const stakeAmount = (selectedBin * numberOfNewNodes * 1e6).toString();

        const randomProvider =
          providers[Math.floor(Math.random() * providers.length)];
        const providerId = selectedProvider || randomProvider?.rowId;

        const addressesResponse = await fetch(
          `/api/provider/address?count=${numberOfNewNodes}`,
          {
            signal: new AbortController().signal,
          }
        );
        const addressesData = await addressesResponse.json();
        const nodeAddresses = addressesData.addresses;

        const stakeresponse = await stakeNode(
          stakeAmount,
          ["0001", "0003"],
          address,
          nodeAddresses[0].pubKey,
          "https://node-test.com"
        );

        onSubmitDone(
          stakeresponse.hash,
          nodeAddresses[0].address,
          stakeAmount,
          providerId
        );
        return stakeresponse;
      } catch (e) {
        showToast(e.message, "error");
      } finally {
        setLoading(false);
      }
    },
    [
      selectedBin,
      onSubmitDone,
      numberOfNewNodes,
      showToast,
      stakeNode,
      publicKey,
      address,
      providers,
    ]
  );

  const actions = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" width={1}>
        <Button
          size="small"
          variant="outlined"
          onClick={handleClose as any}
          disabled={loading}
        >
          Cancel
        </Button>

        <Button
          size="small"
          variant="contained"
          onClick={onSubmit}
          disabled={
            loading || tokensData?.remainingInWallet < 0 || invalidStake
          }
        >
          Stake
        </Button>
      </Stack>
    ),
    [handleClose, onSubmit, loading, tokensData, selectedProvider]
  );

  return (
    <LoadingDialog
      open={open}
      title={"Stake"}
      onClose={handleClose}
      actions={actions}
      PaperProps={{
        sx: { minWidth: 495 },
      }}
      sxContentProps={{ p: 0 }}
      loadingOverlayProps={{
        active: loading,
        text: "Submitting stake transaction",
      }}
      {...others}
    >
      <FullWidthDivider />

      <Box mt="27px" mb="15px">
        <Typography fontWeight="500" color="textPrimary">
          Stake Amount
        </Typography>
        <Typography color="textSecondary">
          Set token amount to stake per node
        </Typography>
      </Box>

      <BinSelectSwitch
        value={selectedBin}
        onChange={setSelectedBin}
        options={STAKE_BINS}
        minBin={minimumSelectableBin}
        maxBin={maxSelectableBin}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mt="12px"
        mb="19px"
      >
        <Typography color={theme.customColors.gray1}>Available</Typography>
        <Typography variant="overpass">
          {roundAndSeparate(convertToPokt(balance), 2, 0)}{" "}
          <span style={{ color: theme.customColors.gray1 }}>POKT</span>
        </Typography>
      </Stack>

      <Box mb="32px">
        <Typography fontWeight="500" mb="5px" color="textPrimary">
          Number of Nodes
        </Typography>
        <Stack
          direction="row"
          sx={{
            backgroundColor: theme.isLight
              ? theme.customColors.light_gray2
              : theme.customColors.slate0,
            borderRadius: "8px",
            boxShadow: `inset 0 0 3px 0 ${
              theme.isLight
                ? theme.customColors.shadow1_L
                : theme.customColors.shadow2_D
            }`,
          }}
          spacing={0.5}
          justifyContent="space-between"
          p="4px"
        >
          {[...Array(9).keys()].map((i) => (
            <NewNodeButton
              key={i}
              onClick={() => setNumberOfNewNodes(i + 1)}
              size="small"
              //@ts-ignore
              active={numberOfNewNodes === i + 1}
              disabled={i + 1 > maxNumberOfNewNodes}
            >
              {i + 1}
            </NewNodeButton>
          ))}

          {customNewNodesSelected ? (
            <TextField
              type="number"
              value={numberOfNewNodes}
              onChange={(e) => setNumberOfNewNodes(Number(e.target.value))}
              sx={{
                width: "45px",
                height: "30px",
                borderRadius: "8px",
                border: "none",
                backgroundColor: theme.isLight
                  ? theme.customColors.pure_white
                  : theme.customColors.cloud1,
                fontWeight: 400,
                fontFamily: "Overpass Mono",
                boxShadow: `inset 0 0 3px 0 ${
                  theme.isLight
                    ? theme.customColors.shadow1_L
                    : theme.customColors.shadow2_D
                }`,
                "& input": {
                  textAlign: "center",
                  fontSize: "14px",
                  padding: "0px !important",
                },
              }}
            />
          ) : (
            <NewNodeButton
              value={10}
              onClick={() => setNumberOfNewNodes(10)}
              //@ts-ignore
              active={numberOfNewNodes === 10}
              disabled={maxNumberOfNewNodes < 10}
            >
              Custom
            </NewNodeButton>
          )}
        </Stack>
        <Stack direction="column" justifyContent="space-between" mt="10px">
          <Typography fontWeight="500" mb="5px" color="textPrimary">
            Output Address
          </Typography>
          <CustomSelect
            value={outputAddress}
            onChange={(e) => {
              setOutputAddress(e.target.value);
            }}
            options={[
              {
                label: address,
                value: address,
              },
            ]}
            disabled
            fullWidth
          />
        </Stack>
      </Box>

      <Box mb="24px">
        <StakeBreakdown tokensData={tokensData} />
      </Box>

      <Box my="10px">
        <Typography fontWeight="500" color="textPrimary" mb="5px">
          Noderunner Provider
        </Typography>
        <CustomSelect
          value={selectedProvider}
          onChange={(e) => {
            setSelectedProvider(e.target.value);
          }}
          options={providers?.map((provider) => ({
            label: provider?.name,
            value: provider?.id,
          }))}
          disabled={providers?.length === 1}
          placeholder="Automatic"
          fullWidth
        />
      </Box>
    </LoadingDialog>
  );
};

export default NodeStakeDialog;
