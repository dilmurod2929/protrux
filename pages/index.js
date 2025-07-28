import Head from "next/head";
import React from "react";
import Layout from "../component/Home_TTELD_Loads/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="SignIn/logo.svg" />

        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:100,200,400,500,600,300,700,"
          rel="stylesheet"
          type="text/css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Layout />
    </>
  );
}
