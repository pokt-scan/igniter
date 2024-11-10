import type {
  PopoverActions,
  ThemeOptions,
  TypographyProps,
} from "@mui/material";
import React, { useCallback, useEffect, useMemo, useRef } from "react";
import { signOut } from "next-auth/react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import isEmpty from "lodash/isEmpty";
import Avatar from "@mui/material/Avatar";
import useMediaQuery from "@mui/material/useMediaQuery";
import Divider from "@mui/material/Divider";
import { getInitials } from "@/lib/utils";

interface ItemProps {
  textAlign?: "end" | "start";
  text: string;
  onClick?: () => void;
  fontColor?: string;
  secondaryText?: string | number;
  hide?: boolean;
  disabled?: boolean;
  justifyContent?: "flex-end" | "flex-start";
}

interface StyledTypography extends TypographyProps {
  disabled?: boolean;
}

const StyledTypography: React.FC<StyledTypography> = styled(
  Typography
)<StyledTypography>(
  ({ theme, disabled }: { theme: ThemeOptions; disabled?: boolean }) => ({
    width: 100,
    fontSize: theme?.typography?.h6?.fontSize,
    fontWeight: 500,
    ...(!disabled && {
      cursor: "pointer",
      "&:hover": {
        textDecoration: "underline",
      },
    }),
    userSelect: "none",
    opacity: disabled ? 0.5 : 1,
    lineHeight: "20px",
    verticalAlign: "center",
  })
);

const MenuItem: React.FC<ItemProps> = ({
  textAlign = "end",
  text,
  onClick,
  fontColor,
  secondaryText,
  hide,
  disabled,
  justifyContent = "flex-end",
}) => {
  return (
    <Box
      height={25}
      width={"100%"}
      display={hide ? "none" : "flex"}
      alignItems={"center"}
      justifyContent={justifyContent}
    >
      <StyledTypography
        textAlign={textAlign}
        onClick={!disabled ? onClick : undefined}
        disabled={disabled}
        sx={(theme: any) => ({
          color: fontColor || "auto",
          ...(secondaryText && {
            "::after": {
              color: theme.customColors.black1_L,
              content: `" ${secondaryText}"`,
            },
          }),
        })}
      >
        {text}
      </StyledTypography>
    </Box>
  );
};

const UserMenu: React.FC = () => {
  const theme = useTheme();
  const { user } = {
    user: { name: "John Doe", email: "test@mail.com" },
  };
  const userRef = useRef<HTMLDivElement>(null);
  const popoverActions = useRef<PopoverActions>();

  const [openUserMenu, setOpenUserMenu] = React.useState(false);
  const [anchorUserMenu, setAnchorUserMenu] =
    React.useState<HTMLDivElement | null>(null);

  const commonDividerStyles = {
    width: 130,
    borderWidth: 0.1,
    borderColor: theme.customColors.black1_L,
  };

  useEffect(() => {
    if (popoverActions.current) {
      popoverActions.current.updatePosition();
    }
  }, []);

  const onOpenUserMenu = useCallback(() => {
    setAnchorUserMenu(userRef?.current);
    setOpenUserMenu(true);
  }, []);

  const onCloseUserMenu = useCallback(() => {
    setAnchorUserMenu(null);
    setOpenUserMenu(false);
  }, []);

  const handleSignOut = useCallback(() => {
    signOut();
    onCloseUserMenu();
  }, [signOut, onCloseUserMenu]);

  const userIcon = useMemo(() => {
    const size = 35;
    const arrowsColor = theme.isLight ? "#8b969b" : "#536576";

    return (
      <Box
        ref={userRef}
        sx={{
          width: size + 15,
          height: size,
          display: "inline-flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={onOpenUserMenu}
      >
        <Avatar
          alt={"user photo"}
          sx={{
            width: size,
            height: size,
            cursor: "pointer",
            fontSize: { xs: 15, lg: 17 },
            marginRight: "10px",
          }}
        >
          {getInitials(user?.name || "")}
        </Avatar>
      </Box>
    );
  }, [theme, onOpenUserMenu, user]);

  const userInfo = useMemo(() => {
    return (
      <>
        <Box height={36}>
          <Typography
            textAlign={"end"}
            sx={{
              height: 15,
            }}
          >
            {user?.name ?? ""}
          </Typography>
          <Typography
            noWrap
            textAlign={"end"}
            sx={{
              height: 20,
              fontSize: theme.typography.subtitle1.fontSize,
              fontWeight: 400,
            }}
          >
            {user?.email ?? ""}
          </Typography>
        </Box>
      </>
    );
  }, [theme, user]);

  const signOutItem = useMemo(() => {
    if (!user) return null;

    return (
      <>
        <Divider
          sx={{
            mt: 0.7,
            mb: 0,
            ...commonDividerStyles,
          }}
        />
        <MenuItem
          text={"Sign Out"}
          onClick={handleSignOut}
          fontColor={theme.customColors.red1}
        />
      </>
    );
  }, [user, handleSignOut]);

  return (
    <Box>
      {userIcon}
      <Popover
        open={openUserMenu}
        onClose={onCloseUserMenu}
        anchorEl={anchorUserMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        action={popoverActions as never}
        elevation={0}
        PaperProps={{
          sx: {
            marginTop: 0.5,
            boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.15)",
            borderRadius: "2px",
            backgroundColor: theme.palette.background.paper,
          },
        }}
      >
        <Box
          width={150}
          sx={{
            boxSizing: "border-box",
            borderRadius: "2px",
          }}
          padding={1}
          display={"flex"}
          flexDirection={"column"}
        >
          {!isEmpty(user) && userInfo}
          {signOutItem}
        </Box>
      </Popover>
    </Box>
  );
};

export default UserMenu;
