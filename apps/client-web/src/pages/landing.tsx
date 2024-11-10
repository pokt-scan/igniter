import React from "react";
import {
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  styled,
} from "@mui/material";
import IgniterLogo from "@/assets/img/logo/igniter_dark.svg";
import { usePoktWalletContext } from "@/context/PoktWallet";
import PoktIcon from "@/assets/img/pokt.svg";
import { signIn } from "next-auth/react";
import Image from "next/image";
import LandingImage from "@/assets/img/landing.webp";

interface HeaderProps {
  handleLogin: () => void;
  poktWalletAvailable: boolean;
}

const backgroundColor = "#121212";

const Header: React.FC<HeaderProps> = ({
  handleLogin,
  poktWalletAvailable,
}) => {
  return (
    <AppBar
      position="fixed"
      sx={{ backgroundColor, alignItems: "center", padding: "20px" }}
      elevation={0}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          maxWidth: "1200px",
          width: "100%",
          zIndex: 2,
        }}
      >
        <Box display="flex" alignItems="center" flexGrow={1}>
          <IgniterLogo width="145px" height="50px" />
        </Box>
        <Box display="flex" alignItems="center">
          {poktWalletAvailable ? (
            <Button
              variant="contained"
              startIcon={<PoktIcon />}
              onClick={(e) => {
                e.preventDefault();
                handleLogin();
              }}
            >
              Login with POKT Wallet
            </Button>
          ) : (
            <Typography variant="body1" color="#fff">
              Please install a POKT wallet extension
            </Typography>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

const Footer: React.FC = () => (
  <Box
    component="footer"
    width="100%"
    padding={2}
    textAlign="center"
    position="fixed"
    bottom={0}
  >
    <Typography variant="body2" color="#fff">
      © 2024 Igniter. developed by POKTScan
    </Typography>
  </Box>
);

const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    maxWidth: "700px",
    padding: "0 50px",
    textAlign: "center",
  },
}));

const StyledImage = styled(Image)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    height: "150px",
    width: "400px",
  },
  [theme.breakpoints.up("md")]: {
    width: "515px",
    height: "275px",
  },
}));

const Page: React.FC = () => {
  const { connectWallet, poktWalletAvailable, loginWithPokt } =
    usePoktWalletContext();

  const handleLogin = async () => {
    try {
      const { address } = await connectWallet();
      const { message, signature, publicKey } = await loginWithPokt(address);

      signIn("siwp", {
        message: JSON.stringify(message),
        signature,
        publicKey,
        callbackUrl: "/",
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      paddingTop="64px"
      paddingBottom="64px"
      bgcolor={backgroundColor}
    >
      <Header
        handleLogin={handleLogin}
        poktWalletAvailable={poktWalletAvailable}
      />

      <StyledBox
        display="flex"
        flexDirection="row"
        justifyContent="center"
        alignItems="center"
        maxWidth="1000px"
        padding={2}
        gap={2}
      >
        <Box>
          <Typography variant="h1" color="#fff" fontWeight={800}>
            Light up your earnings with POKTscan&apos;s Igniter:
          </Typography>
          <Typography variant="h4" color="#fff" marginTop="25px">
            Effortlessly stake your tokens across multiple providers using our
            streamlined interface. Ignite your potential and make your tokens
            work for you.
          </Typography>
        </Box>
        <StyledImage
          src={LandingImage}
          alt="Igniter Landing"
          style={{
            position: "relative",
            boxSizing: "border-box",
          }}
        />
      </StyledBox>

      <Footer />
    </Box>
  );
};

export default Page;
