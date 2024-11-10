import React from "react";
import { CircularProgress } from "@mui/material";
import LoadingOverlayBase, {
  LoadingOverLayProps,
} from "react-loading-overlay-ts";
import { useTheme } from "@mui/material/styles";

type ExtendedLoadingOverLayProps = LoadingOverLayProps & {
  overlayStyles?: React.CSSProperties;
  contentStyles?: React.CSSProperties;
  wrapperStyles?: React.CSSProperties;
};

const LoadingOverlay: React.FC<ExtendedLoadingOverLayProps> = ({
  active = false,
  spinner = <CircularProgress color="inherit" />,
  children,
  overlayStyles = {},
  contentStyles = {},
  wrapperStyles = {},
  ...props
}) => {
  const theme = useTheme();

  return (
    <LoadingOverlayBase
      active={active}
      spinner={spinner}
      // @ts-ignore
      styles={{
        overlay: (base) => ({
          ...base,
          background: "rgba(255, 255, 255, 0.8)",
          color: theme.customColors.primary500,
          ...overlayStyles,
        }),
        content: (base) => ({
          ...base,
          background: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          ...contentStyles,
        }),
        wrapper: (base) => ({
          ...base,
          ...wrapperStyles,
        }),
      }}
      {...props}
    >
      {children}
    </LoadingOverlayBase>
  );
};

export default LoadingOverlay;
