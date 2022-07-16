import "@styles/reset.scss";
import "@styles/globals.scss";
import "@styles/colors.module.scss";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
