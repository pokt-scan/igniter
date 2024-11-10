import React from "react";
import Stack from "@mui/material/Stack";
import dayjs from "dayjs";
import DashboardCard from "./DashboardCard";
import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import Link from "next/link";

export type ActivitiesCardProps = {
  activities: any[];
  loading: boolean;
};

const ActivityRow = ({ activity }) => {
  const theme = useTheme();

  const typeColor = theme.isLight
    ? theme.customColors.black1_L
    : theme.customColors.white1_D;
  const valueColor = theme.isLight
    ? theme.customColors.dark_gray1
    : theme.customColors.white0;
  const hashColor = theme.isLight
    ? theme.customColors.blue1_L
    : theme.customColors.blue1_D;

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      flexWrap="nowrap"
      textOverflow="ellipsis"
      whiteSpace="nowrap"
      overflow="hidden"
      minWidth="0"
    >
      <Typography color={typeColor} mr="5px">
        {activity.type.charAt(0) + activity.type.toLowerCase().slice(1)}
      </Typography>
      <Typography color={hashColor} mr="5px" width="520px" textAlign="left">
        <Link
          href={`https://poktscan.com/testnet/tx/${activity.hash}`}
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          {activity.hash}
        </Link>
      </Typography>
      <Typography color={typeColor} mr="5px">
        {activity.status.charAt(0) + activity.status.toLowerCase().slice(1)}
      </Typography>
      <Box display="flex" columnGap="25px" flexWrap="nowrap">
        <Typography color={valueColor} variant="overpass">
          {dayjs(activity?.createdAt).format("MM/DD/YYYY HH:mm")}
        </Typography>
      </Box>
    </Stack>
  );
};

const ActivityCard: React.FC<ActivitiesCardProps> = ({
  activities,
  loading,
}) => {
  const theme = useTheme();
  const { push } = useRouter();

  return (
    <DashboardCard
      title={<Typography fontWeight="500">Activity</Typography>}
      actionColumns={[1]}
      loading={loading}
    >
      <Box display="flex" flexDirection="column" rowGap="10px">
        {activities?.map((activity, index) => (
          <React.Fragment key={index}>
            <ActivityRow key={index} activity={activity} />
            {index < activities.length - 1 && (
              <Divider
                style={{
                  color: theme.palette.divider,
                  marginLeft: "-30px",
                  marginRight: 0,
                  width: "110%",
                }}
              />
            )}
          </React.Fragment>
        ))}
      </Box>
    </DashboardCard>
  );
};

export default ActivityCard;
