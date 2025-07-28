import React from "react";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialIconName,
  Get,
  P,
  MainGet,
  NavBtnLink,
  NavSignBtnLink,
  ContactUsArrow,
  NavBtn,
  CardItem,
  CardItemTitle,
  CardItemBlock,
  CardItemWrapper,
  SocialTitle,
  Privacy,
  Reserved,
  Terms,
  Policy,
} from "./Footer";
import Link from "next/link";
import ReactGA from "react-ga4";

const Footer = () => {
  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <SocialMedia>
          <MainGet>
            <Get>Get in Touch with Us</Get>
            <P>
              We're here to help! Whether you have questions about our trucking
              management system, need support, or want to learn more about our
              services,
              <span style={{ color: "#FFF" }}> feel free to reach out.</span>
            </P>
          </MainGet>
          <NavBtn>
            <Link href="https://dash.protrux.com/registration">
              <a target="_blank">
                <NavSignBtnLink>
                  Get started for free
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L10.9393 9L6.21967 13.7197C5.92678 14.0126 5.92678 14.4874 6.21967 14.7803C6.51256 15.0732 6.98744 15.0732 7.28033 14.7803L12.5303 9.53033C12.8232 9.23744 12.8232 8.76256 12.5303 8.46967L7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967Z"
                      fill="currentColor"
                    />
                  </svg>
                </NavSignBtnLink>
              </a>
            </Link>

            <Link href="contact-us">
              <a>
                <NavBtnLink>
                  Contact us
                  <ContactUsArrow src="/ProductsImgs/icon-right.svg" />
                </NavBtnLink>
              </a>
            </Link>
          </NavBtn>
          <SocialMediaWrap>
            {/* <Logo>
              <SocialLogo src="FooterIcons/footerLogo.svg" />
            </Logo> */}
            <CardItem>
              <CardItemBlock mobile>
                <CardItemTitle>Contacts</CardItemTitle>
                <CardItemWrapper button>
                  <Link href="mailto:info@protrux.com">
                    <a style={{ display: "flex", alignItems: "center" }}>
                      <SocialIconName>Info@protrux.com</SocialIconName>
                    </a>
                  </Link>
                </CardItemWrapper>
                <CardItemWrapper>
                  <Link href="tel:+12163020101">
                    <a style={{ display: "flex", alignItems: "center" }}>
                      <SocialIconName>+1 (216) 302-0101</SocialIconName>
                    </a>
                  </Link>
                </CardItemWrapper>
              </CardItemBlock>

              <CardItemBlock>
                <CardItemTitle>Socials</CardItemTitle>
                <CardItemWrapper target="_blank">
                  <Link href="https://www.linkedin.com/company/protruxtms">
                    <a
                      target="_blank"
                      style={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <SocialTitle> Linkedin</SocialTitle>
                    </a>
                  </Link>
                  {/* <Link href="#">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <SocialTitle> Facebook</SocialTitle>
                    </a>
                  </Link>
                  <Link href="#">
                    <a
                      style={{
                        display: "flex",
                        alignItems: "start",
                        flexDirection: "column",
                        gap: "8px",
                      }}
                    >
                      <SocialTitle> Telegram</SocialTitle>
                    </a>
                  </Link> */}
                </CardItemWrapper>
              </CardItemBlock>
            </CardItem>
          </SocialMediaWrap>
          <Privacy>
            <Reserved>© 2025 ProTRUX Inc. All rights reserved.</Reserved>
            <Terms>
              <Link href="/terms-and-privacy-policy">
                <a
                  onClick={() =>
                    ReactGA.event({
                      category: "Visit Cookie Policy",
                      action: "Clicked Cookie Policy",
                      label: "Visit Cookie Policy",
                    })
                  }
                >
                  <Policy>Terms and Privacy Policy</Policy>
                </a>
              </Link>
            </Terms>
          </Privacy>
          <img src="/footerIcons/footerLogo.png" />
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
