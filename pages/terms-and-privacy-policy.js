import React from "react";
import Head from "next/head";
import TermsAndPrivacyFile from "../component/Term/TermsAndConditions";

const TermsAndConditions = () => {
  return (
    <div>
      <Head>
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="SignIn/logo.svg" />
      </Head>
      <TermsAndPrivacyFile />
    </div>
  );
};

export default TermsAndConditions;
