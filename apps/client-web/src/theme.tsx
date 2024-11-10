import React from "react";
import merge from "lodash/merge";
import {
  createTheme,
  ThemeProvider as ThemeProviderMui,
  useMediaQuery,
} from "@mui/material";
import { AppColors, ThemeOptions } from "@mui/material/styles";
import DropDownArrowIcon from "./assets/img/down_arrow.svg";
import ArrowsIcon from "./assets/img/arrows.svg";

declare module "@mui/material/styles" {
  interface AppColors {
    pure_white: string;
    white1: string;
    light_gray1: string;
    light_gray2: string;
    light_gray3: string;
    light_gray4: string;
    red1: string;
    shadow1_L: string;
    shadow2_L: string;
    shadow1_D: string;
    shadow2_D: string;
    black1_L: string;
    black1_D: string;
    black2_D: string;
    dark_gray1: string;
    dark_gray2: string;
    gray1: string;
    blue1_L: string;
    blue1_D: string;
    light_green1: string;
    green3: string;
    pink1: string;
    red2: string;
    red3: string;
    green1: string;
    green2_L: string;
    green2_D: string;
    dark_blue1: string;
    dark_green1: string;
    slate0: string;
    slate1: string;
    slate2: string;
    slate3: string;
    slate4: string;
    slate5: string;
    slateX: string;
    light_blue1: string;
    cloud1: string;
    cloud2: string;
    white0: string;
    white1_L: string;
    white1_D: string;
    yellow1: string;
    yellow2: string;
    brown1: string;
    orange1: string;
    orange2: string;
    purple1: string;

    //workaround to make common @poktscan/ui components work
    blue50: string; //sky_blue
    blue100: string; //primary500
    primary500: string;
    dark2: string;
    dark5: string;
    dark15: string;
    dark25: string;
    dark50: string;
    dark75: string;
    dark90: string;
    dark100: string;
    white: string;
    black: string;
  }

  interface Theme {
    customColors: AppColors;
    isLight: boolean;
    isDark: boolean;
  }

  // allow configuration using `createTheme`
  interface ThemeOptions {
    customColors: AppColors;
    isLight: boolean;
    isDark: boolean;
    custom?: any;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    "outlined-cancel": true;
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    variant?: "filled" | "outlined" | "default";
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    overpass: true;
  }
}

export enum ColorMode {
  light = "light",
  dark = "dark",
}

interface IColorModeContext {
  toggleColorMode: () => ColorMode;
  setColorMode: (mode: ColorMode) => void;
  mode: ColorMode | string;
}

export const ColorModeContext = React.createContext<IColorModeContext>({
  toggleColorMode: () => ColorMode.dark,
  setColorMode: () => {
    // noop
  },
  mode: ColorMode.dark,
});

const customColors: AppColors = {
  //light mode colors
  pure_white: "#FFFFFF",
  white1_L: "#FCFCFD",
  light_gray1: "#F7F7F7",
  light_gray2: "#EEEFF0",
  light_gray3: "#E3E5E7",
  light_gray4: "#bdc4cb",
  red1: "#A61212",
  shadow1_L: "rgba(0, 0, 0, 0.04)",
  shadow2_L: "rgba(0, 0, 0, 0.08)",

  black1_L: "#111A1D",
  dark_gray1: "#555F62",
  dark_gray2: "#bdc3c8",
  gray1: "#8B969B",
  blue1_L: "#1280BD",
  light_green1: "#D8F4A4",
  green2_L: "#476808",
  green3: "#424E2B",
  pink1: "#FBDFE6",
  red2: "#8D1A1A",
  red3: "#713636",

  //dark mode colors
  black1_D: "#0D1117",
  black2_D: "#11161f",
  slate0: "#1A2330",
  slate1: "#1C2532",
  slate2: "#35404F",
  slateX: "#252D38",
  light_blue1: "#78D3F7",
  cloud1: "#1F3048",
  cloud2: "#30415A",
  shadow1_D: "rgba(15, 29, 50, 0.16)",
  shadow2_D: "rgba(10, 21, 37, 0.12)",

  slate3: "#536576",
  slate4: "#7687a4",
  slate5: "#2b3443",
  white0: "#A5B2C5",
  white1_D: "#BCC7D8",

  blue1_D: "#69A2F4",
  dark_blue1: "#02587A",

  green1: "#AFD760",
  green2_D: "#9BD131",
  dark_green1: "#353F22",
  yellow1: "#F7C169",
  yellow2: "#FFB43B",
  brown1: "#473925",
  orange1: "#c06c2f",
  orange2: "#ffad53",
  purple1: "#332c49",

  //workaround to make common @poktscan/ui components work
  white: "#FCFCFD",
  black: "#111A1D",
  white1: "#FCFCFD",
  blue50: "#5DB7E7", //sky_blue
  blue100: "#1E70EB", //primary500
  primary500: "#1E70EB",
  dark15: "#1E70EB",
  dark2: "#1E70EB",
  dark5: "#1E70EB",
  dark25: "#1E70EB",
  dark50: "#1E70EB",
  dark75: "#1E70EB",
  dark90: "#1E70EB",
  dark100: "#1E70EB",
};

