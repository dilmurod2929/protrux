import React from "react";
import {
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesText,
  ServicesTextRight,
  SpanFlex,
  ServicesConst,
  Container,
  Box1,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
  ServicesNumber,
  BoxHeader,
  ServicesImg,
  AppStore,
  Offers,
  Avialable,
  DefaultContainer,
  DefaultBox,
  DefaultContainer2,
} from "./ServicElements";
import Link from "next/link";

const Services = () => {
  return (
    <ServicesContainer id="features">
      <ServicesConst>
        <SpanFlex>
          <ServicesH1>Optimize Performance and Minimize Time</ServicesH1>
          <ServicesText>
            From real-time tracking and load management to driver tools,
            payroll, and reports — our system streamlines every part of your
            operations to save time, cut costs, and keep everything running
            smoothly.
          </ServicesText>
        </SpanFlex>

        <Container>
          <Box1>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/view-desktop.svg" />
              <ServicesNumber> 01</ServicesNumber>
            </BoxHeader>

            <ServicesTextRight>
              <ServicesH2>Locations</ServicesH2>
              <ServicesP $width="650px">
                Track vehicle, driver, and trailer data all in one place. Update
                status, location, ETA, and other info in real time based on
                current conditions. View each vehicle's weekly plan and full
                history across the company.
              </ServicesP>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/status-board.png" />
          </Box1>
          <Box2>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/box-filled.svg" />
              <ServicesNumber> 02</ServicesNumber>
            </BoxHeader>
            <ServicesTextRight>
              <ServicesH2>Dispatch</ServicesH2>
              <ServicesP>
                Easily manage many aspects of a load — from locations, tolls,
                and documents to status updates, invoicing, expenses, and driver
                pay.
              </ServicesP>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/action-button.png" />
          </Box2>
          <Box3>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/people-search.svg" />
              <ServicesNumber> 04</ServicesNumber>
            </BoxHeader>
            <ServicesTextRight>
              <ServicesH2>Driver Hiring</ServicesH2>
              <ServicesP $width="620px">
                Optimize the driver hiring process by automating everything—from
                job applications to background checks, including previous
                employer verification and pre-employment drug testing.
              </ServicesP>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/driver-hiring.png" />
          </Box3>
          <Box4>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/clipboard-text.svg" />
              <ServicesNumber> 03</ServicesNumber>
            </BoxHeader>
            <ServicesTextRight>
              <ServicesH2>Reports</ServicesH2>
              <ServicesP $width="350px">
                Access detailed financial, performance, and compliance reports
                for your company. Customize reporting dates and gain insights
                across various areas such as operations, efficiency, and overall
                business health.
              </ServicesP>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/report-button.png" />
          </Box4>
          <Box5>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/driver-app.svg" />
              <ServicesNumber> 05</ServicesNumber>
            </BoxHeader>
            <ServicesTextRight>
              <ServicesH2>Driver App</ServicesH2>
              <ServicesP $width="650px">
                Our driver app streamlines the load process—start loads, check
                in and out at locations, upload load documents, and view
                payroll—all in one place.
              </ServicesP>
              <Avialable>Avialable on</Avialable>
              <Offers>
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
              </Offers>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/driver-app.png" />
          </Box5>
          <Box6>
            <BoxHeader>
              <ServicesIcon src="ProductsImgs/payment.svg" />
              <ServicesNumber>06</ServicesNumber>
            </BoxHeader>
            <ServicesTextRight>
              <ServicesH2>Payment & Expenses</ServicesH2>
              <ServicesP $width="350px">
                Access detailed financial, performance, and compliance reports
                for your company. Customize reporting dates and gain insights
                across various areas such as operations, efficiency, and overall
                business health.
              </ServicesP>
            </ServicesTextRight>
            <ServicesImg src="ProductsImgs/payment-expenses.png" />
          </Box6>
        </Container>
        <DefaultContainer>
          <DefaultBox>
            <Box1>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/view-desktop.svg" />
                <ServicesNumber> 01</ServicesNumber>
              </BoxHeader>

              <ServicesTextRight>
                <ServicesH2>Locations</ServicesH2>
                <ServicesP $width="650px">
                  Track vehicle, driver, and trailer data all in one place.
                  Update status, location, ETA, and other info in real time
                  based on current conditions. View each vehicle's weekly plan
                  and full history across the company.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/status-board.png" />
            </Box1>
            <Box4>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/clipboard-text.svg" />
                <ServicesNumber> 03</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Reports</ServicesH2>
                <ServicesP $width="350px">
                  Access detailed financial, performance, and compliance reports
                  for your company. Customize reporting dates and gain insights
                  across various areas such as operations, efficiency, and
                  overall business health.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/report-button.png" />
            </Box4>
            <Box5>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/driver-app.svg" />
                <ServicesNumber> 05</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Driver App</ServicesH2>
                <ServicesP $width="650px">
                  Our driver app streamlines the load process—start loads, check
                  in and out at locations, upload load documents, and view
                  payroll—all in one place.
                </ServicesP>
                <Avialable>Avialable on</Avialable>
                <Offers>
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
                        <img
                          src="ProductsImgs/google-play.svg"
                          alt="appstore"
                        />
                        Google Play
                        <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                      </AppStore>
                    </a>
                  </Link>
                </Offers>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/driver-app.png" />
            </Box5>
          </DefaultBox>
          <DefaultBox>
            <Box2>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/box-filled.svg" />
                <ServicesNumber> 02</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Locations</ServicesH2>
                <ServicesP>
                  Easily manage many aspects of a load — from locations, tolls,
                  and documents to status updates, invoicing, expenses, and
                  driver pay.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/action-button.png" />
            </Box2>
            <Box3>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/people-search.svg" />
                <ServicesNumber> 04</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Driver Hiring</ServicesH2>
                <ServicesP $width="620px">
                  Optimize the driver hiring process by automating
                  everything—from job applications to background checks,
                  including previous employer verification and pre-employment
                  drug testing.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/driver-hiring.png" />
            </Box3>
            <Box6>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/payment.svg" />
                <ServicesNumber>06</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Payment & Expenses</ServicesH2>
                <ServicesP $width="350px">
                  Access detailed financial, performance, and compliance reports
                  for your company. Customize reporting dates and gain insights
                  across various areas such as operations, efficiency, and
                  overall business health.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/payment-expenses.png" />
            </Box6>
          </DefaultBox>
        </DefaultContainer>
        <DefaultContainer2>
          <DefaultBox>
            <Box1>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/view-desktop.svg" />
                <ServicesNumber> 01</ServicesNumber>
              </BoxHeader>

              <ServicesTextRight>
                <ServicesH2>Locations</ServicesH2>
                <ServicesP $width="650px">
                  Track vehicle, driver, and trailer data all in one place.
                  Update status, location, ETA, and other info in real time
                  based on current conditions. View each vehicle's weekly plan
                  and full history across the company.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/status-board.png" />
            </Box1>
            <Box2>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/box-filled.svg" />
                <ServicesNumber> 02</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Locations</ServicesH2>
                <ServicesP>
                  Easily manage many aspects of a load — from locations, tolls,
                  and documents to status updates, invoicing, expenses, and
                  driver pay.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/action-button.png" />
            </Box2>
            <Box4>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/clipboard-text.svg" />
                <ServicesNumber> 03</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Reports</ServicesH2>
                <ServicesP $width="350px">
                  Access detailed financial, performance, and compliance reports
                  for your company. Customize reporting dates and gain insights
                  across various areas such as operations, efficiency, and
                  overall business health.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/report-button.png" />
            </Box4>
            <Box3>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/people-search.svg" />
                <ServicesNumber> 04</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Driver Hiring</ServicesH2>
                <ServicesP $width="620px">
                  Optimize the driver hiring process by automating
                  everything—from job applications to background checks,
                  including previous employer verification and pre-employment
                  drug testing.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/driver-hiring.png" />
            </Box3>
            <Box5>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/driver-app.svg" />
                <ServicesNumber> 05</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Driver App</ServicesH2>
                <ServicesP $width="650px">
                  Our driver app streamlines the load process—start loads, check
                  in and out at locations, upload load documents, and view
                  payroll—all in one place.
                </ServicesP>
                <Avialable>Avialable on</Avialable>
                <Offers>
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
                        <img
                          src="ProductsImgs/google-play.svg"
                          alt="appstore"
                        />
                        Google Play
                        <img src="ProductsImgs/icon-right.svg" alt="appstore" />
                      </AppStore>
                    </a>
                  </Link>
                </Offers>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/driver-app.png" />
            </Box5>
            <Box6>
              <BoxHeader>
                <ServicesIcon src="ProductsImgs/payment.svg" />
                <ServicesNumber>06</ServicesNumber>
              </BoxHeader>
              <ServicesTextRight>
                <ServicesH2>Payment & Expenses</ServicesH2>
                <ServicesP $width="350px">
                  Access detailed financial, performance, and compliance reports
                  for your company. Customize reporting dates and gain insights
                  across various areas such as operations, efficiency, and
                  overall business health.
                </ServicesP>
              </ServicesTextRight>
              <ServicesImg src="ProductsImgs/payment-expenses.png" />
            </Box6>
          </DefaultBox>
        </DefaultContainer2>
      </ServicesConst>
    </ServicesContainer>
  );
};

export default Services;
