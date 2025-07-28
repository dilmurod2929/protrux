import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const FriendsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  padding-top: 80px;
  @media screen and (max-width: 600px) {
    padding-top: 60px;
  }
`;
export const FriendsContainer2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow: hidden;
  @media screen and (max-width: 1065px) {
    padding: 0px 24px 0px 24px;
  }

  @media screen and (max-width: 600px) {
    padding: 0px 16px 0px 16px;
  }
`;

export const ImgIcon = styled.img`
  margin: 0;
  width: 78px;
  height: 78px;
  margin-bottom: 40px;
  @media screen and (max-width: 1280px) {
    /* margin-top: -10; */
    width: 78px;
    height: 78px;
  }
  @media screen and (max-width: 1024px) {
    /* margin-top: -10; */
    width: 78px;
    height: 78px;
  }
  @media screen and (max-width: 960px) {
    /* margin-top: -10; */
    width: 70px;
    height: 70px;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 820px) {
    /* margin-top: -10; */
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 768px) {
    /* margin-top: -10; */
  }
  @media screen and (max-width: 480px) {
    margin: 0;
    padding: 0;
    width: 56px;
    height: 56px;
  }
`;
export const IconName = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-align: center;
  margin-bottom: 10px;
  color: #3b485e;
  @media screen and (max-width: 1280px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #3b485e;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-align: center;
    color: #3b485e;
  }
  @media screen and (max-width: 960px) {
    font-size: 23px;
    line-height: 23px;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 820px) {
    font-size: 20px;
    line-height: 23px;
    margin-bottom: 14px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0;
    padding: 0;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const IconInfo = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  text-align: center;
  color: #8c98a4;
  margin-bottom: 20px;
  max-width: 40rem;
  width: 100%;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    text-align: center;
    color: #8c98a4;
    max-width: 14rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 13.4px;
    line-height: 28px;
    text-align: center;
    color: #8c98a4;
  }
  @media screen and (max-width: 960px) {
    font-size: 12.5px;
    line-height: 24px;
    font-weight: 400;
    margin-bottom: 13px;
  }
  @media screen and (max-width: 820px) {
    font-size: 11px;
    line-height: 23px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    max-width: 13rem;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    max-width: 20rem;
    /* line-height: 25px; */
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    max-width: 13rem;
    /* line-height: 25px; */
  }
  @media screen and (max-width: 280px) {
    font-size: 11px;
  }
`;
export const FollowUs = styled.a`
  font-weight: 700;
  font-size: 21.9894px;
  line-height: 30px;
  margin-bottom: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-align: center;

  color: #1470c6;
  @media screen and (max-width: 1280px) {
    /* margin-top: -10; */
    font-weight: 700;
    font-size: 21.9894px;
    line-height: 30px;
    /* identical to box height */
    text-align: center;

    color: #1470c6;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    text-align: center;
    margin-bottom: 650px;
    color: #1470c6;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;

    text-align: center;
    margin-bottom: 650px;
    color: #1470c6;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    text-align: center;
    color: #1470c6;
    margin: 0 0 50px 0;
    padding: 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;

    text-align: center;
    color: #1470c6;
    margin: 0 0 50px 0;
    padding: 0;
  }
`;
export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 26px;
  font-weight: 700px;
  margin-top: 3px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  margin-top: 3px;

  font-size: 26px;
  font-weight: 700;
`;
export const Arrow = styled.img`
  margin-left: 8px;
  font-size: 26px;
  font-weight: 700px;
  margin-top: 3px;
  @media screen and (max-width: 820px) {
    width: 13px;
  }
`;

export const FriendsFooter = styled.div`
  display: flex;
  width: 63%;
  height: 100%;
  align-items: center;

  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  background-position: center;
  border-radius: 24px;
  background: #f5f5f8;
  margin-top: 160px;
  position: relative;
  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

export const ImgUp = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  border-radius: 24px;
`;
export const ImgDown = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  border-radius: 24px;
`;
export const IntegrationsWrapper = styled.div`
  display: flex;
  gap: 16px;
  overflow: hidden;
  width: 100%;
  position: relative;
