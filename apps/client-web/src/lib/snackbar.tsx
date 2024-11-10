import type {
  OptionsObject,
  SnackbarKey,
  SnackbarMessage,
  VariantType,
} from "notistack";
import { useSnackbar as useSnackbarBase } from "notistack";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import React, { useCallback } from "react";
import uniqueId from "lodash/uniqueId";

interface AddSnackbarProps {
  enqueue: (message: SnackbarMessage, options: OptionsObject) => SnackbarKey;
  close: (key?: SnackbarKey) => void;
  message: SnackbarMessage;
  variant: VariantType;
  duration: number;
  otherProps: OptionsObject;
}

type ShowToastProps = Pick<
  AddSnackbarProps,
  Exclude<keyof AddSnackbarProps, "enqueue" | "close">
>;

const addSnackbarToQueue = ({
  enqueue,
  close,
  message,
  variant = "success",
  duration = 3000,
  otherProps = {},
}: AddSnackbarProps) => {
  const snackbarKey = uniqueId();

  enqueue(message, {
    key: snackbarKey,
    action: (
      <IconButton
        aria-label="close"
        size="small"
        onClick={() => close(snackbarKey)}
      >
        <CloseIcon sx={{ color: "white" }} />
      </IconButton>
    ),
    variant,
    autoHideDuration: duration,
    ...otherProps,
  });
};

const useSnackbar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbarBase();

  const showToast = useCallback(
    (
      message,
      variant: VariantType = "success",
      duration = 3000,
      otherProps = {}
    ) =>
      addSnackbarToQueue({
        enqueue: enqueueSnackbar,
        close: closeSnackbar,
        message,
        variant,
        duration,
        otherProps,
      }),
    [enqueueSnackbar, closeSnackbar]
  );

  return {
    showToast,
  };
};

export { useSnackbar, addSnackbarToQueue };
