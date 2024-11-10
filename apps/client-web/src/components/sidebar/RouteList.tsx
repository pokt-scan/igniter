import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";

const StyledList = styled(List)(({ theme }) => ({
  paddingTop: "45px",
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: "8px 8px",
}));

const StyledListItemButton = styled(ListItemButton)(({ theme }) => ({
  "&.active .MuiTypography-root": {
    fontWeight: 500,
    color: theme.isLight
      ? theme.customColors.black1_L
      : theme.customColors.white1_D,
  },
  borderRadius: 5,
  color: theme.isLight
    ? theme.customColors.dark_gray1
    : theme.customColors.white0,

  ":not(.active) svg ": {
    stop: {
      stopColor: theme.isLight
        ? theme.customColors.light_gray4
        : theme.customColors.white0,
    },
    "linearGradient.baseColor stop": {
      stopColor: theme.isLight
        ? theme.customColors.pure_white
        : theme.customColors.black1_D,
    },
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  minWidth: 45,
}));

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  marginTop: 3,
  marginBottom: 3,
}));

export default function RouteList({ routeList, handleItemClick }) {
  const theme = useTheme();
  return (
    <StyledList>
      {routeList.map((item, index) => (
        <StyledListItem
          key={item.text}
          onClick={() => item.disabled || handleItemClick(item.route)}
          disabled={item.disabled}
          disablePadding
        >
          <StyledListItemButton className={item.isSelected ? "active" : ""}>
            <Tooltip title={item.text}>
              <StyledListItemIcon>{item.icon}</StyledListItemIcon>
            </Tooltip>
            <StyledListItemText primary={item.text} />
          </StyledListItemButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
