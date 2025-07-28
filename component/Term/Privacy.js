import React from "react";
import Head from "next/head";

import styled from "styled-components";

const Container = styled.div`
  max-width: 920px;
  margin: 0px auto 20px auto;
  font-family: "Inter", sans-serif;
  padding: 40px;
`;

const Title = styled.div`
  color: var(--title);
  font-size: 72px;
  font-weight: 800;
  line-height: 72px;
  letter-spacing: -2.88px;
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

const P = styled.div`
  color: #000;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  margin-bottom: ${({ $marginButtom }) => $marginButtom};
  margin-top: ${({ $marginTop }) => $marginTop};
`;

const PrivacyFile = () => {
  return (
    <div>
      <Head>
        <title>Privacy</title>
      </Head>
      <Container>
        <Title>Privacy Policy </Title>
        <Text>
          “ProTrux, LLC (“ProTrux”) values your privacy and is dedicated to
          safeguarding the personal information of those who visit our websites,
          use our services, or access our mobile applications. We are committed
          to being transparent about how we collect, utilize, share, and secure
          your personal data.
        </Text>
        <P $marginButtom="16px">
          If you do not wish for us to manage your personal information as
          outlined in this Privacy Policy, please refrain from using the ProTrux
          Platform. Personal information refers to data that can reasonably be
          used to identify you as an individual, such as your name, email
          address, and phone number.
        </P>
        <P>
          If you are applying for a job or contract position with a company
          (“Employer”) through the ProTrux Platform, or are currently employed
          by or contracted with an Employer that uses ProTrux’s services, all
          personal information you submit through the Sites is stored on
          ProTrux’s servers and database and made accessible to that Employer.
          This Privacy Policy does not govern how the Employer manages your
          personal information. ProTrux will only share your information with an
          Employer at your explicit request. We do not disclose your information
          to any Employers you have not authorized us to share it with. For
          details about how an Employer uses or discloses your personal data,
          please review their privacy policy or reach out to them directly.
        </P>
        <SubTitle $marginTop="40px">
          1. WHAT PERSONAL INFORMATION WE COLLECT
        </SubTitle>
        <TextTitle $marginTop="16px">
          A. Information You Provide to Us
        </TextTitle>
        <P $marginTop="8px">
          We collect personal information that you voluntarily provide through
          the ProTrux Platform. This may include information submitted when you
          complete a job application, use the ProTrux mobile app, sign forms,
          participate in surveys, fill out documents, or engage in training via
          the platform. Examples of personal information you may choose to
          provide include: Contact details, such as your name, address, email
          address, and phone number Job-related information, including your
          employment history, driver’s license number, and records of traffic
          violations or accidents Background check information, such as your
          full name, date of birth, and Social Security number, submitted to
          allow an Employer to conduct a background check or an FMCSA
          Clearinghouse check Communication data, such as messages sent to an
          Employer via the ProTrux app or through services like ProTrux Connect
          and text messaging Images, such as photos of your driver’s license,
          Social Security card, medical card, or selfies Form and training
          content, including data you provide on applications, surveys,
          documents, or training modules accessed and signed through the ProTrux
          Platform Rewards program activity, if applicable, such as details on
          points earned through an Employer’s rewards program and any
          merchandise you’ve redeemed using those points Engagement indicators,
          such as “likes” or other actions showing interest in a company or job
          opportunity
        </P>
        <TextTitle $marginTop="16px">
          B. Information We Collect Through Technology on the ProTrux Platform
        </TextTitle>
        <P $marginTop="8px">
          We use various technologies to collect information that helps us
          improve your experience and the services we provide. When you access
          and interact with the ProTrux Platform, we gather data about how you
          use it. Below are some of the ways we collect this information: When
          you visit the ProTrux Platform, we may collect your device identifier,
          browser type, and Internet Protocol (IP) address. An IP address can
          sometimes indicate the general area or the internet provider (such as
          an ISP, company, or organization) you used to connect to the internet.
          Although IP addresses may hint at your location, they do not directly
          reveal your identity. We do not associate your personal information
          with your device identifier, browser data, or IP address. We also
          collect data about how you use the ProTrux Platform, such as the
          duration of your visits, how often you use certain features, your
          frequency of visits, and the actions you perform (referred to as
          “Platform Usage Information”). In some cases, we may associate this
          usage information with personal information you’ve shared with us.
          When we do, we treat the combined data as personal information. Do We
          Use Cookies?Yes. Cookies are small files stored on your computer by
          your web browser that allow websites or service providers to recognize
          your browser and store certain data. For example, once you log in and
          verify your identity on the ProTrux Platform, a cookie helps remember
          you as you move between pages. Cookies can also track how you arrived
          at the ProTrux Platform by noting which link you clicked. We may use
          third-party service providers to place and manage cookies on the
          ProTrux Platform and to analyze how users interact with the site and
          the ProTrux app. Employers may also place cookies on the ProTrux
          Platform. These cookies are managed solely by the Employer, and any
          data they collect is subject to the Employer’s privacy practices—not
          ProTrux’s. We do not receive or control the personal information
          gathered by those cookies. We encourage you to review the Employer's
          privacy policy or reach out directly to them with any questions
          regarding how they handle your data. You can modify your browser
          settings to receive alerts each time a cookie is sent, or to disable
          cookies altogether. Please note that disabling cookies may affect the
          functionality of certain features on the ProTrux Platform.
        </P>
        <TextTitle $marginTop="16px">
          C. Information You Provide to a Third Party
        </TextTitle>
        <P $marginTop="8px">
          The ProTrux Platform may contain links to or integrations with
          websites and applications operated by third parties (“Third-Party
          Sites”). Whether you choose to visit or share information with a
          Third-Party Site is entirely up to you. ProTrux does not have control
          over these Third-Party Sites and is not responsible for the data they
          collect or how they use it. Each Third-Party Site has its own privacy
          policy that governs its data collection and usage practices. If you
          decide to interact with or provide personal information to a
          Third-Party Site, we strongly encourage you to review their privacy
          policy to understand how your information will be handled.
        </P>
        <TextTitle $marginTop="16px">
          D. Information Third Parties Provide About You
        </TextTitle>
        <P $marginTop="8px">
          At times, we may receive personal information about you from third
          parties. For instance, if you have shown interest in a position with
          an Employer, that Employer may share your information with us. This
          could include cases where you submitted your name and email address
          through a job board linked to an Employer’s job posting, and the
          Employer then provides that information to ProTrux. Another example is
          when an Employer enrolls you in their rewards program and shares your
          personal details with us so you can redeem merchandise using points
          they’ve awarded. We may combine this third-party information with the
          personal data we collect directly through the ProTrux Platform to
          provide a more complete experience and better support our services.
        </P>
        <SubTitle $marginTop="40px">
          2. HOW WE USE THE PERSONAL INFORMATION WE COLLECT
        </SubTitle>
        <P $marginTop="16px" $marginButtom="16px">
          We use the personal information we gather to support our users and
          enhance your experience on the ProTrux Platform. Here are some of the
          ways we use this information:
        </P>
        <P>
          Helping applicants apply to and engage with potential Employers
          Supporting you and the Employer during the onboarding process by
          providing access to forms, documents, surveys, and training through
          the ProTrux Platform, and sharing your submitted information with the
          Employer Assisting you in discovering new Employers and job or
          contract opportunities Using your “likes” and other indicators of
          interest to recommend relevant Employers and opportunities
          Communicating with you regarding your application and on behalf of the
          Employer, including via text messages and push notifications Enabling
          you to share your experiences within the industry through social
          features Enrolling you in an Employer’s rewards program so you can
          redeem merchandise using points they award Responding to your
          questions, comments, and feedback Continuously assessing and enhancing
          the online user experience Identifying and resolving technical issues
          on the ProTrux Platform Preventing, detecting, and investigating
          potential violations of this Privacy Policy or our Terms of Use, as
          well as addressing any suspected fraud or related concerns Data
          Retention We retain your personal information in accordance with the
          Employer’s policies and any applicable legal requirements.
        </P>
        <SubTitle $marginTop="40px">
          3. HOW WE SHARE THE PERSONAL INFORMATION WE COLLECT
        </SubTitle>
        <P $marginTop="16px" $marginButtom="16px">
          We do not rent, lease, or sell your personal information to third
          parties. However, we may share your information in the following ways:
        </P>
        <P>
          The Employer: As mentioned, we share all personal information
          collected through the ProTrux Platform with the Employer (the company
          to which you are applying or onboarding), including information
          collected through cookies. Potential Employers: We may share your
          “likes” and other expressions of interest with the Employers to whom
          you’ve shown interest. At the Direction of the Employer: We may
          disclose your personal information at the Employer’s request, such as
          for background checks through the Employer’s designated provider.
          Please refer to the Employer’s privacy policy or contact them for
          questions regarding their handling of your information. Third-Party
          Service Providers: We may share your personal information with
          third-party service providers who assist us in providing services.
          Examples include: Reward Redemptions: If the Employer uses the ProTrux
          Platform for rewards programs, your personal information may be shared
          with third-party providers handling the ordering and shipping of
          rewards. Survey Analytics: If an Employer uses ProTrux for
          employee/contractor surveys (outside of Pulse), we may share your
          information with third-party service providers for survey creation,
          transmission, and data analytics related to responses. Data Analytics:
          We may share information with third-party providers to analyze your
          interactions with the ProTrux Platform. Legal Advice: We may disclose
          your personal information to an attorney for legal advice. We require
          third-party service providers to protect your personal information in
          a manner similar to the protections we have in place. Aggregated Data:
          We may share anonymized or aggregated data with third parties when it
          cannot be used to identify you personally. Required Disclosures: We
          may need to share your personal information in response to legal
          requests such as a court order, subpoena, or civil discovery request.
          Legal Compliance and Protections: We may disclose personal information
          when required by law or to protect the rights, property, or safety of
          ProTrux, our users, or others. This includes sharing data with
          companies and organizations for fraud protection and credit risk
          reduction. Corporate Transactions: We may disclose and transfer your
          information, including personal data, to a new owner, co-owner, or
          operator of the ProTrux Platform, or in connection with a merger,
          consolidation, sale of assets, or other corporate changes, including
          to prospective purchasers.
        </P>
        <TextTitle $marginTop="16px">
          CHILDREN'S ONLINE PRIVACY PROTECTION ACT COMPLIANCE
        </TextTitle>
        <P $marginTop="8px">
          We do not collect any information from individuals under the age of
          13. The ProTrux Platform, products, and services are intended for
          individuals aged 13 and older. If you are under 13, you are not
          authorized to use the ProTrux Platform.
        </P>
        <SubTitle $marginTop="40px">
          4. HOW WE PROTECT THE PERSONAL INFORMATION WE COLLECT
        </SubTitle>
        <P $marginTop="16px" $marginButtom="16px">
          We take the security and confidentiality of your personal information
          seriously. To safeguard your data from unauthorized access,
          disclosure, or misuse, we have implemented technical, administrative,
          and physical security measures. Our information security program is
          comprehensive, aligned with applicable laws, and adheres to industry
          standards. For example, we use TLS encryption to protect the data you
          provide through forms on the ProTrux Platform. In addition, access to
          your personal information is restricted within our offices. Only
          employees who need the data to perform their duties (such as customer
          service representatives) are authorized to access it. Employees with
          such access are regularly trained on our security and privacy
          practices. We also encourage you to take steps to protect your
          information, such as logging out of your account or closing your
          browser after using the ProTrux Platform, especially if you are using
          shared or public devices. While we take reasonable precautions to
          protect your personal information, please note that no security
          measure is completely infallible. As a result, we cannot guarantee the
          absolute security of your data.
        </P>
        <SubTitle $marginTop="40px">5. PRIVACY POLICY UPDATES</SubTitle>
        <P $marginTop="16px" $marginButtom="16px">
          If we make changes to this Privacy Policy, we will update this page
          with the new information and revise the modification date above. In
          the event of significant changes that affect how we use or disclose
          your personal information, we will notify you by prominently posting a
          notice about the changes before they take effect, along with the
          effective date of those changes.
        </P>
      </Container>
    </div>
  );
};

export default PrivacyFile;
