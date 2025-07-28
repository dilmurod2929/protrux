import Head from "next/head";
import React from "react";
import PrivacyFile from "../component/Term/Privacy";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="SignIn/logo.svg" />
      </Head>
      <PrivacyFile />
    </div>
  );
}
