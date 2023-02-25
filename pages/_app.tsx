import "normalize.css";
import type { AppProps } from "next/app";
import { App } from "@/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <App>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </App>
);

export default MyApp;
