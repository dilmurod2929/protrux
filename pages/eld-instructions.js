import Head from "next/head";
import React from "react";

export default function EldInstruction() {
  return (
    <div style={{ height: "100vh" }}>
      <Head>
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="/SignIn/logo.svg" />
      </Head>
      <iframe
        src="/SignIn/eld-manual.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="ELD Manual"
      />
    </div>
  );
}