const defaultTypography: ThemeOptions["typography"] = {
  fontFamily: ["Jost", '"OverpassMono"', '"Poppins"'].join(","),
  fontSize: 14,
  h1: {
    fontSize: 34,
    fontWeight: 400,
  },
  h2: {
    fontSize: 30,
    fontWeight: 400,
  },
  h3: {
    fontSize: 24,
    fontWeight: 400,
  },
  h4: {
    fontSize: 20,
  },
  h5: {
    fontSize: 18,
  },
  h6: {
    fontSize: 16,
  },
  body1: {
    fontSize: 14,
  },
  body2: {
    fontSize: 12,
  },
  subtitle1: {
    fontSize: 10,
  },
  button: {
    fontSize: 14,
    fontWeight: 700,
  },
};

const defaultOptions: ThemeOptions = {
  palette: {
    common: {
      black: customColors.black1_L,
      white: customColors.pure_white,
    },
    primary: {
      main: customColors.blue100,
    },
    secondary: {
      main: customColors.black1_L,
    },
    success: {
      main: customColors.light_green1,
      contrastText: customColors.pure_white,
    },
    error: {
      main: customColors.red1,
      contrastText: customColors.pure_white,
    },
    info: {
      main: customColors.white1_L,
      contrastText: customColors.pure_white,
    },
    grey: {
      "50": customColors.dark_gray1,
      "100": customColors.dark_gray1,
      "200": customColors.dark_gray1,
      "300": customColors.dark_gray1,
      "400": customColors.dark_gray1,
      "500": customColors.dark_gray1,
      "600": customColors.dark_gray1,
      "700": customColors.dark_gray1,
    },
  },
  customColors,
  isLight: true,
  isDark: false,
  spacing: 10,
  shape: {
    borderRadius: 5,
  },
  typography: defaultTypography,
  components: {
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
          textTransform: "none",
          height: 36,
          fontWeight: 500,
          padding: "8px 16px",
          backgroundColor: theme.isLight
            ? customColors.pure_white
            : customColors.cloud1,
          boxShadow: `0 1px 2px 0 ${
            theme.isLight ? customColors.shadow1_L : customColors.shadow1_D
          }`,
          color: theme.isLight ? customColors.black1_L : customColors.white1_D,
          border: `1px solid ${
            theme.isLight ? customColors.light_gray3 : customColors.cloud1
          }`,
          "&.Mui-disabled": {
            color: theme.isLight
              ? customColors.dark_gray2
              : customColors.slate2,
            backgroundColor: theme.isLight
              ? customColors.light_gray2
              : customColors.slate0,
            border: theme.isLight ? "none" : `1px solid ${customColors.slate2}`,
          },
        }),
      },
    },
    //Typography variant
    MuiTypography: {
      variants: [
        {
          props: { variant: "overpass" },
          style: {
            fontFamily: "Overpass Mono",
            fontSize: "14px",
            margin: 0,
            fontWeight: 400,
            lineHeight: 1.5,
          },
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&.active .MuiTypography-root": {
            fontWeight: 500,
          },
          borderRadius: 5,
        }),
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiModal: {
      defaultProps: {
        // disableScrollLock: true,
      },
    },
    MuiSelect: {
      defaultProps: {
        IconComponent: ArrowsIcon,
      },
      styleOverrides: {
        icon: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
          marginRight: "8px",
          fill: theme.isLight ? customColors.black1_L : customColors.white1_D,
        }),
        //@ts-ignore
        select: ({ _, theme }: { ownerState: any; theme: ThemeOptions }) => ({
          border: `1px solid ${
            theme.isLight ? customColors.light_gray2 : customColors.slate5
          }`,
          "& ~ fieldset": {
            border: "none",
          },
        }),
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <DropDownArrowIcon />,
      },
      styleOverrides: {
        endAdornment: {
          right: "8px!important",
        },

        popupIndicator: {
          marginTop: "-2px",
          "& path": {
            stroke: customColors.black1_L,
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
      },
      styleOverrides: {
        root: ({ ownerState, theme }: { ownerState: any; theme: any }) => ({
          "& .MuiInputBase-root": {
            borderRadius: "8px",
            height: "40px",
            "& input": {
              paddingLeft: "16px",
              paddingRight: "10px",
            },
            "& input::placeholder": {
              color: theme.isLight
                ? customColors.dark_gray1
                : customColors.white0,
              opacity: 1,
            },
          },
          "& fieldset": {
            borderColor: `${
              theme.isLight ? customColors.light_gray2 : customColors.slate5
            } !important`,
          },
          "& .MuiSelect-icon": {
            marginTop: "-8px",
            "& path": {
              stroke: customColors.black1_L,
            },
          },
          "& .MuiInputBase-root.Mui-disabled": {
            "& path": {
              stroke: customColors.black1_L,
            },
          },
        }),
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          fontSize: 20,
          fontWeight: 600,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "space-between",
          alignItems: "center",
          height: 70,
          padding: "20px 15px",
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.MuiInputLabel-shrink": {
            transform: "translate(13px, -9px) scale(0.77)",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          width: "calc(100% - 14px)",
          position: "absolute",
          left: 14,
          bottom: -16,
          margin: 0,
          fontSize: 11,
        },
      },
    },
    //@ts-ignore
    ["MuiDataGrid"]: {
      styleOverrides: {
        root: ({ _, theme }: { _: any; theme: ThemeOptions }) => ({
          border: "none",

          "& .MuiDataGrid-main": {
            border: `1px solid ${
              theme.isLight ? customColors.light_gray2 : customColors.slate5
            }`,
            backgroundColor: theme.isLight
              ? customColors.pure_white
              : customColors.slate1,
            borderRadius: 7,
          },
          "& .MuiDataGrid-columnHeaders": { display: "none" },
          "& .MuiDataGrid-virtualScroller": { marginTop: "0!important" },
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-cell": {
            fontSize: 14,
            borderBottom: `1px solid ${
              theme.isLight ? customColors.light_gray2 : customColors.slate5
            }`,
            padding: "0px 24px",
          },
          "& .MuiDataGrid-cell:focus": {
            outline: "none",
          },
          "& .MuiDataGrid-cell:focus-within": {
            outline: "none",
          },
        }),
      },
    },
  },
};

