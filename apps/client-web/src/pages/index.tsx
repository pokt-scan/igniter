import {
  useGetPoktNodeByUserIdQuery,
  useGetTransactionByUserIdQuery,
  useGetUserQuery,
} from "@igniter/graphql";
import { Theme, useTheme } from "@mui/material/styles";
import Layout from "@/components/layout";
import { ReactElement, useMemo, useState } from "react";
import { Button, Grid } from "@mui/material";
import ReceiveDialog from "@/components/summary/ReceiveDialog";
import PageHeader from "@/components/common/PageHeader";
import NodesCard from "@/components/summary/NodesCard";
import WalletsCard from "@/components/summary/WalletsCard";
import RewardsCard from "@/components/summary/RewardsCard";
import { usePoktWalletContext } from "../context/PoktWallet";
import StakeDialog from "@/components/nodes/StakeDialog";
import usePoktPriceInfo from "@/lib/poktPrice";
import { useSession } from "next-auth/react";
import ActivityCard from "@/components/summary/ActivityCard";

const Page = () => {
  const theme: Theme = useTheme();

  const [openTransfer, setOpenTransfer] = useState(false);
  const [openReceive, setOpenReceive] = useState(false);
  const [openStake, setOpenStake] = useState(false);
  const { data: session, status } = useSession();

  const userId = session?.user?.id;

  const {
    price,
    change,
    loading: priceLoading,
    error: priceError,
  } = usePoktPriceInfo();

  const {
    connectWallet,
    poktWalletAvailable,
    address,
    signMessage,
    getAccounts,
  } = usePoktWalletContext();

  const {
    data: clientData,
    loading: clientLoading,
    error,
  } = useGetUserQuery({
    variables: { id: userId },
  });

  const {
    data: nodesData,
    loading: nodesLoading,
    error: nodesError,
  } = useGetPoktNodeByUserIdQuery({
    variables: { userId: userId },
  });

  const {
    data: txsData,
    loading: txsLoading,
    error: txsError,
  } = useGetTransactionByUserIdQuery({
    variables: { userAddress: address },
    pollInterval: 2000,
  });

  const client = useMemo(() => {
    return clientData?.user;
  }, [clientData?.user?.id]);

  const nodes = useMemo(() => {
    return nodesData?.allPoktNodes?.nodes;
  }, [nodesData?.allPoktNodes?.nodes]);

  const rewards = useMemo(() => {
    //return rewardsData?.GetCustomerRewardsSummary?.points
    const iii = {
      point_format: "YYYY-MM",
      points: [
        {
          total_net_rewards: 8064440052,
          nodes_staked: 87,
          point: "2023-03",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 9064440052,
          nodes_staked: 87,
          point: "2023-04",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 10055440052,
          nodes_staked: 87,
          point: "2023-05",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 8855121747,
          nodes_staked: 87,
          point: "2023-06",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 7064440052,
          nodes_staked: 87,
          point: "2023-07",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 10064440052,
          nodes_staked: 87,
          point: "2023-08",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 9030841173,
          nodes_staked: 90,
          point: "2023-09",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 12231059077,
          nodes_staked: 90,
          point: "2023-10",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 8855121747,
          nodes_staked: 91,
          point: "2023-11",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 12768619295,
          nodes_staked: 91,
          point: "2023-12",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 10818917199,
          nodes_staked: 91,
          point: "2024-01",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 9991423588,
          nodes_staked: 91,
          point: "2024-02",
          __typename: "RewardsReportItem",
        },
        {
          total_net_rewards: 7753942351,
          nodes_staked: 91,
          point: "2024-03",
          __typename: "RewardsReportItem",
        },
      ],
      total_net_rewards: 81514364482,
      __typename: "CustomerRewardsSummary",
    };
    return iii.points;
  }, [clientData?.user?.id]);

  const txs = useMemo(() => {
    return txsData?.allTransactions?.nodes;
  }, [txsData?.allTransactions?.nodes]);

  return (
    <Grid
      container
      rowSpacing={3}
      columnSpacing={2}
      alignContent={"flex-start"}
      height={1}
      mt={0}
    >
      <Grid
        item
        xs={12}
        sx={{
          paddingTop: "0px !important",
        }}
      >
        <PageHeader title="Overview" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <NodesCard
          client={client}
          nodes={nodes}
          setOpenStake={() => setOpenStake(true)}
          setOpenSweep={() => 1}
          loading={clientLoading}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <WalletsCard
          client={client}
          loading={clientLoading}
          setOpenTransfer={setOpenTransfer}
          setOpenReceive={setOpenReceive}
          price={price}
          priceChange={change}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <RewardsCard rewards={rewards} rewardsLoading={false} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ActivityCard activities={txs} loading={false} />
      </Grid>
      <StakeDialog
        client={client}
        open={openStake}
        onClose={() => setOpenStake(false)}
      />
      <ReceiveDialog
        open={openReceive}
        onClose={() => setOpenReceive(false)}
        address={address || ""}
      />
    </Grid>
  );
};

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Page;
