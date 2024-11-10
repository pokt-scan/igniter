import { useMemo } from "react";
import BaseDialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import type { LoadingOverLayProps } from "react-loading-overlay-ts";
import { DialogComponentProps } from "./Dialog";
import LoadingOverlay from "./LoadingOverlay";

export interface LoadingDialogComponentProps extends DialogComponentProps {
  loadingOverlayProps?: LoadingOverLayProps;
}

export const LoadingDialog = (props: LoadingDialogComponentProps) => {
  const {
    open,
    title,
    customHeader,
    onClose,
    actions,
    loadingOverlayProps,
    sxContentProps,
    sxActionsProps,
    children,
    ...other
  } = props;

  const dialogHeader = useMemo(
    () =>
      !customHeader ? (
        <DialogTitle sx={{ fontWeight: 400, padding: "25px 32px 0 32px" }}>
          {title}
        </DialogTitle>
      ) : (
        customHeader
      ),
    [customHeader, title]
  );

  return (
    <BaseDialog open={open} onClose={onClose} {...other}>
      {dialogHeader}
      <LoadingOverlay {...props?.loadingOverlayProps}>
        <DialogContent
          sx={{
            ...props.sxContentProps,
            padding: "0px 32px",
            overflow: "hidden",
          }}
        >
          {children}
        </DialogContent>
        <DialogActions
          sx={{
            ...props.sxActionsProps,
            padding: "32px",
            margin: "32px 0px",
            "& > div": {
              columnGap: "12px",
            },
            "& .MuiButton-root": {
              width: "100%",
              height: "40px",
              fontSize: "14px",
            },
          }}
        >
          {actions}
        </DialogActions>
      </LoadingOverlay>
    </BaseDialog>
  );
};
