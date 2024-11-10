import { Box, Typography } from "@mui/material";
import { SxProps, useTheme } from "@mui/material/styles";
import { DOWN_CARET_ICON, UP_CARET_ICON } from "@/lib/constants";
import { roundAndSeparate } from "@/lib/utils";

type PriceChangeBadgeProps = {
  priceChange: number;
  containerSx: SxProps;
};

const getColors = (theme, priceChange) => {
  const colorMap = {
    positive: {
      light: {
        labelColor: theme.customColors.green3,
        backgroundColor: theme.customColors.light_green1,
      },
      dark: {
        labelColor: theme.customColors.dark_green1,
        backgroundColor: theme.customColors.green1,
      },
    },
    negative: {
      light: {
        labelColor: theme.customColors.red3,
        backgroundColor: theme.customColors.pink1,
      },
      dark: {
        labelColor: theme.customColors.brown1,
        backgroundColor: theme.customColors.yellow1,
      },
    },
  };

  const themeType = theme.isLight ? "light" : "dark";
  const index = priceChange > 0 ? "positive" : "negative";
  return colorMap[index][themeType];
};

const PriceChangeBadge: React.FC<PriceChangeBadgeProps> = ({
  priceChange,
  containerSx,
}) => {
  const theme = useTheme();

  const { labelColor, backgroundColor } = getColors(theme, priceChange);
  const symbol = priceChange > 0 ? UP_CARET_ICON : DOWN_CARET_ICON;

  return (
    <Typography fontFamily="Overpass Mono" fontSize="10px" fontWeight="bold">
      <Box
        sx={{
          color: labelColor,
          backgroundColor: backgroundColor,
          alignItems: "center",
          padding: "2px 5px",
          borderRadius: "4px",
          ...containerSx,
        }}
      >
        {/* What change are we showing here */}
        {`${symbol} ${roundAndSeparate(priceChange, 2)}%`}
      </Box>
    </Typography>
  );
};

export default PriceChangeBadge;
