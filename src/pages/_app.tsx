import "../app/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import Provider from "@provider/index";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Admin Dashboard</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Provider Component={Component} {...pageProps} />
    </>
  );
}
