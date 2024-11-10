import SvgIcon from "@mui/material/SvgIcon";
import { useTheme } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material";
import React from "react";
import { SvgIconProps } from "@mui/material/SvgIcon/SvgIcon";
import { ColorModeContext } from "../../theme";

interface CustomSvgIcon extends SvgIconProps {
  customColor?: string;
  darkColor?: string;
  lightColor?: string;
  type?: "route" | "static" | "interactive" | "custom";
  isSelected?: boolean;
  selectedColor?: string;
  fillChildren?: boolean;
  customOpacity?: number;
}

const CustomSvgIcon: React.FC<CustomSvgIcon> = (props) => {
  const {
    children,
    type,
    inheritViewBox = true,
    fillChildren = false,
    customOpacity,
  } = props;
  const theme: ThemeOptions = useTheme();
  const { mode } = React.useContext(ColorModeContext);
  const isLightModeActive = mode === "light";

  switch (type) {
    case "route": {
      const {
        isSelected = false,
        selectedColor = theme.customColors.blue100,
        lightColor = theme.customColors.dark25,
        darkColor = theme.customColors.dark75,
      } = props;

      const color = isSelected
        ? `${selectedColor}!important`
        : isLightModeActive
        ? lightColor
        : darkColor;
      return (
        <SvgIcon
          inheritViewBox={inheritViewBox}
          sx={{ "& path, & line": { stroke: color, fill: color } }}
        >
          {children}
        </SvgIcon>
      );
    }
    case "interactive": {
      const {
        darkColor = theme.customColors.dark25,
        lightColor = theme.customColors.dark75,
      } = props;
      const color = isLightModeActive ? lightColor : darkColor;
      return (
        <SvgIcon
          inheritViewBox={inheritViewBox}
          sx={{
            "& path, & line": {
              stroke: color,
              fill: fillChildren ? color : "none",
            },
            "& circle": {
              stroke: color,
            },
            ...props.sx,
          }}
          onClick={props.onClick}
        >
          {children}
        </SvgIcon>
      );
    }
    case "static": {
      const { customColor: color, customOpacity } = props;
      return (
        <SvgIcon
          inheritViewBox={inheritViewBox}
          sx={{
            "& path, & line, & g": {
              stroke: fillChildren ? "none" : color,
              opacity: customOpacity && customOpacity,
              fill: fillChildren ? color : "none",
            },
            "& circle": {
              fill: color,
            },
          }}
        >
          {children}
        </SvgIcon>
      );
    }
    case "custom": {
      return <SvgIcon {...props}>{children}</SvgIcon>;
    }
    default: {
      return <SvgIcon inheritViewBox={inheritViewBox}>{children}</SvgIcon>;
    }
  }
};

export default CustomSvgIcon;
