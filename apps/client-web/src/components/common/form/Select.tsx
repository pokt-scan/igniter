import { MenuItem } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Select, { SelectProps } from "@mui/material/Select";

interface CustomSelectProps extends SelectProps {
  options: Array<{ label: string; value: string }>;
}

const CustomSelect = (props: CustomSelectProps) => {
  const theme = useTheme();
  const { options, sx, placeholder, ...other } = props;
  const background = theme.isLight
    ? theme.customColors.pure_white
    : "transparent";

  return (
    <Select
      {...other}
      sx={{
        height: "36px",
        backgroundColor: background,
        border: `1px solid ${
          theme.isLight
            ? theme.customColors.light_gray2
            : theme.customColors.slate5
        }`,
        "& .MuiInputBase-input": {
          border: "none !important",
        },
        // override disabled color
        "& .MuiSelect-select.Mui-disabled": {
          color: theme.customColors.dark_gray1,
          WebkitTextFillColor: theme.customColors.dark_gray1,
        },
        ...sx,
      }}
      displayEmpty
    >
      {placeholder ? (
        <MenuItem value="" disabled>
          {placeholder}
        </MenuItem>
      ) : null}
      {options.map((option) => (
        <MenuItem key={option.label} value={option.value} color="red">
          {option.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default CustomSelect;
