import { Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import FullWidthDivider from "../common/FullWidthDivider";
import { roundAndSeparate } from "@/lib/utils";

interface StakeBreakdownProps {
  tokensData: {
    fees: string | number;
    funds: string | number;
    stakeTokens: string | number;
    tokensRequired: string | number;
    middlemanFee: string | number;
    remainingInWallet: number;
  };
}

const Row: React.FC<{
  title: string;
  value: string | number;
  warningColor?: string;
  isPercentage?: boolean;
  noTokens?: boolean;
  noNodes?: boolean;
}> = ({ title, value, isPercentage, warningColor, noTokens, noNodes }) => (
  <Stack direction="row" justifyContent="space-between">
    <Typography fontWeight="500" color="textPrimary">
      {title}
    </Typography>
    <Stack direction="row">
      {noTokens || noNodes ? (
        <Typography color={warningColor}>
          {noTokens ? "No Tokens Available" : "Select Existent/New Nodes"}
        </Typography>
      ) : (
        <>
          {!isPercentage ? (
            <>
              <Typography color="textPrimary" variant="overpass" mr="8px">
                {roundAndSeparate(value as number, 2, "0.00")}
              </Typography>
              <Typography variant="overpass">POKT</Typography>
            </>
          ) : (
            <Typography color="textPrimary" variant="overpass" mr="8px">
              {value}
            </Typography>
          )}
        </>
      )}
    </Stack>
  </Stack>
);

const StakeBreakdown: React.FC<StakeBreakdownProps> = ({ tokensData }) => {
  const theme = useTheme();
  const noTokens = tokensData.remainingInWallet < 0;
  const noNodes = Number(tokensData.stakeTokens) <= 0;
  const warningColor = theme.isLight
    ? theme.customColors.orange1
    : theme.customColors.orange2;

  return (
    <>
      <Stack
        spacing={1}
        border={`1px solid ${theme.palette.divider}`}
        borderRadius="7px"
        p="12px 16px"
      >
        <Row title="Network & Stake Fee" value={tokensData?.fees} />
        <FullWidthDivider
          styles={{ marginLeft: "-17px", marginRight: "0px", width: "109%" }}
        />
        <Row
          title="Middleman Fee"
          value={tokensData?.middlemanFee}
          isPercentage
        />
        <FullWidthDivider
          styles={{ marginLeft: "-17px", marginRight: "0px", width: "109%" }}
        />
        <Row
          title="Stake Total"
          value={tokensData?.tokensRequired}
          warningColor={warningColor}
          noTokens={noTokens}
          noNodes={noNodes}
        />
      </Stack>
    </>
  );
};

export default StakeBreakdown;
