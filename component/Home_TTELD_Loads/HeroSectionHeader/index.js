import React from "react";
import ReactGA from "react-ga4";
import {
  HeroContainer,
  HeroH1,
  HeroP,
  HPosition,
  STR,
  ImgMiniMacTop,
  SpanFlex,
  HeroBtnTitle,
  HeroBtn,
  BottomStart,
  ContactUsArrow,
  ImgBg,
  HeroBg,
  ImgBg2,
} from "./HeroElements";
import Link from "next/link";

function HeroSection() {
  return (
    <HeroContainer>
      <HPosition>
        <HeroBg>
          <ImgBg src="./Hero/transparentBox.png" />
          <ImgBg2 src="./Hero/transparentBox2.png" />
        </HeroBg>
        <SpanFlex>
          <Link href="/contact-us">
            <HeroBtn>
              <HeroBtnTitle>
                Want know more? <STR>Contact us</STR>
              </HeroBtnTitle>
            </HeroBtn>
          </Link>

          <HeroH1>All-in-One</HeroH1>
          <HeroH1>Built for Trucking</HeroH1>
          <HeroP>
            Everything you need to run your fleet—simplified, connected, and
            made just for trucking.
          </HeroP>
          <Link href="https://dash.protrux.com/registration" target="_blank">
            <a style={{ zIndex: 99 }} target="_blank">
              <BottomStart
                onClick={() =>
                  ReactGA.event({
                    category: "OnClick Sign Up button",
                    action: "OnClick Sign Up button",
                    label: "OnClick Sign Up button",
                  })
                }
              >
                Get started for free
                <ContactUsArrow src="ProductsImgs/icon-right.svg" />
              </BottomStart>
            </a>
          </Link>
        </SpanFlex>
        <ImgMiniMacTop src="./Hero/banner.png" />
      </HPosition>
    </HeroContainer>
  );
}

export default HeroSection;
