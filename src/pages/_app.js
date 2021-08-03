import React from "react";
import Layout from "../Layout/Layout";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <HeadIndex />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

function HeadIndex() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/manifest/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/manifest/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/manifest/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest/site.webmanifest" />
      <title>Victor Nwanguma</title>
    </Head>
  );
}
