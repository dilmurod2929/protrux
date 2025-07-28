import React from "react";
import styles from "../../styles/Privacy.module.css";
import Head from "next/head";

import styled from "styled-components";
import Link from "next/link";

const Container = styled.div`
  max-width: 920px;
  margin: 0px auto 20px auto;
  font-family: "Inter", sans-serif;
  padding: 40px;
`;

const Title = styled.div`
  color: var(--H1);
  font-size: 36px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1.92px;
  margin-bottom: 32px;
`;

const SubTitle = styled.div`
  color: #000;
  font-size: 24px;
  font-weight: 800;
  line-height: normal;
  letter-spacing: -0.48px;
  margin-top: ${({ $marginTop }) => $marginTop};
`;

const TextTitle = styled.div`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.16px;
  margin-top: ${({ $marginTop }) => $marginTop};
`;
const Text = styled.div`
  color: #000;
  font-size: 20px;
  font-weight: 600;
  line-height: 26px;
  letter-spacing: -0.4px;
  margin-bottom: 16px;
`;

const P = styled.li`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  margin-bottom: ${({ $marginButtom }) => $marginButtom};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

const TermsAndPrivacyFile = () => {
  return (
    <div>
      <Head>
        <title>Terms and Conditions for ProTrux ELD Inc.</title>
      </Head>
      <Container>
        <Title>Terms and Conditions for ProTrux ELD Inc. </Title>
        <Text>Last updated: May 27, 2024</Text>
        <TextTitle $marginTop="16px">1. Subscription Terms</TextTitle>
        <P>
          Subscriptions renew automatically at the end of each billing cycle.
        </P>
        <P $marginButtom="16px">
          Users can cancel their subscriptions at any time via their account or
          by email at{" "}
          <Link href="mailto:info@protrux.com">
            <a style={{ color: "#0B58CA" }}>Info@protrux.com</a>
          </Link>
        </P>

        {/* <SubTitle $marginTop="40px">
          1. WHAT PERSONAL INFORMATION WE COLLECT
        </SubTitle> */}
        <TextTitle $marginTop="16px">2. Account Registration</TextTitle>
        <P $marginTop="8px">
          To use the Service, Users must register or create a User account,
          providing all required data or information in a complete and truthful
          manner. Failure to do so will cause unavailability of the Service.
        </P>
        <P>
          Users are responsible for keeping their login credentials confidential
          and safe. Users are also required to choose passwords that meet the
          highest standards of strength permitted by this Application.
        </P>
        <P>
          By registering, Users agree to be fully responsible for all activities
          that occur under their username and password.
        </P>
        <P>
          Users are required to immediately and unambiguously inform the Owner
          via the contact details indicated in this document if they think their
          personal information, including but not limited to User accounts,
          access credentials, or personal data, has been violated, unduly
          disclosed, or stolen.
        </P>
        <TextTitle $marginTop="16px">3. Payment and Refund Policy</TextTitle>
        <P $marginTop="8px">Payments are processed through Stripe.</P>
        <P>Services used are non-refundable.</P>
        <P>Refunds are not provided for services that have been used.</P>
        <P>
          Subscriptions are non-refundable once the billing cycle has commenced.
        </P>

        <TextTitle $marginTop="16px">4. Cancellation Policy</TextTitle>
        <P $marginTop="8px">
          Cancellations take effect at the end of the current billing cycle.
        </P>
        <P>
          No refunds will be issued for the remaining period after cancellation.
        </P>
        <P>
          Users must deactivate all trucks from their truck list to avoid
          charges during the renewal period.
        </P>
        <P>
          Users may send an email to{" "}
          <Link href="mailto:info@protrux.com">
            <a style={{ color: "#0B58CA" }}>Info@protrux.com</a>
          </Link>{" "}
          to deactivate their account, which will take effect at the end of the
          current billing period
        </P>
        <P>
          Upon cancellation, users retain access to the service until the end of
          the current billing period.
        </P>
        {/* <SubTitle $marginTop="40px">5. PRIVACY POLICY UPDATES</SubTitle> */}
        <TextTitle $marginTop="16px">5. Dispute Resolution</TextTitle>
        <P $marginTop="16px" $marginButtom="16px">
          Users agree not to initiate chargebacks without first contacting our
          support team by email at{" "}
          <Link href="mailto:info@protrux.com">
            <a style={{ color: "#0B58CA" }}>Info@protrux.com</a>
          </Link>
        </P>
        <P>
          Users are not allowed to dispute any charges through their banks when
          using the software or after cancellation. All disputes will be
          counter-disputed, and users agree not to dispute any charges.
        </P>
        <TextTitle $marginTop="16px">6. User Responsibilities</TextTitle>
        <P $marginTop="16px" $marginButtom="16px">
          Users must provide accurate information and keep it updated.
        </P>
        <P>
          Users are responsible for maintaining the confidentiality of their
          account and password.
        </P>
        <TextTitle $marginTop="16px">7. Limitation of Liability</TextTitle>
        <P $marginTop="16px" $marginButtom="16px">
          We are not liable for any indirect, incidental, or consequential
          damages arising from the use of our services.
        </P>
        <TextTitle $marginTop="16px">
          8. Account Suspension and Deletion
        </TextTitle>
        <P $marginTop="8px">
          The Owner reserves the right, at its sole discretion, to suspend or
          delete at any time and without notice, User accounts which it deems
          inappropriate, offensive, or in violation of these Terms.
        </P>
        <P>
          The suspension or deletion of User accounts shall not entitle Users to
          any claims for compensation, damages, or reimbursement.
        </P>
        <P>
          The suspension or deletion of accounts due to causes attributable to
          the User does not exempt the User from paying any applicable fees or
          prices.
        </P>
        <TextTitle $marginTop="16px">9. Acceptable Use</TextTitle>
        <P $marginTop="8px">
          This Application and the Service may only be used within the scope of
          what they are provided for, under these Terms and applicable law
        </P>
        <P>
          Users are solely responsible for making sure that their use of this
          Application and/or the Service violates no applicable law,
          regulations, or third-party rights
        </P>
        <P>
          Therefore, the Owner reserves the right to take any appropriate
          measure to protect its legitimate interests, including by denying
          Users access to this Application or the Service, terminating
          contracts, and reporting any misconduct performed through this
          Application or the Service to the competent authorities – such as
          judicial or administrative authorities – whenever Users engage or are
          suspected to engage in any of the following activities:
        </P>
        <P>Violate laws, regulations, and/or these Terms;</P>
        <P>Infringe any third-party rights;</P>
        <P>Considerably impair the Owner’s legitimate interests;</P>
        <P>Offend the Owner or any third party;</P>
        <SubTitle $marginTop="40px">Privacy Policy for ProTrux Inc.</SubTitle>
        <TextTitle $marginTop="16px">1. Data Collection and Usage</TextTitle>
        <P $marginButtom="16px">
          We collect personal data to provide and improve our services,
          including contact information, payment details, and usage data.
        </P>

        <TextTitle $marginTop="16px">2. User Rights</TextTitle>
        <P>
          Users have the right to access, rectify, and delete their personal
          data.
        </P>
        <P>Requests can be made through our support team.</P>
        <TextTitle $marginTop="16px">3. Data Sharing</TextTitle>
        <P $marginButtom="16px">
          We may share data with third-party services to facilitate our
          operations, such as payment processors and analytics providers.
        </P>
        <TextTitle $marginTop="16px">4. Security</TextTitle>
        <P>
          We implement robust security measures to protect user data from
          unauthorized access, misuse, or disclosure.
        </P>
        <TextTitle $marginTop="16px">5. Cookies and Tracking</TextTitle>
        <P>
          Our website uses cookies and similar technologies to enhance user
          experience, analyze site traffic, and understand user preferences.
        </P>
        <TextTitle $marginTop="16px">6. Data Retention</TextTitle>
        <P>
          Personal data is retained only as long as necessary for the purposes
          outlined in this policy, or as required by law.
        </P>
      </Container>
    </div>
  );
};

export default TermsAndPrivacyFile;
