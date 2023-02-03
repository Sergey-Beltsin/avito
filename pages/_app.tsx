/* eslint-disable react/jsx-props-no-spreading */

import "normalize.css";
import type { AppProps } from "next/app";

const MyApp = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default MyApp;
