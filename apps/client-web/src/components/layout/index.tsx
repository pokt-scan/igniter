import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Paper, { PaperProps } from "@mui/material/Paper";
import GlobalStyles from "@mui/material/GlobalStyles";
import { Backdrop, ThemeOptions } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppBar from "../appbar";
import Sidebar from "../sidebar";
import { ColorModeContext } from "../../theme";

interface LayoutProps {
  children: ReactNode;
  paperProps?: PaperProps;
}

export default function Layout({ children, paperProps = {} }: LayoutProps) {
  const theme: ThemeOptions = useTheme();
  const { mode } = React.useContext(ColorModeContext);
  const { sx: paperSx, ...otherPaperProps } = paperProps;

  const isLightMode = mode === "light";

  const [drawerExpanded, setDrawerExpanded] = React.useState<boolean>(false);

  const toggleDrawer =
    (open: boolean | ((prevState: boolean) => boolean)) =>
    (event: { type: string; key: string }) => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
      setDrawerExpanded(open);
    };

  const closeDrawerOnClickOutside = () => {
    if (drawerExpanded) setDrawerExpanded(false);
  };

  const scrollbarColor = theme.customColors?.light_gray3;
  const scrollbarBackgroundColor = theme.customColors?.light_gray2;

  return (
    <>
      <GlobalStyles
        styles={{
          WebkitFontSmoothing: "antialiased",
          body: {
            scrollbarColor: `${scrollbarColor} ${scrollbarBackgroundColor}`,
            overflowY: "auto",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              width: "8px", //13
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              border: `3px solid transparent`, //4
              backgroundColor: scrollbarColor,
              backgroundClip: "content-box",
              borderRadius: "4px", //10
            },
            "&::-webkit-scrollbar-track, & *::-webkit-scrollbar-track": {
              backgroundColor: scrollbarBackgroundColor,
              borderRadius: "4px", //10
            },
          },
        }}
      />
      <Box display={"flex"} height={"100%"} width={"100%"} flex={1}>
        <Sidebar
          drawerExpanded={drawerExpanded}
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawerOnClickOutside}
        />
        <AppBar
          drawerExpanded={drawerExpanded}
          toggleDrawer={toggleDrawer}
          closeDrawer={closeDrawerOnClickOutside}
        />
        <Paper
          elevation={0}
          sx={{
            paddingTop: "110px",
            paddingBottom: "20px",
            paddingLeft: { xs: "10px", lg: "90px", xl: "120px" },
            paddingRight: { xs: "10px", lg: "60px" },
            width: "100%",
            height: "100vh",
            backgroundColor: isLightMode
              ? theme.customColors?.light_gray1
              : theme.customColors?.black1_D,
            overflowY: "auto",
            "&::-webkit-scrollbar": {
              width: 0, // for Chrome & IE 11
            },
            scrollbarWidth: "none", // for Firefox,
            ...paperSx,
          }}
          {...otherPaperProps}
        >
          {children}
        </Paper>
        <Backdrop
          open={drawerExpanded}
          onClick={closeDrawerOnClickOutside}
          sx={{
            backgroundColor: theme.isLight
              ? "rgba(201, 201, 201, 0.5)" //dark25
              : "auto",
          }}
        />
      </Box>
    </>
  );
}

export function ListLayout({ children, ...props }: LayoutProps) {
  return (
    <Layout {...props}>
      <Box padding={1} height={1}>
        {children}
      </Box>
    </Layout>
  );
}
