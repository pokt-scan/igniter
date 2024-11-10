import React from "react";
import DashboardCard from "./DashboardCard";
import RewardsChart from "./RewardsChart";

export type RewardsCardProps = {
  rewards: any[];
  rewardsLoading: boolean;
};

const RewardsCard: React.FC<RewardsCardProps> = ({
  rewards,
  rewardsLoading,
}) => {
  return (
    <DashboardCard
      title="Rewards"
      containerSx={{ maxHeight: "165px" }}
      loading={rewardsLoading}
    >
      <RewardsChart values={rewards} />
    </DashboardCard>
  );
};

export default RewardsCard;
