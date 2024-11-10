import { ReactNode } from "react";
import { ApolloProvider } from "@apollo/client/react";
import Head from "next/head";
import { SnackbarProvider } from "notistack";
import Zoom from "@mui/material/Zoom";
import CssBaseline from "@mui/material/CssBaseline";
import createApolloClient from "../lib/apollo-client";
import RegisterChartControllers from "./charts/RegisterChartControllers";
import { PoktWalletContextProvider } from "../context/PoktWallet";

const client = createApolloClient();

export default function Root({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Middleman Platform</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CssBaseline />
      <RegisterChartControllers />
      <SnackbarProvider maxSnack={3} TransitionComponent={Zoom}>
        <PoktWalletContextProvider>
          <ApolloProvider client={client}>{children}</ApolloProvider>
        </PoktWalletContextProvider>
      </SnackbarProvider>
    </>
  );
}
