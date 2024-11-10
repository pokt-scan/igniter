import { Button, Stack, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { roundAndSeparate } from "@/lib/utils";

interface BinSelectSwitchProps {
  value: number;
  onChange: (value: number) => void;
  options: { label: string; value: number }[];
  minBin?: number;
  maxBin?: number;
  disabled?: boolean;
}

interface BinOptionProps {
  checked: boolean;
  value: number;
  label: string;
  disabled?: boolean;
  onChange: () => void;
}

const BinOption = (props: BinOptionProps) => {
  const { checked, value, onChange, disabled } = props;
  const theme = useTheme();

  const checkedColor = theme.isLight
    ? theme.customColors.pure_white
    : theme.customColors.cloud1;

  return (
    <Button
      onClick={onChange}
      fullWidth
      sx={{
        height: "50px",
        borderRadius: "5px",
        border: "none",
        backgroundColor: checked ? checkedColor : "transparent",
        "&:hover ": {
          backgroundColor: theme.palette.divider,
        },
      }}
      disabled={disabled}
    >
      <Stack direction="column" alignItems="flex-start">
        <Typography variant="overpass">{roundAndSeparate(value, 2)}</Typography>
        <Typography
          variant="overpass"
          fontSize="10px"
          color={disabled ? "disabled" : "textSecondary"}
        >
          POKT
        </Typography>
      </Stack>
    </Button>
  );
};

const BinSelectSwitch = (props: BinSelectSwitchProps) => {
  const theme = useTheme();
  const { value, onChange, disabled, minBin, maxBin } = props;

  const bgColor = theme.isLight
    ? theme.customColors.light_gray2
    : theme.customColors.black2_D;

  return (
    <>
      <Stack
        direction="row"
        spacing="4px"
        bgcolor={bgColor}
        borderRadius="8px"
        p="4px"
      >
        {props.options.map((option, index) =>
          option.value ? (
            <BinOption
              key={index}
              checked={value === option.value}
              value={option.value}
              label={option.label}
              onChange={() => onChange(option.value)}
              disabled={
                disabled ||
                (minBin && option.value < minBin) ||
                (maxBin && option.value > maxBin)
              }
            />
          ) : null
        )}
      </Stack>
    </>
  );
};

export default BinSelectSwitch;
