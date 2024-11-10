import React, { ReactElement, useMemo, useState } from 'react'
import Layout from '../components/layout'
import Grid from '@mui/material/Grid'
import { Theme } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import {
  CustomerClient,
  useGetCustomerClientQuery,
  useGetCustomerRewardsSummaryQuery,
  useGetPoktPriceInfoQuery,
  useListCustomerActivitiesQuery,
  useListCustomerDepositsQuery,
} from '@poktscan/graphql-web/noderunner'
import NodesCard from '../components/summary/NodesCard'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ThemeOptions, Typography } from '@mui/material'
import useWindowsSize from '@poktscan/ui/src/hooks/useWindowSize'
import StakeDialog from '../components/nodes/StakeDialog'
import { NodesContextProvider } from '../context/nodesContext'
import { useSnackbar } from '../utils/snackbar'
import TransferForm from '../components/wallet/Transfer'
import ReceiveDialog from '../components/summary/ReceiveDialog'
import { useRouter } from 'next/router'
import SweepDialog from '../components/nodes/SweepDialog'
import WalletCard from '../components/summary/WalletCard'
import RewardsCard from '../components/summary/RewardsCard'
import ActivityCard from '../components/summary/ActivityCard'
import DepositsCard from '../components/summary/DepositsCard'
import PageHeader from '../components/common/PageHeader'

const Page = () => {
  const { push } = useRouter()
  const theme: Theme = useTheme()
  const isLgOrHigher = useMediaQuery((theme: ThemeOptions) => theme.breakpoints.up('lg'))
  const windowSize = useWindowsSize()
  const { showToast } = useSnackbar()
  const [openStake, setOpenStake] = useState(false)
  const [openUpstake, setOpenUpstake] = useState(false)
  const [openTransfer, setOpenTransfer] = useState(false)
  const [openReceive, setOpenReceive] = useState(false)
  const [openSweep, setOpenSweep] = useState(false)

  const { data, loading, error } = useGetPoktPriceInfoQuery()
  const { data: clientData, loading: clientLoading } = useGetCustomerClientQuery()
  const { data: rewardsData, loading: rewardsLoading } = useGetCustomerRewardsSummaryQuery()
  const { data: depositsData, loading: depositsLoading } = useListCustomerDepositsQuery({
    variables: {
      pagination: {
        limit: 4,
        sort: [{ direction: -1, property: 'block_time' }],
      },
    },
  })
  const { data: activityData, loading: activityLoading } = useListCustomerActivitiesQuery({
    variables: {
      pagination: {
        limit: 4,
        sort: [{ direction: -1, property: 'createdAt' }],
      },
    },
  })

  const price = useMemo(() => {
    return data?.GetPoktPriceInfo?.usd_price || 0
  }, [data?.GetPoktPriceInfo?.usd_price])

  const priceChange = useMemo(() => {
    return data?.GetPoktPriceInfo?.percent_change_24h || 0
  }, [data?.GetPoktPriceInfo?.percent_change_24h])

  const client: CustomerClient = useMemo(() => {
    return clientData?.GetCustomerClient
  }, [clientData?.GetCustomerClient?._id])

  const rewards = useMemo(() => {
    //return rewardsData?.GetCustomerRewardsSummary?.points
    const iii = {
      point_format: 'YYYY-MM',
      points: [
        {
          total_net_rewards: 8064440052,
          nodes_staked: 87,
          point: '2023-03',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 9064440052,
          nodes_staked: 87,
          point: '2023-04',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 10055440052,
          nodes_staked: 87,
          point: '2023-05',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 8855121747,
          nodes_staked: 87,
          point: '2023-06',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 7064440052,
          nodes_staked: 87,
          point: '2023-07',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 10064440052,
          nodes_staked: 87,
          point: '2023-08',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 9030841173,
          nodes_staked: 90,
          point: '2023-09',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 12231059077,
          nodes_staked: 90,
          point: '2023-10',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 8855121747,
          nodes_staked: 91,
          point: '2023-11',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 12768619295,
          nodes_staked: 91,
          point: '2023-12',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 10818917199,
          nodes_staked: 91,
          point: '2024-01',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 9991423588,
          nodes_staked: 91,
          point: '2024-02',
          __typename: 'RewardsReportItem',
        },
        {
          total_net_rewards: 7753942351,
          nodes_staked: 91,
          point: '2024-03',
          __typename: 'RewardsReportItem',
        },
      ],
      total_net_rewards: 81514364482,
      __typename: 'CustomerRewardsSummary',
    }
    return iii.points
  }, [rewardsData?.GetCustomerRewardsSummary?.point_format])

  const activity = useMemo(() => {
    return activityData?.ListCustomerActivities?.items
  }, [activityData?.ListCustomerActivities?.items])

  const deposits = useMemo(() => {
    return depositsData?.ListCustomerDeposits?.items
  }, [depositsData?.ListCustomerDeposits?.items])

  return (
    <Grid container rowSpacing={3} columnSpacing={2} alignContent={'flex-start'} height={1} mt={0}>
      <Grid
        item
        xs={12}
        sx={{
          paddingTop: '0px !important',
        }}
      >
        <PageHeader title="Overview" />
      </Grid>
      <Grid item xs={12} lg={6}>
        <WalletCard
          client={client}
          price={price}
          priceChange={priceChange}
          setOpenTransfer={setOpenTransfer}
          setOpenReceive={setOpenReceive}
          loading={clientLoading || loading}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <NodesCard
          client={client}
          setOpenStake={() => setOpenStake(true)}
          setOpenSweep={() => setOpenSweep(true)}
          loading={clientLoading || loading}
        />
      </Grid>
      <Grid item xs={12} lg={6}>
        <RewardsCard rewards={rewards} rewardsLoading={rewardsLoading} />
      </Grid>
      <Grid item xs={12} lg={6}>
        <ActivityCard activities={activity} loading={activityLoading} />
      </Grid>
      <Grid item xs={12}>
        <DepositsCard deposits={deposits} loading={depositsLoading} />
      </Grid>
      <Grid item xs={12}></Grid>
      <StakeDialog client={client} open={openStake} onClose={() => setOpenStake(false)} />
      <SweepDialog
        estimatedAmount={client?.summary?.pokt_data_balance}
        price={price}
        open={openSweep}
        onClose={() => setOpenSweep(false)}
      />
      <ReceiveDialog
        open={openReceive}
        onClose={() => setOpenReceive(false)}
        address={client?.wallet || ''}
      />
      {openTransfer && (
        <TransferForm client={client} open={true} onClose={() => setOpenTransfer(false)} />
      )}
    </Grid>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <NodesContextProvider>{page}</NodesContextProvider>
    </Layout>
  )
}

export default Page
