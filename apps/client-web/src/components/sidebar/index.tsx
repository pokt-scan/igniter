import React from "react";
import { useRouter } from "next/router";
import {
  Drawer,
  IconButton,
  Stack,
  SvgIcon,
  ThemeOptions,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import HubIcon from "@mui/icons-material/Hub";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import DashboardIcon from "@mui/icons-material/Dashboard";
import HiveIcon from "@mui/icons-material/Hive";
import { ColorModeContext } from "../../theme";
import RouteList from "./RouteList";

import OverviewLightIcon from "../../assets/img/sidebar/light/overview.svg";
import NodesLightIcon from "../../assets/img/sidebar/light/nodes.svg";

import OverviewDarkIcon from "../../assets/img/sidebar/dark/overview.svg";
import NodesDarkIcon from "../../assets/img/sidebar/dark/nodes.svg";

import OpenCloseIcon from "../../assets/img/sidebar/sidebar_icon_open_close.svg";
import CustomSvgIcon from "../common/CustomSvgIcon";
import CustomDrawer from "../common/CustomSidebarDrawer";

interface SideBarProps {
  drawerExpanded: boolean;
  toggleDrawer: (arg0: boolean) => (arg0: any) => void;
  closeDrawer: () => void;
}

const sidebarWidth = 260;

const Sidebar: React.FC<SideBarProps> = ({
  drawerExpanded,
  toggleDrawer,
  closeDrawer,
}) => {
  const { mode } = React.useContext(ColorModeContext);
  const theme: ThemeOptions = useTheme();
  const isLightMode = mode === "light";

  const router = useRouter();

  const handleItemClick = (route: string) => {
    router.push(route);
  };

  const routeList = [
    {
      route: "/",
      isSelected: router.pathname === "/",
      icon: isLightMode ? (
        <DashboardIcon />
      ) : (
        <DashboardIcon style={{ color: theme.customColors.gray1 }} />
      ),
      text: "Overview",
      includeTooltip: true,
    },
    {
      route: "/nodes",
      isSelected: router.pathname.startsWith("/nodes"),
      icon: isLightMode ? (
        <WorkspacesIcon />
      ) : (
        <WorkspacesIcon style={{ color: theme.customColors.gray1 }} />
      ),
      text: "Nodes",
      includeTooltip: true,
    },
    // {
    //   route: "/stake",
    //   isSelected: router.pathname.startsWith("/stake"),
    //   icon: isLightMode ? (
    //     <HubIcon />
    //   ) : (
    //     <HubIcon style={{ color: theme.customColors.gray1 }} />
    //   ),
    //   text: "Stake",
    //   disabled: true,
    //   includeTooltip: true,
    // },
    {
      route: "/providers",
      isSelected: router.pathname.startsWith("/provider"),
      icon: isLightMode ? (
        <HiveIcon />
      ) : (
        <HiveIcon style={{ color: theme.customColors.gray1 }} />
      ),
      text: "Providers",
      includeTooltip: true,
    },
  ];

  return (
    <CustomDrawer
      anchor={"left"}
      variant={"permanent"}
      expanded={drawerExpanded}
      open={true}
      PaperProps={{
        sx: {
          boxShadow: "4px 20px 18px rgba(0, 0, 0, 0.1)",
          paddingTop: { xs: "135px", md: "20px" },
        },
      }}
    >
      <Toolbar />
      <Box
        sx={{
          overflow: "hidden auto",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: " space-between",
        }}
      >
        <Box>
          <Box
            marginX={drawerExpanded ? "inherit" : "10px"}
            width={drawerExpanded ? "100%" : 50}
            height={40}
            display={"flex"}
            justifyContent={drawerExpanded ? "flex-end" : "center"}
            sx={{
              marginLeft: {
                xs: "inherit",
                sm: drawerExpanded ? "0px" : "10px",
              },
              "& .MuiSvgIcon-root": {
                width: 50,
                height: 40,
                transform: `rotate(${drawerExpanded ? 180 : 0}deg)`,
              },
            }}
          >
            <IconButton
              onClick={toggleDrawer(!drawerExpanded)}
              disableFocusRipple
              disableRipple
              disableTouchRipple
            >
              <CustomSvgIcon
                darkColor={theme.customColors.gray1}
                lightColor={theme.customColors.slate3}
                type={"interactive"}
                fillChildren={true}
              >
                <OpenCloseIcon />
              </CustomSvgIcon>
            </IconButton>
          </Box>
          <Divider variant={"middle"} />
          <RouteList routeList={routeList} handleItemClick={handleItemClick} />
        </Box>
      </Box>
    </CustomDrawer>
  );
};

export default Sidebar;
