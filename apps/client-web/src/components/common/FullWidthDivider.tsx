import { Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";

//Sx props type
type FullWidthDividerProps = {
  styles?: React.CSSProperties;
};

const FullWidthDivider: React.FC<FullWidthDividerProps> = ({ styles }) => {
  const theme = useTheme();

  return (
    <Divider
      style={{
        color: theme.palette.divider,
        marginLeft: "-30px",
        marginRight: 0,
        width: "150%",
        ...styles,
      }}
    />
  );
};

export default FullWidthDivider;
