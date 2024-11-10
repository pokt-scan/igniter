import { Box, Button, Stack, Theme, Typography } from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";
import QRCode from "react-qr-code";
import { useCallback, useMemo } from "react";
import { LoadingDialog } from "../common/LoadingDialog";

const StyledBox = styled(Box)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: theme.palette.divider,
  padding: "49px 35px 30px 35px",
  display: "flex",
  flexDirection: "column",
  marginTop: "15px",
  alignItems: "center",
}));

const ReceiveDialog = ({ open, onClose, address }) => {
  const theme: Theme = useTheme();
  const onClickCopy = useCallback(() => {
    navigator.clipboard.writeText(address);
  }, [address]);

  const actions = useMemo(
    () => (
      <Stack direction="row" justifyContent="space-between" width={1}>
        <Button size="small" onClick={onClickCopy}>
          Copy Address
        </Button>

        <Button size="small" onClick={onClose}>
          Close
        </Button>
      </Stack>
    ),
    [onClose]
  );

  const addressColor = theme.isLight
    ? theme.customColors.blue1_L
    : theme.customColors.blue1_D;
  const qrColors = {
    bgColor: theme.isLight ? "#ffffff" : "#000000",
    fgColor: theme.isLight ? "#000000" : "#ffffff",
  };

  return (
    <LoadingDialog
      open={open}
      onClose={onClose}
      actions={actions}
      title="Receive"
    >
      <Typography mt="10px">Pocket Network</Typography>
      <StyledBox>
        <QRCode
          value={address}
          size={174}
          bgColor={qrColors.bgColor}
          fgColor={qrColors.fgColor}
        />
        <Typography mt="23px" mb="10px">
          POKT Address
        </Typography>
        <Typography variant="overpass" color={addressColor}>
          {address}
        </Typography>
      </StyledBox>
    </LoadingDialog>
  );
};

export default ReceiveDialog;
