import styled from "styled-components";

export const ServicesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ServicesConst = styled.div`
  width: 63%;
  z-index: 1;
  padding: 80px 0 80px 0;
  @media screen and (max-width: 1680px) {
    width: 80%;
  }

  @media screen and (max-width: 1065px) {
    width: 100%;
    padding: 80px 24px 80px 24px;
  }

  @media (max-width: 600px) {
    padding: 60px 16px 60px 16px;
  }
`;
export const ServicesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 30px;
  width: 63%;
  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1280px) {
    padding: 0 24px;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    padding: 0 24px;
  }

  @media screen and (max-width: 960px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0 12px;
    grid-gap: 24px;
  }
  @media screen and (max-width: 320px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }
  @media screen and (max-width: 280px) {
    grid-template-columns: 1fr;
    padding: 0 5px;
  }
`;
export const SpanFlex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 56px;
`;
export const ServicesCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 24px;
  transition: all 0.2s ease-in-out;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #d7d8e0;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    background: #fff;
    box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.12);
    border: rgba(0, 0, 0, 0.12);
    outline: none;
    position: relative;
    border-radius: 8px;
    background: linear-gradient(to top left, ${({ color }) => color}, #ffffff);
    cursor: pointer;
    z-index: 1;
  }

  &::before {
    content: "";
    /* position: absolute; */
    top: 1px;
    right: 1px;
    bottom: 1px;
    left: 1px;
    border-radius: 8px;
    background: #f6f6f5;
    @media screen and (max-width: 480px) {
      z-index: -1;
    }
  }

  &::after {
    content: attr(data);
  }

  @media screen and (max-width: 1280px) {
    padding: 25px;
  }
  @media screen and (max-width: 1024px) {
    padding: 25px;
  }
  @media screen and (max-width: 960px) {
    padding: 20px;
  }
  @media screen and (max-width: 480px) {
    padding: 32px 24px;
    align-items: flex-start;
    text-align: left;
    border-radius: 8px;
    border: 1px solid var(--Light-mode-Grey-02, #d7d8e0);
  }
  @media screen and (max-width: 280px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  /* grid-template-rows: 1fr 1fr 1fr; */
  gap: 16px 16px;
  grid-template-areas:
    "box_1 box_1 box_1 box_1 box_1 box_2 box_2 box_2"
    "box_4 box_4 box_4 box_3 box_3 box_3 box_3 box_3"
    "box_5 box_5 box_5 box_5 box_5 box_6 box_6 box_6";
  @media screen and (max-width: 991px) {
    display: none;
  }
`;

export const BoxHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Box1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
  display: flex;
  align-items: flex-start;
  grid-area: box_1;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const Box2 = styled.div`
  grid-area: box_2;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const Box3 = styled.div`
  grid-area: box_3;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const Box4 = styled.div`
  grid-area: box_4;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const Box5 = styled.div`
  grid-area: box_5;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const Box6 = styled.div`
  grid-area: box_6;
  background-color: #f5f5f8;
  padding: 32px;
  flex-direction: column;
  border-radius: 16px;
  @media (max-width: 600px) {
    padding: 24px;
  }
`;

export const ServicesNumber = styled.div`
  color: #d7d8e0;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -1.04px;
`;
export const ServicesIcon = styled.img`
  display: flex;
  padding: 4px;
  align-items: center;
  gap: 10px;
  border-radius: 8px;
  background: #fff;
  z-index: 1;
  width: 28px;
  height: 28px;
  &::after {
    content: attr(src);
    font-size: 16px;
  }
`;
export const ServicesImg = styled.img`
  width: 100%;
  margin-top: 24px;
`;
export const ServicesTextRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 1;

  @media (max-width: 768px) {
    margin-top: 0;
  }
  @media (max-width: 480px) {
    margin-top: 24px;
  }
`;

export const ServicesH1 = styled.h1`
  color: var(--H1);
  text-align: center;
  font-size: 48px;
  font-style: normal;
  font-weight: 800;
  line-height: 52px;
  letter-spacing: -1.92px;
  max-width: 500px;
  font-family: var(--telegraf-family);

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 34px;
    letter-spacing: -1.28px;
  }
  /* @media screen and (max-width: 480px) {
    font-size: 24px;
    margin: 0;
    padding: 0;
    max-width: 20rem;
    line-height: 28px;
    letter-spacing: -0.96px;
  } */
`;
export const ServicesText = styled.p`
  color: var(--p);
  max-width: 850px;
  font-family: var(--inter-family);
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.36px;
  margin-top: 16px;
  max-width: 580px;

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

export const ServicesH2 = styled.h2`
  font-weight: 600;
  font-size: 20px;
  line-height: normal;
  color: var(--title);
  margin-bottom: 10px;
  letter-spacing: -0.4px;
  margin: 16px 0 10px 0;
`;
export const ServicesP = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: var(--p);
  line-height: 23px;
  letter-spacing: -0.32px;
  max-width: ${({ $width }) => $width};

  @media screen and (max-width: 991px) {
    font-weight: 400;
    font-size: 15.1px;
  }

  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    max-width: 480px;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
  box-sizing: border-box;
  color: #fff;
  width: 100%;
  max-width: 500rem;
  margin-right: 30px;

  @media screen and (max-width: 1280px) {
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    width: 100%;
    /* max-width: 500rem; */
    /* width: 300px; */
    margin-right: 10px;
  }
  @media screen and (max-width: 960px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 820px) {
    margin-right: 10px;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    margin: 0 0 0 10px;
    padding: 10px 10px 10px 0px;
    width: 100%;
  }
  @media screen and (max-width: 280px) {
    margin: 0;
    padding: 10px;
    width: 70%;
    margin-left: 0px;
  }
  @media screen and (min-width: 540px) and (max-width: 960px) {
    margin: 0;
  }
`;
FooterLinkItems.Col = styled.div`
  width: 100%;
  max-width: 26rem;

  @media screen and (max-width: 1280px) {
    max-width: 24rem;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    margin-left: 0 auto;
    max-width: 22rem;
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    margin-left: 0 auto;
    max-width: 20rem;
    width: 100%;
  }
  @media screen and (max-width: 820px) {
    margin-left: 0 auto;
    padding: 0;
    margin: 0;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin: 0;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    margin-right: 0;
  }
`;
export const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 100%;
  max-width: 196rem;
  height: 56px;

  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 820px) {
    margin-bottom: 1px;
  }
  @media screen and (max-width: 768px) {
    font-size: 2px;
    background-color: red;
  }
  @media screen and (max-width: 480px) {
    font-size: 2px;
  }
`;
export const FooterLinks = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  width: 196px;
  height: 56px;
  display: none;
  text-align: left;

  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    display: block;
  }
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 960px) {
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 100%;
  }
  @media screen and (max-width: 480px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: red;
    width: 100%;
  }
`;
FooterLinks.H1 = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 36px;
  display: none;

  color: #ffffff;
  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    display: block;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    color: #ffffff;
    margin: 5px 0;
  }
  @media screen and (max-width: 1024px) {
    display: block;
    font-weight: 600;

    font-size: 20px;
    line-height: 36px;
    color: #ffffff;
    max-width: 20rem;
    width: 100%;
    margin: 0px 0;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    display: block;
    font-weight: 600;

    font-size: 17px;
    line-height: 32px;
    color: #ffffff;
    max-width: 20rem;
    width: 100%;
    margin: 0px 0;
    padding: 0;
  }
  @media screen and (max-width: 820px) {
    display: block;
    font-weight: 600;

    font-size: 16px;
    line-height: 30px;
    color: #ffffff;
    max-width: 20rem;
    width: 100%;
    margin: 0px 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    display: none;
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 280px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 36px;
  }
