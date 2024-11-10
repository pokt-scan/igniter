import React from "react";
import { useRouter } from "next/router";
import { Typography, Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { roundAndSeparate, priceChangeStyles } from "@/lib/utils";
import DashboardCard from "./DashboardCard";
import PriceChangeBadge from "@/components/common/PriceChangeBadge";
import { usePoktWalletContext } from "../../context/PoktWallet";
import { uPoktConvertionRate } from "@/lib/constants";

interface WalletCardProps {
  client: any;
  setOpenTransfer: (open: boolean) => void;
  setOpenReceive: (open: boolean) => void;
  price: number;
  priceChange: number;
  loading: boolean;
}

const WalletCard: React.FC<WalletCardProps> = ({
  client,
  setOpenTransfer,
  setOpenReceive,
  price,
  priceChange,
  loading,
}) => {
  const theme = useTheme();
  const { push } = useRouter();

  const {
    address,
    balance,
    publicKey,
    chain,
    connectWallet,
    signMessage,
    stakeNode,
  } = usePoktWalletContext();

  const titleColor = theme.isLight
    ? theme.customColors.dark_gray1
    : theme.customColors.white0;
  const { labelColor, symbol } = priceChangeStyles(theme, priceChange);

  return (
    <DashboardCard
      title="Wallet"
      actionColumns={[1, 2]}
      actions={[
        {
          label: "Receive",
          onClick: () => setOpenReceive(true),
        },
      ]}
      loading={loading}
    >
      <Box display="flex" flexDirection="column" rowGap="5px">
        <Stack
          direction="column"
          spacing={0.5}
          justifyContent="space-between"
          mb="17px"
        >
          <Stack direction="row" alignItems="center">
            <Typography
              variant="caption"
              fontWeight="500"
              style={{
                verticalAlign: "super",
                alignSelf: "baseline",
                color: titleColor,
              }}
            >
              $
            </Typography>
            <Typography variant="h1" fontFamily="Overpass Mono">
              {roundAndSeparate(
                (balance / uPoktConvertionRate) * price || 0,
                2,
                0
              )}
            </Typography>
            <PriceChangeBadge
              priceChange={priceChange}
              containerSx={{ marginLeft: "12px" }}
            />
          </Stack>
          <Typography color={titleColor}>Balance</Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color={titleColor}>Pocket Balance</Typography>
          <Typography fontFamily="Overpass Mono">
            {roundAndSeparate(balance / uPoktConvertionRate || 0, 2)}
            <Typography display="inline-flex" color={titleColor}>
              &nbsp; POKT
            </Typography>
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color={titleColor}>POKT Price</Typography>
          <Typography fontFamily="Overpass Mono">
            <Typography display="inline-flex">$</Typography>
            <Typography display="inline-flex">
              {" "}
              {roundAndSeparate(price || 0, 4)}
            </Typography>
            <Typography display="inline-flex" color={labelColor}>
              &nbsp; &nbsp;
              {`${symbol}`} {`${roundAndSeparate(priceChange, 2)}%`}
            </Typography>
          </Typography>
        </Stack>
      </Box>
    </DashboardCard>
  );
};

export default WalletCard;
