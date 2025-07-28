import styled from "styled-components";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0 80px 0;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 480px) {
    overflow: hidden;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  /* overflow: hidden; */
`;
export const ImgBg = styled.img`
  width: 49%;
  -o-object-fit: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  @media screen and (max-width: 991px) {
    width: 68%;
    padding: 0 24px;
  }
  @media screen and (max-width: 480px) {
    display: none;
  }
`;
export const ImgBg2 = styled.img`
  width: 49%;
  -o-object-fit: cover;
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  object-fit: cover;
  display: none;
  @media screen and (max-width: 991px) {
    width: 68%;
    padding: 0 24px;
  }
  @media screen and (max-width: 480px) {
    display: block;
    width: 100%;
    padding: 0;
  }
`;
export const HPosition = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 63%;

  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    padding: 0 24px;
  }
  @media screen and (max-width: 600px) {
    padding: 0px;
  }
`;
export const SpanFlex = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 90px;
  @media (max-width: 480px) {
    margin-top: 80px;
  }
`;

export const HeroBtn = styled.div`
  display: flex;
  padding: 2px 8px 2px 12px;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: rgba(29, 114, 233, 0.1);
  backdrop-filter: blur(10px);
  margin-bottom: 12px;
  cursor: pointer;
`;

export const HeroBtnTitle = styled.div`
  color: var(--title);
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.14px;
`;
export const HeroH1 = styled.h1`
  color: var(--title);
  text-align: center;
  font-size: 72px;
  font-weight: 800;
  line-height: 72px;
  letter-spacing: -2.88px;
  max-width: 600px;
  font-family: var(--telegraf-family);

  @media screen and (max-width: 600px) {
    font-size: 40px;
    font-weight: 800;
    line-height: 40px;
    letter-spacing: -1.6px;
    max-width: 450px;
  }
`;
export const HeroP = styled.p`
  color: var(--p);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.32px;
  margin-top: 12px;
  max-width: 450px;
  @media screen and (max-width: 600px) {
    max-width: 400px;
  }
`;
export const STR = styled.span`
  /* border: 1.5px solid black; */

  color: #0d76ff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.14px;
  @media screen and (max-width: 480px) {
    /* font-size: 16px; */
  }
`;
export const BottomStart = styled.div`
  display: inline-flex;
  padding: 12px 16px 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  background: #0d76ff;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  margin-top: 24px;
  cursor: pointer;
  z-index: 100 !important;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--Light-blue, #409cff);
    box-shadow: 0px 2px 16px 0px rgba(64, 156, 255, 0.24);
  }

  @media (max-width: 480px) {
    margin-bottom: 40px;
  }
`;
export const ContactUsArrow = styled.img`
  margin-left: 8px;
`;

export const StartButton = styled.button`
  background: var(--orange-background);
  box-shadow: 0px 4px 18px rgba(255, 185, 74, 0.24);
  border-radius: 4px;
  width: 195px;
  height: 56px;
  margin: 40px 0 72px 0;
  border: none;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  font-family: var(--inter-family);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--H1);
    transition: all 0.2s ease-in-out;
    border: 1px solid #e1e1e1;
    background: #ffffff;
  }

  @media screen and (max-width: 1024px) {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
  }
  @media (max-width: 480px) {
    margin: 39px 0 39px 0;
    width: 157px;
    height: 39px;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
  }
`;

export const ImgMac = styled.img`
  width: 100%;
  height: 1400px;
  -o-object-fit: cover;
  object-fit: cover;
  display: ${({ mobile }) => (mobile ? "none" : "block")};
  margin-top: -70px;
  @media screen and (max-width: 1650px) {
    height: 1050px;
  }
  @media screen and (max-width: 1280px) {
    height: 1200px;
  }
  @media screen and (max-width: 960px) {
    height: 1050px;
    margin-top: -50px;
  }
  @media screen and (max-width: 820px) {
    height: 1105px;
  }
  @media screen and (max-width: 768px) {
    height: 700px;
    background: none;
  }
  @media screen and (max-width: 480px) {
    height: 10px;
    /* background:none;  */
    display: none;
    /* display: ${({ mobile }) => (mobile ? "block" : "none")}; */
  }
  @media screen and (max-width: 380px) {
    height: 895px;
    background: none;
  }
  @media screen and (max-width: 280px) {
    height: 895px;
    background: none;
  }
`;
export const ImgBg4 = styled.img`
  width: 100%;
  margin-top: -100px;
  height: 555px;
  -o-object-fit: cover;
  object-fit: cover;
  display: none;
  @media (max-width: 480px) {
    display: block;
    margin-top: -20px;
  }
`;

export const ImgMiniMacTop = styled.img`
  padding: 64px 0 0px 0;
  z-index: 1;
  @media screen and (max-width: 480px) {
    width: 100%;
    display: block;
    padding: 0;
    margin: 0;
  }
`;
