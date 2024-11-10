import "@/styles/globals.css";
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import Root from "@/components/root";
import { ColorModeContextProvider } from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout ?? ((page) => page);

  const pageRenderer = () => {
    return getLayout(<Component {...pageProps} />);
  };

  return (
    <ColorModeContextProvider>
      <SessionProvider session={pageProps.session} refetchInterval={0}>
        <Root>{pageRenderer()}</Root>
      </SessionProvider>
    </ColorModeContextProvider>
  );
}
