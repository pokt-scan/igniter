import { type ReactElement, useMemo } from "react";
import type { SxProps } from "@mui/material";
import BaseDialog, { type DialogProps } from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton, { type IconButtonProps } from "@mui/material/IconButton";
import { Close } from "@mui/icons-material";

export interface DialogComponentProps extends DialogProps {
  actions?: ReactElement | Array<ReactElement>;
  customHeader?: ReactElement;
  children: ReactElement | Array<ReactElement>;
  sxContentProps?: SxProps;
  sxActionsProps?: SxProps;
}

export const Dialog = (props: DialogComponentProps) => {
  const { open, title, customHeader, onClose, actions, children, ...other } =
    props;

  const dialogHeader = useMemo(
    () =>
      !customHeader ? (
        <DialogTitle
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {title}
          {onClose && (
            <IconButton onClick={onClose as IconButtonProps["onClick"]}>
              <Close />
            </IconButton>
          )}
        </DialogTitle>
      ) : (
        customHeader
      ),
    [customHeader, onClose, title]
  );

  return (
    <BaseDialog open={open} onClose={onClose} {...other}>
      {dialogHeader}
      <DialogContent sx={{ ...props.sxContentProps }}>{children}</DialogContent>
      <DialogActions sx={{ ...props.sxActionsProps }}>{actions}</DialogActions>
    </BaseDialog>
  );
};
