import {
  DOWN_CARET_ICON,
  UP_CARET_ICON,
  uPoktConvertionRate,
} from "./constants";

export const getInitials = (name: string) => {
  const names = name.split(" ");
  if (names.length >= 2) {
    return `${names[0].substring(0, 1)}${names[1].substring(
      0,
      1
    )}`.toUpperCase();
  } else return name.substring(0, 2).toUpperCase();
};

export const roundAndSeparate = (
  value: number,
  decimalPlaces = 4,
  defaultValue: string | number = "-"
) => {
  return value
    ? parseFloat(value.toFixed(decimalPlaces)).toLocaleString(undefined, {
        maximumFractionDigits: decimalPlaces,
      })
    : (defaultValue as string);
};

export const convertToPokt = (value: number = 0) => value / uPoktConvertionRate;
export const convertToUPokt = (value: number = 0) =>
  value * uPoktConvertionRate;

export function priceChangeStyles(theme, priceChange: number) {
  const isPositiveChange = priceChange > 0;
  const upCaret = UP_CARET_ICON;
  const downCaret = DOWN_CARET_ICON;

  const colorMap = {
    positive: {
      light: {
        labelColor: theme.customColors.green2_L,
        backgroundColor: theme.customColors.light_green1,
        symbol: upCaret,
      },
      dark: {
        labelColor: theme.customColors.green2_D,
        backgroundColor: theme.customColors.light_green2,
        symbol: upCaret,
      },
    },
    negative: {
      light: {
        labelColor: theme.customColors.red3,
        backgroundColor: theme.customColors.light_red1,
        symbol: downCaret,
      },
      dark: {
        labelColor: theme.customColors.yellow2,
        backgroundColor: theme.customColors.yellow1,
        symbol: downCaret,
      },
    },
  };

  const themeType = theme.isLight ? "light" : "dark";

  if (isPositiveChange) return colorMap.positive[themeType];
  return colorMap.negative[themeType];
}
