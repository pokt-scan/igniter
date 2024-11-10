import React from "react";
import Stack from "@mui/material/Stack";
import DashboardCard from "./DashboardCard";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { roundAndSeparate } from "@/lib/utils";

export type NodesCardProps = {
  client: any;
  nodes: any;
  setOpenStake: (open: boolean) => void;
  setOpenSweep: (open: boolean) => void;
  loading: boolean;
};

const NodesCard: React.FC<NodesCardProps> = ({
  client,
  nodes,
  setOpenStake,
  setOpenSweep,
  loading,
}) => {
  const theme = useTheme();
  const summary = client?.summary;

  const titleColor = theme.isLight
    ? theme.customColors.dark_gray1
    : theme.customColors.white0;

  return (
    <DashboardCard
      title="Nodes"
      actionColumns={[2, 1]}
      actions={[
        {
          label: "Stake",
          onClick: () => setOpenStake(true),
        },
      ]}
      loading={loading}
    >
      <Box display="flex" flexDirection="column" rowGap="5px">
        <Stack
          direction="column"
          spacing={0.5}
          justifyContent="space-between"
          mb="12px"
        >
          <Stack direction="row" alignItems="center">
            <Typography variant="h1" fontFamily="Overpass Mono">
              {nodes?.length || 0}
            </Typography>
          </Stack>
          <Typography color={titleColor}>Active Nodes</Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color={titleColor}>Node Balance</Typography>
          <Box fontFamily="Overpass Mono">
            {roundAndSeparate(summary?.pokt_data_balance, 2, 0)}
            <Typography display="inline-flex" color={titleColor}>
              &nbsp; POKT
            </Typography>
          </Box>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography color={titleColor}>Recent Rewards (24hs)</Typography>
          <Box fontFamily="Overpass Mono">
            {roundAndSeparate(summary?.total_last_24_hours, 2, 0)}
            <Typography display="inline-flex" color={titleColor}>
              &nbsp; POKT
            </Typography>
          </Box>
        </Stack>
      </Box>
    </DashboardCard>
  );
};

export default NodesCard;
