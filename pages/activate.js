import Head from "next/head";
import React from "react";
import PlatformList from "../component/Platform/PlatformList";
import { ActivatePageWrapper } from "../component/Platform/Platform.styles";
export default function Activate() {
  return (
    <ActivatePageWrapper>
      <Head>
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="/SignIn/logo.svg" />
      </Head>
      <PlatformList />
    </ActivatePageWrapper>
  );
}