const lightOptions: ThemeOptions = merge({}, defaultOptions, {
  palette: {
    mode: "light",
    primary: {
      main: customColors.pure_white,
      contrastText: customColors.black1_L,
    },
    secondary: {
      main: customColors.black1_L,
      contrastText: customColors.black1_L,
    },
    text: {
      primary: customColors.black1_L,
      secondary: customColors.dark_gray1,
      disabled: customColors.dark_gray2,
    },
    background: {
      default: customColors.pure_white,
      paper: customColors.pure_white,
    },
    success: {
      main: customColors.light_green1,
    },
    divider: customColors.light_gray3,
    address: customColors.blue1_L,
  },
  shape: {
    borderRadius: 5,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.light_gray1,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: customColors.light_gray1,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.pure_white,
          boxShadow: `0 1px 4px 0 ${customColors.shadow2_L}`,
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: customColors.dark_gray1,
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&.active, &:hover": {
            backgroundColor: customColors.light_gray2,
          },
        }),
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            color: customColors.black1_L,
            backgroundColor: customColors.pure_white,
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.customColors.light_gray3}`,
            boxShadow: `0 1px 2px 0 ${customColors.shadow1_L}`,
            padding: theme.spacing(1),
          }),
        },
      ],
    },
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: customColors.light_gray1,
          "&:hover, &:focus, &:active": {
            color: customColors.light_gray3,
          },
        },
        colorSecondary: {
          color: customColors.light_gray1,
          "&:hover, &:focus, &:active": {
            color: customColors.light_gray3,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: customColors.dark_gray1,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.dark_gray1,
        },
      },
    },
  },
});

const darkOptions: ThemeOptions = merge({}, defaultOptions, {
  isDark: true,
  isLight: false,
  palette: {
    mode: "light",
    primary: {
      main: customColors.cloud1,
      contrastText: customColors.white1_D,
    },
    secondary: {
      main: customColors.slate0,
      contrastText: customColors.white1_D,
    },
    text: {
      primary: customColors.white1_D,
      secondary: customColors.light_gray3,
      disabled: customColors.slate1,
    },
    background: {
      default: customColors.black1_D,
      paper: customColors.slate1,
    },
    divider: customColors.cloud2,
    address: customColors.blue1_D,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.black1_D,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: customColors.black1_D,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 1px 4px 0 ${customColors.shadow2_L}`,
          border: "none",
        },
      },
    },
    MuiDialogContent: {
      styleOverrides: {
        root: {
          color: customColors.white0,
        },
      },
    },
    MuiIconButton: {
      variants: [
        {
          props: { variant: "outlined" },
          style: ({ theme }) => ({
            color: customColors.slate4,
            backgroundColor: customColors.cloud1,
            borderRadius: theme.shape.borderRadius,
            border: `1px solid ${theme.customColors.cloud2}`,
            padding: theme.spacing(1),
            boxShadow: `0 1px 2px 0 ${customColors.shadow1_D}`,
          }),
        },
      ],
    },
    MuiListItemButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          "&.active, &:hover": {
            backgroundColor: customColors.slate1,
          },
        }),
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        colorPrimary: {
          color: customColors.slate4,
          "&:hover, &:focus, &:active": {
            color: customColors.slate3,
          },
        },
        colorSecondary: {
          color: customColors.slate4,
          "&:hover, &:focus, &:active": {
            color: customColors.slate3,
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: customColors.white0,
          backgroundColor: customColors.black2_D,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: customColors.black1_D,
          color: customColors.white1_D,
        },
      },
    },
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: customColors.slate3,
          "&::after": {
            backgroundColor: customColors.slate2,
          },
        },
      },
    },
  },
});

export const ColorModeContextProvider: React.FunctionComponent = ({
  children,
}) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = React.useState<ColorMode>(
    prefersDarkMode ? ColorMode.dark : ColorMode.light
  );
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        const newMode =
          mode === ColorMode.light ? ColorMode.dark : ColorMode.light;
        setMode(newMode);
        return newMode;
      },
      setColorMode: (mode: ColorMode) => {
        setMode(mode);
      },
      mode,
    }),
    [mode]
  );

  const theme = React.useMemo(
    () => createTheme(mode === "light" ? lightOptions : darkOptions),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProviderMui theme={theme}>{children}</ThemeProviderMui>
    </ColorModeContext.Provider>
  );
};

export const useColorMode = () => React.useContext(ColorModeContext);