`;

export const IntegrationsSlider = styled.div`
  display: flex;
  animation: scroll 70s linear infinite;
  gap: 16px;

  @keyframes scroll {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-50%);
    }
  }
`;

export const Integrations = styled.div`
  display: flex;
  width: 408px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 16px;
  background: #f5f5f8;
  @media (max-width: 600px) {
    padding: 16px;
    width: 232px;
  }
`;
export const IntegrationsImg = styled.img`
  width: 100%;
  border-radius: 12px;
`;
export const IntegrationsTXT = styled.div`
  color: #000;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 24px 0 10px 0;
`;
export const IntegrationsP = styled.div`
  color: var(--p);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
`;

export const SpanFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
  @media screen and (max-width: 1065px) {
    padding: 0 24px;
  }
`;
export const ServicesH1 = styled.h1`
  color: var(--H1);
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1.92px;
  max-width: 460px;
  text-align: center;
  font-family: var(--telegraf-family);
  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    letter-spacing: -1.28px;
  }
  @media screen and (max-width: 480px) {
    max-width: 320px;
  }
`;
export const ServicesText = styled.p`
  color: var(--p);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  margin-top: 16px;
  max-width: 550px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    max-width: 600px;
    padding: 0 20px;
  }

  @media screen and (max-width: 480px) {
    color: var(--Light-mode-Grey-04, #797b8d);
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: -0.32px;
    max-width: 350px;
    padding: 0px;
  }
`;
export const FriendsFooter2 = styled.div`
  display: none;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-size: 100%;
  background-position: center;
  border-radius: 16px;
  border-radius: 24px;
  background: #f5f5f8;
  margin-top: 120px;
  position: relative;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
export const FooterCard = styled.div`
  padding: 60px 0 60px 60px;

  @media screen and (max-width: 991px) {
    padding: 60px 0 60px 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 60px 0 60px 20px;
  }
  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 36px 16px;
    width: 100%;
  }
`;

export const PhoneLoads = styled.img`
  padding: 40px 147px 40px 0;

  @media screen and (max-width: 1260px) {
    padding: 40px 60px 40px 0;
  }

  @media screen and (max-width: 890px) {
    padding: 40px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
  }
  @media screen and (max-width: 600px) {
    padding: 40px 0px 0px 0;
  }
`;
export const FooterTxt = styled.div`
  color: var(--H1);
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1.92px;
  max-width: 560px;
  font-family: var(--telegraf-family);
  @media screen and (max-width: 991px) {
    max-width: 400px;
  }

  @media screen and (max-width: 600px) {
    color: var(--H1);
    font-size: 32px;
    font-style: normal;
    line-height: 34px;
    letter-spacing: -1.28px;
    max-width: 270px;
  }
`;

export const Txt = styled.div`
  color: var(--p);
  font-size: 16px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: -0.32px;
  max-width: 600px;
  margin-top: 16px;
  @media screen and (max-width: 600px) {
    max-width: 320px;
  }
`;
export const Txt2 = styled.div`
  color: #9b9daa;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  max-width: 600px;
  //margin-top: ;
  @media screen and (max-width: 480px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
    margin-bottom: 30px;
  }
`;
export const Alink = styled.a`
  position: relative;
`;

export const FooterCardImg = styled.img`
  /* margin-left: 90px; */
  margin-bottom: -33px;
  @media screen and (max-width: 1280px) {
    width: 233px;
    top: -85px;
    position: absolute;
  }
  @media screen and (max-width: 1024px) {
    width: 203px;
    top: -59px;
    position: absolute;
  }
  @media screen and (max-width: 960px) {
    width: 203px;
    top: -56px;

    left: -140px;
    position: absolute;
    position: absolute;
  }
  @media screen and (max-width: 820px) {
    width: 173px;
    top: -56px;

    left: -140px;
    position: absolute;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    margin: 35px 0 53px 0;
    position: static;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 260px;

    padding: 0 14px;
  }
  @media screen and (max-width: 280px) {
    margin: 76px 0 0 0;
    width: 15rem;
  }
