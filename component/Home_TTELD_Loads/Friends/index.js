import React from "react";

import {
  FooterCard,
  FooterImgRight,
  FooterTxt,
  FriendsContainer,
  FriendsFooter,
  FriendsFooter2,
  MaxmWhids,
  ServicesH1,
  ServicesText,
  SpanFlex,
  Txt,
  Integrations,
  IntegrationsImg,
  IntegrationsTXT,
  IntegrationsP,
  IntegrationsWrapper,
  AppStore,
  IntegrationsSlider,
  ImgUp,
  ImgDown,
  PhoneLoads,
  FriendsContainer2,
} from "./FriendsElements";
import Link from "next/link";

const Friends = () => {
  return (
    <>
      <FriendsContainer id="integrations">
        <SpanFlex>
          <ServicesH1>Seamless Integrations</ServicesH1>
          <ServicesText>
            Connect your accounts from other platforms and instantly import data
            to our system—no manual entry, no hassle. Start working with your
            existing tools in one unified workspace.
          </ServicesText>
        </SpanFlex>
        <IntegrationsWrapper>
          <IntegrationsSlider>
            {[...data, ...data, ...data].map((item, index) => (
              <Integrations key={index}>
                <IntegrationsImg src={item.img} alt={item.alt} />
                <IntegrationsTXT>{item.title}</IntegrationsTXT>
                <IntegrationsP>{item.text}</IntegrationsP>
              </Integrations>
            ))}
          </IntegrationsSlider>
        </IntegrationsWrapper>
      </FriendsContainer>
      <FriendsContainer2>
        <FriendsFooter>
          <ImgUp src="Friends/up.png" />
          <ImgDown src="Friends/down.png" />
          <MaxmWhids>
            <FooterCard>
              <FooterTxt>App to optimize process of load for driver</FooterTxt>
              <Txt>
                Our driver app streamlines the load process—start loads, check
                in and out at locations, upload load documents, and view payroll
                —all in one place.
              </Txt>
              <FooterImgRight>
                <Link href="https://apps.apple.com/ru/app/protrux/id1607069133">
                  <a alt="appstore" target="_blank">
                    <AppStore>
                      <img src="ProductsImgs/apple.svg" alt="appstore" />
                      App Store
                      <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                    </AppStore>
                  </a>
                </Link>
                <Link href="#">
                  <a
                    alt="playgoogle"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Coming soon on Google Play");
                    }}
                  >
                    <AppStore>
                      <img src="ProductsImgs/google-play.svg" alt="appstore" />
                      Google Play
                      <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                    </AppStore>
                  </a>
                </Link>
              </FooterImgRight>
            </FooterCard>
            <PhoneLoads src="Friends/test.png" />
          </MaxmWhids>
        </FriendsFooter>
        <FriendsFooter2>
          <ImgUp src="Friends/up.png" />
          <ImgDown src="Friends/down.png" />
          <MaxmWhids>
            <FooterCard>
              <div style={{ width: "100%" }}>
                <FooterTxt>
                  App to optimize process of load for driver
                </FooterTxt>
              </div>
              <div style={{ width: "100%" }}>
                <Txt>
                  Our driver app streamlines the load process —start loads,
                  check in and out at locations, upload load documents, and view
                  payroll —all in one place.
                </Txt>
              </div>

              <FooterImgRight>
                <Link href="https://apps.apple.com/ru/app/protrux/id1607069133">
                  <a target="_blank" alt="appstore">
                    <AppStore>
                      <img src="ProductsImgs/apple.svg" alt="appstore" />
                      App Store
                      <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                    </AppStore>
                  </a>
                </Link>
                <Link href="#">
                  <a
                    alt="playgoogle"
                    target="_blank"
                    onClick={(e) => {
                      e.preventDefault();
                      alert("Coming soon on Google Play");
                    }}
                  >
                    <AppStore>
                      <img src="ProductsImgs/google-play.svg" alt="appstore" />
                      Google Play
                      <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                    </AppStore>
                  </a>
                </Link>
              </FooterImgRight>
              <PhoneLoads src="Friends/test.png" />
            </FooterCard>
          </MaxmWhids>
        </FriendsFooter2>
      </FriendsContainer2>
    </>
  );
};

export default Friends;

const data = [
  {
    title: "Toll Guru",
    text: "Toll Guru Compliance Solution. Asset Tracking. Fleet Management",
    img: "Friends/trollGuru.png",
    alt: "Toll Guru",
  },
  {
    title: "TT ELD",
    text: "ELD Compliance Solution. Asset Tracking. Fleet Management",
    img: "Friends/tteldCursor.png",
    alt: "Toll Guru",
  },
  {
    title: "Samsara",
    text: "Leading fleet management and safety platform",
    img: "Friends/samsaraCursor.png",
    alt: "Toll Guru",
  },
  {
    title: "Quest Diagnostics",
    text: "Works across the healthcare ecosystem to create a healthier world, one life at a time.",
    img: "Friends/questCursor.png",
    alt: "Toll Guru",
  },

  // {
  //   title: "Truck Down",
  //   text: "Truck Repairs, Tires, Mobile Repair Locator Service.",
  //   img: "Friends/truck.png",
  //   alt: "Toll Guru",
  // },
  // {
  //   title: "Samsara",
  //   text: "Leading fleet management and safety platform",
  //   img: "Friends/tteld.png",
  //   alt: "Toll Guru",
  // },
];