`;
FooterLinks.T = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  font-feature-settings: "pnum" on, "lnum" on;
  display: none;
  color: #cccece;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 762px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    display: flex;
    color: #cccece;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
    display: flex;
  }
`;
export const T2 = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 30px;
  text-align: left;
  font-feature-settings: "pnum" on, "lnum" on;
  display: none;
  color: #cccece;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    margin-top: 10px;
    font-size: 18px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 10px;
    text-align: center;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #cccece;
    display: flex;
    max-width: 300px;
    margin-right: 450px;
  }
  @media screen and (max-width: 762px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    display: flex;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
    display: flex;
    justify-content: center;
    display: flex;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
    display: flex;
  }
`;
FooterLink.H1 = styled.div`
  font-weight: 400;
  font-size: 28px;
  line-height: 48px;
  max-width: 20rem;
  width: 100%;
  transition: 0.3s ease-out;

  cursor: pointer;
  color: #ffffff;

  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 960px) {
    font-size: 20px;
  }
  @media screen and (max-width: 768px) {
    font-size: 23px;
    background-color: red;
  }
  @media screen and (max-width: 480px) {
    font-size: 23px;
  }
  @media screen and (max-width: 280px) {
    font-size: 18px;
  }
`;
export const T = styled.div`
  color: #ffbb00;
`;
FooterLink.T1 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 48px;
  color: #cccece;
  transition: 0.3s ease-out;

  cursor: pointer;

  &:hover {
    color: #ffff;

    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 960px) {
    font-size: 17px;
  }
  @media screen and (max-width: 820px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
  @media screen and (max-width: 280px) {
    font-size: 12px;
  }
`;
FooterLink.P = styled.div`
  max-width: 50rem;
  cursor: pointer;
  font-weight: 400;
  font-size: 20px;
  line-height: 48px;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #ffffff;

  &:hover {
    color: #d2cdcc;
    transition: 0.3s ease-out;
  }

  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    width: 100%;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    width: 100%;
    color: #ffffff;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 42px;
    width: 100%;
    color: #ffffff;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 13px;
    line-height: 37px;
    width: 100%;
    color: #ffffff;
    margin-bottom: 0px;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 36px;
    margin-right: 5px;
  }
  @media screen and (max-width: 430px) {
    font-size: 13.5px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 11px;
    line-height: 36px;
    margin-right: 0px;
  }
  @media screen and (max-width: 295px) {
    font-weight: 400;
    font-size: 10px;
    line-height: 36px;
    margin-right: 0px;
  }
  @media screen and (max-width: 280px) {
    flex-direction: column;
    font-size: 11px;
  }
`;
export const Avialable = styled.div`
  color: rgba(0, 0, 0, 0.8);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.32px;
  margin: 12px 0 8px 0;
`;
export const Offers = styled.div`
  display: flex;
  gap: 8px;
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
    gap: 2px;
    padding: 12px 12px 12px 12px;
    font-size: 15px;
  }
  @media screen and (max-width: 370px) {
    font-size: 14px;
    gap: 0px;
    padding: 8px 10px 8px 10px;
  }
  @media screen and (max-width: 345px) {
    padding: 8px 8px 8px 8px;
    font-size: 12px;
  }
`;

export const DefaultContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 16px;
  display: none;
  @media screen and (max-width: 991px) {
    display: flex;
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;
export const DefaultContainer2 = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
  }
`;
export const DefaultBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
