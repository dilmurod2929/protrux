import Head from "next/head";
import React from "react";
import ContactUs from "../component/ContactUs/index";
export default function Contact() {
  return (
    <div>
      <Head>
        <title>ProTrux | From Chaos to Order</title>
        <link rel="icon" href="SignIn/logo.svg" />
        <link></link>
      </Head>
      <ContactUs />
    </div>
  );
}
