import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 120px;
  padding: 120px 0 0px 0;
  background: #0f111c;
`;

export const FooterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 63%;
  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 1065px) {
    padding: 0 24px;
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    padding: 0 16px;
  }
`;
export const SocialMedia = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 768px) {
  }
  @media screen and (max-width: 480px) {
    display: flex;
    height: 100%;
  }
  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`;
export const MainGet = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const Get = styled.div`
  color: #fff;
  text-align: center;
  font-size: 48px;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1.92px;
  font-family: var(--telegraf-family);
  @media (max-width: 600px) {
    font-size: 32px;
    line-height: 36px;
    letter-spacing: -1.28px;
  }
`;
export const P = styled.div`
  color: var(--p);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  max-width: 500px;
  margin: 16px 0 44px 0;
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
export const NavSignBtnLink = styled.div`
  display: flex;
  padding: 12px 16px 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  border-radius: 12px;
  background: #292c39;
  cursor: pointer;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: var(--H1);
  }
  svg {
    width: 18px;
    height: 18px;
    transition: fill 0.3s ease;
  }
  @media screen and (max-width: 396px) {
    gap: 0px;
    padding: 12px 12px 12px 12px;
  }
  @media screen and (max-width: 360px) {
    font-size: 14px;
  }
`;

export const NavBtnLink = styled.div`
  display: flex;
  padding: 12px 16px 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-align: center;
  color: #fff;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  border-radius: 12px;
  background: #0d76ff;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--Light-blue, #409cff);
    box-shadow: 0px 2px 16px 0px rgba(64, 156, 255, 0.24);
  }
  @media screen and (max-width: 396px) {
    font-size: 14px;
    gap: 0px;
    padding: 12px 12px 12px 11px;
  }
`;
export const ContactUsArrow = styled.img``;
export const SocialMediaWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 90rem;
  margin-top: 160px;
  border-top: 0.5px solid rgba(255, 255, 255, 0.2);
  padding-top: 24px;
  @media screen and (max-width: 600px) {
    margin-top: 120px;
  }
`;
export const SocialLogo = styled.img`
  display: flex;
  align-items: center;
  color: #fff;
  justify-self: start;
  justify-content: center;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  margin-right: 30px;
  width: 150px;
  height: 40px;

  @media screen and (max-width: 1224px) {
    width: 150px;
  }
  @media screen and (max-width: 768px) {
    margin: inherit;
  }
`;
export const Logo = styled.div`
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 00px 0 40px 0; */
  @media screen and (max-width: 1280px) {
    /* padding-left:20px ; */
  }
  @media screen and (max-width: 1024px) {
    padding-right: 20px;
  }
  @media screen and (max-width: 960px) {
    padding: 0 0 0px 0;
  }
  @media screen and (max-width: 768px) {
    margin: inherit;
    padding: 10px 0;
  }
`;
export const WebsiteRights = styled.div`
  color: #fff;
  max-width: 50rem;
  background-color: red;
  width: 100%;
  display: flex;
  justify-content: space-between;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 960px) {
    /* flex-direction:column;
    display: flex;
    justify-content: center;
    align-items: center; */
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  @media screen and (max-width: 280px) {
    flex-direction: column;
  }
`;
export const SocialIcons = styled.div`
  max-width: 170px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  margin-left: 20px;
  @media screen and (max-width: 1280px) {
    padding: 0;
    width: 120px;
  }

  @media screen and (max-width: 960px) {
    max-width: 7.5rem;
  }
  @media screen and (max-width: 820px) {
    max-width: 6.7rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    margin: 0;
    max-width: 100%;
    width: 200px;
  }
`;
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    width: 20px;
  }
  @media screen and (max-width: 1024px) {
    width: 24px;
  }
  @media screen and (max-width: 960px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 820px) {
    width: 17px;
    height: 17px;
  }
  @media screen and (max-width: 768px) {
    width: auto;
    height: auto;
    margin-right: 7px;
  }
`;
export const SocialIconName = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;

  @media screen and (max-width: 991px) {
    font-size: 12px;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-left: ${({ phone }) => (phone ? "26px" : "0")};
    font-weight: 400;
    font-size: 18px;
    line-height: 18px;
    /* border-bottom: ${({ second }) => (second ? "1px solid white" : "")} ; */
    font-family: var(--inter-family);
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    margin-left: ${({ phone }) => (phone ? "26px" : "0")};
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    /* border-bottom: ${({ second }) => (second ? "1px solid white" : "")} ; */
  }
  @media screen and (max-width: 370px) {
    font-size: 13px;
  }
  @media screen and (max-width: 331px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }
`;

export const SocialTitle = styled.div`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
`;
export const CardItem = styled.div`
  display: flex;
  gap: 150px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    gap: 20px;
  }
`;
export const CardItemBlock = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

export const CardItemTitle = styled.div`
  color: var(--p);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  text-align: start;
  margin-bottom: 10px;
`;
export const CardItemWrapper = styled.a`
  display: flex;
  flex-direction: column;
  margin-bottom: ${({ button }) => (button ? "8px" : "")};
  gap: 8px;
`;
export const SocialIconLinks = styled.a`
  color: #fff;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    font-size: 1px;
    margin-right: auto;
    padding: 0px 0 0px 0;
  }
  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    font-size: 1px;
    margin-right: auto;
    padding: 0px 0 0px 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    font-size: 40px;
    margin: inherit;
    padding: 32px 0;
  }
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 26px;
  display: flex;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 25px;
  @media screen and (max-width: 1280px) {
    font-size: 24px;
    margin-left: 20px;
  }
  @media screen and (max-width: 1024px) {
    font-size: 20px;
  }
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    font-size: 26px;
  }
  @media screen and (max-width: 820px) {
    display: flex;
    align-items: center;
    font-size: 20px;
    /* margin-right:auto; */
    margin: 0 auto;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
  }
`;

export const Privacy = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 80px 0 120px 0;
  @media (max-width: 535px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
    margin: 80px 0 80px 0;
  }
`;

export const Reserved = styled.div`
  color: var(--p);
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.28px;

  @media (max-width: 535px) {
    order: 2;
  }
`;
export const Terms = styled.div`
  display: flex;
  gap: 24px;
  @media (max-width: 535px) {
    order: 1;
  }
`;
export const Policy = styled.div`
  display: flex;
  color: var(--p);
  font-size: 14px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.28px;
  cursor: pointer;
  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }
`;
