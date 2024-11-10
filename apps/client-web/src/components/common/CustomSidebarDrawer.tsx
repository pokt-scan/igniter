import React from "react";
import Drawer, { DrawerProps } from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

const closeDrawerWidth = 70;
const openDrawerWidth = 220;

interface CustomDrawerProps extends DrawerProps {
  expanded: boolean;
}

const CustomDrawer: React.FC<CustomDrawerProps> = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "expanded",
})<CustomDrawerProps>(({ theme, expanded }) => {
  return {
    width: 70,
    flexShrink: 0,
    position: "fixed",
    zIndex: theme.zIndex.drawer,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    visibility: "visible",
    ...(expanded && {
      [theme.breakpoints.only("xs")]: {
        width: "100vw",
      },
      [theme.breakpoints.up("sm")]: {
        width: openDrawerWidth,
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      overflowX: "hidden",
      "& .MuiDrawer-paper": {
        [theme.breakpoints.only("xs")]: {
          width: "100vw",
        },
        [theme.breakpoints.up("sm")]: {
          width: openDrawerWidth,
        },
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        overflowX: "hidden",
      },
    }),
    ...(!expanded && {
      [theme.breakpoints.up("xs")]: {
        width: 0,
      },
      [theme.breakpoints.up("lg")]: {
        width: closeDrawerWidth,
      },
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      "& .MuiDrawer-paper": {
        [theme.breakpoints.up("xs")]: {
          width: 0,
        },
        [theme.breakpoints.up("lg")]: {
          width: closeDrawerWidth,
        },
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
      },
    }),
  };
});

export default CustomDrawer;
