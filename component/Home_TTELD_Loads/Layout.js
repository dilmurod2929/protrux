import React, { useEffect } from "react";
import Services from "./Services";
import HeroSectionHeader from "./HeroSectionHeader";
import ReactGA from "react-ga4";
import Friends from "./Friends";
import Footer from "../Footer";

const Layout = () => {
  useEffect(() => {
    ReactGA.event({
      category: "Visit ProTrux page",
      action: "Visit ProTrux page",
      label: "Visit ProTrux page",
    });
  }, []);
  return (
    <div>
      <HeroSectionHeader />
      <Services />
      <Friends />
    </div>
  );
};

export default Layout;
