import React, { useCallback, useEffect, useMemo } from "react";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import MUIAppBar from "@mui/material/AppBar";
import { useTheme, styled, ThemeOptions } from "@mui/material/styles";
import DarkModeIcon from "../../assets/img/dark_mode.svg";
import LightModeIcon from "../../assets/img/light_mode.svg";
import LightLogo from "../../assets/img/logo/igniter_light.svg";
import DarkLogo from "../../assets/img/logo/igniter_dark.svg";
import MenuDarkIcon from "../../assets/img/appbar/navbar_icon_menu.svg";
import CloseLightIcon from "../../assets/img/appbar/navbar_icon_menu_close.svg";
import UserMenu from "./UserMenu";
import { useRouter } from "next/router";
import { ColorMode, ColorModeContext, useColorMode } from "../../theme";
import { Box, IconButton, useMediaQuery } from "@mui/material";
import { COLOR_MODE_SELECTION_KEY } from "../../lib/constants";
import CustomSvgIcon from "../common/CustomSvgIcon";

interface CustomToolbarProps extends ToolbarProps {
  expanded: boolean;
}

const CustomToolbar = styled(({ ...rest }: CustomToolbarProps) => (
  <Toolbar {...rest} />
))(({ theme, expanded }) => ({
  minHeight: 72,
  height: 72,
  paddingLeft: 18,
  paddingRight: 24,
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 80,
  },
  [theme.breakpoints.only("xs")]: {
    boxShadow: expanded ? "none!important" : "0px 4px 18px rgba(0, 0, 0, 0.1)",
  },
  [theme.breakpoints.down("md")]: {
    paddingRight: "10px!important",
    boxShadow: `${expanded ? 225 : 0}px 4px 18px rgba(0, 0, 0, 0.1)`,
  },
  [theme.breakpoints.only("md")]: {
    paddingRight: "25px!important",
    boxShadow: `${expanded ? 225 : 0}px 4px 18px rgba(0, 0, 0, 0.1)`,
  },
  [theme.breakpoints.up("lg")]: {
    paddingRight: "20px!important",
    boxShadow: `${expanded ? 225 : 75}px 4px 18px rgba(0, 0, 0, 0.1)`,
  },
  ...(expanded && {
    transition: theme.transitions.create("box-shadow", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!expanded && {
    transition: theme.transitions.create("box-shadow", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }),
}));

interface AppBarProps {
  drawerExpanded: boolean;
  toggleDrawer: (arg0: boolean) => (arg0: any) => void;
  closeDrawer: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  drawerExpanded,
  toggleDrawer,
  closeDrawer,
}) => {
  const theme = useTheme();
  const router = useRouter();

  const isLgOrHigher = useMediaQuery((theme: ThemeOptions) =>
    theme.breakpoints.up("lg")
  );
  const { mode } = React.useContext(ColorModeContext);
  const { toggleColorMode, setColorMode } = useColorMode();

  useEffect(() => {
    const restoredColorModeStr =
      localStorage.getItem(COLOR_MODE_SELECTION_KEY) ||
      JSON.stringify(ColorMode.dark);

    const restoredColorMode = JSON.parse(restoredColorModeStr) as ColorMode;
    setColorMode(restoredColorMode);
  }, [setColorMode]);

  const handleThemeModeChange = useCallback(() => {
    const newMode = toggleColorMode();
    localStorage.setItem(COLOR_MODE_SELECTION_KEY, JSON.stringify(newMode));
  }, [toggleColorMode]);

  const menuIcon = useMemo(() => {
    if (!isLgOrHigher) {
      return (
        <Stack direction={"row"} justifyContent={"flex-end"}>
          <IconButton onClick={toggleDrawer(!drawerExpanded)}>
            <CustomSvgIcon
              type={"interactive"}
              lightColor={theme.customColors.black}
              darkColor={theme.customColors.white}
              inheritViewBox={true}
            >
              {drawerExpanded ? <CloseLightIcon /> : <MenuDarkIcon />}
            </CustomSvgIcon>
          </IconButton>
        </Stack>
      );
    } else {
      return null;
    }
  }, [isLgOrHigher, drawerExpanded]);

  return (
    <MUIAppBar
      elevation={0}
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
      onClick={closeDrawer}
    >
      <CustomToolbar expanded={drawerExpanded ? true : undefined}>
        <Grid container>
          <Grid
            item
            xs={12}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Box
              display={"flex"}
              alignItems={"center"}
              onClick={() => router.push("/")}
              sx={{ cursor: "pointer" }}
            >
              {theme.isLight ? (
                <LightLogo width="145px" height="50px" />
              ) : (
                <DarkLogo width="145px" height="50px" />
              )}
            </Box>

            <Stack direction={"row"} spacing={"16px"} alignItems={"center"}>
              {/*@ts-ignore*/}
              <IconButton
                onClick={handleThemeModeChange}
                variant="outlined"
                sx={{ padding: "6px" }}
              >
                {theme.isLight ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
              <UserMenu />
              {menuIcon}
            </Stack>
          </Grid>
        </Grid>
      </CustomToolbar>
    </MUIAppBar>
  );
};

export default AppBar;