`;
export const FooterCardImg2 = styled.img`
  /* margin-left: 90px; */
  margin-bottom: -33px;
  display: none;
  @media screen and (max-width: 1280px) {
    /* width: 233px; */
    margin: 47px 0px 0 0px;
    position: absolute;
    margin-left: 170px;
    display: block;
  }
  @media screen and (max-width: 1024px) {
    width: 203px;
    margin-top: 51px;
    padding: 0;
    position: absolute;
    margin-left: 180px;
  }
  @media screen and (max-width: 960px) {
    /* width: 203px;
    margin-top: 80px;
    margin-left: 200px;
    padding: 0;
    position: absolute;
    margin-top: 51px; */
    width: 203px;
    right: -60px;
    padding: 0;
    position: absolute;
    top: -138px;
  }
  @media screen and (max-width: 820px) {
    /* width: 173px;
    margin-top: 50px;
    margin-left: 140px;
    padding: 0;
    position: absolute;
    margin-top: 30px; */
    width: 173px;
    right: -40px;
    padding: 0;
    position: absolute;
    top: -132px;
  }
  @media screen and (max-width: 768px) {
    width: 250px;
    margin: 50px 0 60px 0;
    position: static;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 260px;

    padding: 10px 20px;
    margin-top: 10px;
    margin-bottom: 50px;
  }
  @media screen and (max-width: 280px) {
    margin: 60px 0;
    width: 15rem;
  }
`;
export const FooterCard2 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #666666;
  max-width: 13rem;
  margin-left: 100px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 280px;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 250px;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0 0 0;
    padding-left: 90px;
    font-size: 15px;
    max-width: 14rem;
    line-height: 30px;
  }
  @media screen and (max-width: 820px) {
    margin: 0 0 0;
    padding-left: 64px;
    line-height: 25px;

    font-size: 12px;
    max-width: 14rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    display: none;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    text-align: center;
    font-size: 16px;
    padding: 10px;
    display: none;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
  }
`;
export const FooterCard3 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 32px;
  color: #666666;
  max-width: 13rem;
  margin-left: 100px;
  display: none;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 280px;
    padding: 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #666666;
    margin-left: 250px;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0 0 0;
    padding-left: 90px;
    font-size: 15px;
    max-width: 14rem;
    line-height: 30px;
  }
  @media screen and (max-width: 820px) {
    margin: 0 0 0;
    padding-left: 64px;
    line-height: 25px;

    font-size: 12px;
    max-width: 14rem;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    text-align: center;
    font-size: 19px;
    line-height: 30px;

    padding: 30px 0 0px 0;
    display: block;
    width: 16rem;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    text-align: center;
    font-weight: 400;
    font-size: 13px;
    line-height: 22px;
    padding: 30px 0 0px 0;
    display: block;
    margin: 0;
    max-width: 13rem;
  }
  @media screen and (max-width: 280px) {
    margin: 30px 0 0 0;
  }
`;
export const FooterImgRight = styled.div`
  display: flex;
  padding: 32px 0 0px 0;
  gap: 16px;
  @media screen and (max-width: 1280px) {
    margin-right: auto;
    display: flex;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    margin: inherit;
  }
`;

export const AppStore = styled.div`
  display: flex;
  padding: 8px 8px 8px 12px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 8px;
  background: #0f111c;
  color: #fff;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: -0.32px;
  @media screen and (max-width: 396px) {
    gap: 3px;
    padding: 12px 12px 12px 12px;
    font-size: 14px;
  }
  @media screen and (max-width: 356px) {
    gap: 0px;
    padding: 12px 9px 12px 9px;
    font-size: 12px;
  }
`;

export const MaxmWhids = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;
  @media screen and (max-width: 600px) {
    flex-direction: column;
    margin: 0;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0px 0px 0 0px;
  }
`;
