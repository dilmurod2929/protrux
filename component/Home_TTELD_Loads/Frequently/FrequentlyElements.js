import styled from "styled-components";

export const FrequntlyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 88px;
  @media screen and (max-width: 480px) {
    padding: 0;
    margin: 72px 0 0 0;
  }
`;
export const FrequntlyH1 = styled.h1`
  color: #0f111c;
  text-align: center;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 48px;
  letter-spacing: -1.6px;

  @media screen and (max-width: 480px) {
    text-align: center;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    letter-spacing: -0.96px;
  }
`;
export const FrequntlyText = styled.p`
  color: #797b8d;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: -0.36px;
  margin: 16px 0 56px 0;
  max-width: 700px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    max-width: 300px;
  }

  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    max-width: 330px;
    margin-top: 12px;
  }
  @media screen and (max-width: 320px) {
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-align: left;
  }
`;
export const FrequentlyWrapper = styled.div`
  width: 63%;
  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    padding: 0 24px;
  }
`;
export const MaxWidth = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: 42rem;
    padding: 0;
  }
`;

export const FrequntlyBox1 = styled.div`
  background: rgba(255, 255, 255, 0.97);
  border: 1.5px solid #409cff;
  box-sizing: border-box;
  box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  max-width: 87rem;
  max-height: 1700px;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.01);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;
export const Col = styled.div`
  display: flex;
  /* margin: 24px; */
  align-items: center;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 55rem;
  }
  @media screen and (max-width: 768px) {
    line-height: 0px;
    margin-top: 0px;
    padding: 0;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
  }
`;
export const FrequntlyH2 = styled.h2`
  font-weight: 600;
  font-size: 28px;
  line-height: 42px;
  color: #1470c6;
  margin-right: auto;

  @media screen and (max-width: 480px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
  }
`;
export const FrequentlyP = styled.p`
  max-width: 60rem;
  width: 100%;
  margin-right: 210px;
  color: #141629;
  font-family: var(--inter-family);
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.3px;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
  }

  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin-right: 0;
    padding: 0 0 4px 10px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;

export const FrequntlyBox2 = styled.div`
  background: #ffffff;
  box-sizing: border-box;
  padding: 22px 26px;
  border-radius: 4px;
  margin-bottom: 24px;
  transition: all 0.2s ease-in-out;
  width: 100%;

  @media screen and (max-width: 480px) {
    padding: 5px 10px 0px 10px;
    margin-bottom: 16px;
  }
`;

export const FrequntlyT2 = styled.h2`
  line-height: 24px;
  margin-right: auto;
  font-family: var(--inter-family);
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.36px;
  @media screen and (max-width: 1280px) {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: left;
  }

  @media screen and (max-width: 820px) {
    margin-bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    padding: 0 0 0 0;
    margin-right: auto;
    text-align: left;
    max-width: 17.5rem;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    padding: 0;
    margin-right: auto;
  }
  @media screen and (max-width: 280px) {
    font-weight: 700;
    font-size: 11px;
    line-height: 24px;
    padding: 0;
    margin-right: auto;
  }
`;
export const FrequentlyP2 = styled.p`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  color: #5a7184;
  max-width: 74rem;
  margin-right: 210px;
  /* padding-left: 24px; */

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    padding: 10px;
    margin-right: 20px;
    margin-bottom: 40px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;
export const FrequentlyDecrement2 = styled.img`
  cursor: pointer;
  @media screen and (max-width: 820px) {
    width: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 15px;
    margin-bottom: 3px;
  }
  @media screen and (max-width: 480px) {
    width: 10px;
    margin-bottom: 1px;
  }
  @media screen and (max-width: 320px) {
    width: 10px;
    margin-bottom: 1px;
  }
  @media screen and (max-width: 280px) {
    width: 10px;
  }
`;
export const FrequentlyDecrement = styled.img`
  cursor: pointer;
  margin-bottom: 5px;

  @media screen and (max-width: 820px) {
    width: 15px;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 15px;
    margin-bottom: 3px;
  }
  @media screen and (max-width: 480px) {
    width: 10px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 320px) {
    width: 11px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 280px) {
    width: 10px;
    margin-bottom: 10px;
  }
`;

export const MainLog = styled.div`
  padding: 1px 0px 0px 0px;

  @media screen and (max-width: 1280px) {
    padding: 1px 0px 0px 0px;
  }
  @media screen and (max-width: 960px) {
    padding: 1px 0px 0px 0px;
  }
  @media screen and (max-width: 820px) {
  }
`;
export const FrequentlyLogin = styled.div`
  background-color: #2b2d31;
  padding: 30px 70px;
  margin-top: 128px;

  @media screen and (max-width: 1280px) {
    padding: 50px 50px 60px 50px;
    flex-direction: column;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 60px 60px 60px;
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    padding: 0px 50px 40px 50px;
  }
  @media screen and (max-width: 820px) {
  }
  @media screen and (max-width: 768px) {
    padding: 0 0;
    margin-top: 90px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 0 0px 0px;
    background-color: #2b2d31;
    margin-top: 90px;

    width: 100%;
    max-width: 300rem;
  }
`;

export const Col3 = styled.div`
  display: flex;
  margin: 24px;
  /* justify-content: center;
  align-items: center; */

  @media screen and (max-width: 1280px) {
    flex-direction: column;
    margin: 0;
    display: flex;

    justify-content: none;
    align-items: none;
  }

  @media screen and (max-width: 960px) {
    margin: 0;
    display: flex;

    justify-content: none;
    align-items: none;
  }
  @media screen and (max-width: 768px) {
    max-width: 40rem;
    padding: 0;
    margin: 0 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    /* margin: 10px; */
    margin-top: 60px;
    max-width: 35rem;
    padding: 0;
    margin: 0 0px;
  }
`;

export const LoginText = styled.div`
  max-width: 34rem;
  margin-right: auto;
  @media screen and (max-width: 1280px) {
    padding: 0px 0 0px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 66rem;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    padding: 40px 0 0px 0;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0;
    width: 100%;
    max-width: 66rem;
  }
`;
export const LoginTxt1 = styled.div`
  font-weight: 700;
  font-size: 43px;
  line-height: 68px;
  color: #ffffff;
  margin-bottom: 12px;
  font-family: var(--inter-family);
  @media screen and (max-width: 1280px) {
    font-weight: 700;
    font-size: 38.4px;
    line-height: 56px;
    text-align: center;
    text-align: center;
    color: #ffffff;
    padding: 0;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 700;
    font-size: 38.4px;
    line-height: 56px;
    text-align: center;
    color: #ffffff;
  }
  @media screen and (max-width: 960px) {
    font-weight: 700;
    font-size: 36px;
    line-height: 39px;
    text-align: center;
    color: #ffffff;
    margin: 0;
  }
  @media screen and (max-width: 820px) {
    font-weight: 700;
    font-size: 32px;
    line-height: 30px;
    text-align: center;
    color: #ffffff;
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 26px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    max-width: 16rem;
    margin: 0 0 3px 0;
  }
  @media screen and (max-width: 320px) {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }
`;
export const LoginTxt2 = styled.div`
  font-weight: 400;
  font-size: 21px;
  line-height: 36px;
  margin-bottom: 24px;
  color: #a7a8aa;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #a7a8aa;
    max-width: 42rem;
    margin: 0;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 36px;
    text-align: center;
    color: #a7a8aa;
    max-width: 42rem;
  }
  @media screen and (max-width: 960px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 35px;
    text-align: center;
    color: #8c98a4;
    max-width: 39rem;
    margin: 0;
    margin-top: 22px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    color: #8c98a4;
    max-width: 40rem;
    margin: 0px;
    margin-top: 22px;

    max-width: 32rem;
  }
  @media screen and (max-width: 768px) {
    font-size: 13px;
    line-height: 27px;
    margin: 0px;
    padding: 0;
    text-align: center;
  }

  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    padding-bottom: 30px;
    max-width: 20rem;
  }
  @media screen and (max-width: 320px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    text-align: center;
    padding-bottom: 30px;
    max-width: 18rem;
  }
`;
export const LoginTxt3 = styled.div`
  font-weight: 600;
  font-size: 24px;
  line-height: 40px;
  color: #fafafb;
  max-width: 25rem;
  margin-bottom: 12px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
    display: none;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
  }
`;
export const LoginTxt4 = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 36px;
  color: #c7c7c7;
  @media screen and (max-width: 1280px) {
    display: none;
  }
  @media screen and (max-width: 768px) {
    font-size: 19px;
    line-height: 32px;
    margin: 10px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 19px;
    line-height: 32px;
    text-align: center;
    margin: 10px;
  }
`;

export const LoginTextButton = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #fafafb;
  max-width: 30rem;
  padding: 32px 0 0px 0;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  display: none;

  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 22px;
    line-height: 40px;
    color: #fafafb;
    display: flex;
    max-width: 45rem;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 40px;
    color: #fafafb;
    display: flex;
    max-width: 45rem;
    margin: 24px 0 0 0;
    padding: 0;
  }
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 40px;
    color: #fafafb;
    display: flex;
    align-items: center;
    max-width: 45rem;
    margin: 0px;
    padding: 0px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 40px;
    color: #fafafb;
    display: flex;
    max-width: 45rem;
    margin: 0px 0 0 0;
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 32px;
    margin: 0px;
    text-align: center;
    flex-direction: column;
    padding-top: ${({ primary }) => (primary ? "0x" : "0px")};
    /* margin-top: 20px; */
    margin-bottom: 0px;
  }
  @media screen and (max-width: 480px) {
    font-size: 18px;
    line-height: 32px;
    margin: 0px;
    text-align: center;
    flex-direction: column;
    margin-top: ${({ primary }) => (primary ? "30px" : "10px")};
  }
`;
export const Cl = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    margin-bottom: 30px;
  }
`;
export const IconsButtonSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: #ffffff;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
  @media screen and (max-width: 960px) {
    font-size: 17px;
    line-height: 32px;
    /* margin-top: 30px; */
    text-align: center;
  }

  @media screen and (max-width: 820px) {
    font-size: 14px;
    line-height: 32px;
    /* margin-top: 30px; */
    text-align: center;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 32px;
    margin-top: 20px;
    text-align: center;
  }
  @media screen and (max-width: 480px) {
    font-size: 10px;
    line-height: 32px;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
  }
`;
export const IconsText = styled.img`
  margin: 0 8px 0 20px;
  @media screen and (max-width: 1280px) {
    width: 30px;
    height: 30px;
  }
  @media screen and (max-width: 1024px) {
    width: 30px;
    height: 24px;
  }
  @media screen and (max-width: 960px) {
    width: 40px;
  }
  @media screen and (max-width: 820px) {
    width: 25px;
    margin: 0 8px 0 10px;
  }
  @media screen and (max-width: 768px) {
    width: 25px;
  }
  @media screen and (max-width: 480px) {
    width: 25px;
  }
  @media screen and (max-width: 280px) {
    width: 20px;
  }
`;
export const IconsText2 = styled.img`
  margin: 0 0px 0 20px;
  @media screen and (max-width: 960px) {
    width: 30px;
    margin: 0 8px 0 40px;
  }
  @media screen and (max-width: 820px) {
    width: 25px;
    margin: 0 8px 0 40px;
  }
  @media screen and (max-width: 768px) {
    width: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 25px;
  }
  @media screen and (max-width: 280px) {
    width: 20px;
  }
`;
export const LoginHr = styled.hr`
  border: none;
  border-top: 2px dashed #b3bac5;
  max-width: 28rem;
  margin-bottom: 24px;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const LoginContainer = styled.div`
  /* margin-left: 120px; */
  /* max-height: 69rem; */
  max-width: 31rem;
  /* max-height: 40rem; */
  width: 100%;
  background-color: white;

  @media screen and (max-width: 1280px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 0 0;
    max-width: 65rem;
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 20px 0;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
    font-size: 13px;
    margin: 60px 0 40px 0;
  }
  @media screen and (max-width: 480px) {
    /* margin-top: 60px;
    padding: 0;
    margin: 60px 0 0 0; */
    max-width: 21.3rem;
    border-radius: 4px;
    padding: 0;
    margin: 0 auto;
  }
`;
export const FormWrap = styled.div`
  height: 100%;
  max-width: 40rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 1280px) {
    padding: 0;
    font-size: 13px;
    /* margin: 60px 0 0 0; */
    max-width: 65rem;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    border-radius: 14px;
  }
  @media screen and (max-width: 480px) {
    height: 80%;
    border-radius: 14px;
  }
`;

export const FormContent = styled.div`
  height: 100%;

  @media screen and (max-width: 768px) {
    padding: 0px 0;
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    border-radius: 14px;
  }
`;

export const DisplayInput = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1280px) {
    display: none;
  }
`;

export const Form = styled.form`
  padding: 30px;
  max-width: 600rem;
  height: auto;
  width: 100%;
  display: grid;
  /* margin: 0 auto; */
  /* padding: 80px 32px; */
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 768px) {
    padding: 30px;
    /* font-size: 13px; */
    margin: 0;
  }
  @media screen and (max-width: 480px) {
    padding: 25px 10px;
    margin: 0;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 40px;
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  color: #5a7184;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #5a7184;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #5a7184;
  }
  @media screen and (max-width: 960px) {
    padding: 1px 1px;
    font-size: 15px;
    margin-bottom: 10px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 820px) {
    padding: 1px 1px;
    font-size: 14px;
    margin-bottom: 10px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 768px) {
    padding: 1px 1px;
    font-size: 16px;
    margin-bottom: 5px;
  }
  @media screen and (max-width: 480px) {
    padding: 1px 1px;
    font-weight: 400;
    font-size: 11px;
    line-height: 16px;
    margin: 0px 0 2px 4px;
  }
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  border: 1px solid #c3cad9;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 15px;
  color: #959ead;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #959ead;
    margin-bottom: 26px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #959ead;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 960px) {
    max-width: 1300rem;
    padding: 16px 15px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 820px) {
    padding: 13px 15px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding: 15x 15px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media screen and (max-width: 280px) {
    padding: 10px 5px;
    font-size: 11px;
  }
`;
export const FormInputTextarea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 24px;
  border: none;
  border-radius: 4px;
  border: 1px solid #c3cad9;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 15px;
  color: #959ead;
  resize: none;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #959ead;
    margin-bottom: 26px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #959ead;
    margin-bottom: 25px;
  }
  @media screen and (max-width: 960px) {
    max-width: 1300rem;
    padding: 16px 15px;
    font-size: 15px;
    margin-bottom: 20px;
  }
  @media screen and (max-width: 820px) {
    padding: 13px 15px;
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    padding: 15x 15px;
    font-size: 16px;
  }
  @media screen and (max-width: 480px) {
    padding: 10px 10px;
    font-weight: 600;
    font-size: 12px;
    line-height: 16px;
    margin-left: 5px;
    margin-right: 5px;
  }
  @media screen and (max-width: 280px) {
    padding: 10px 5px;
    font-size: 11px;
  }
`;

export const FormButton = styled.button`
  background: #ffbb00;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  @media screen and (max-width: 1280px) {
    font-weight: 600;
    font-size: 20px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    margin-top: 18px;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    color: #ffffff;
    margin-top: 18px;
  }
  @media screen and (max-width: 960px) {
    font-size: 16px;

    padding: 15px 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 16px;
    padding: 15px 15px;
  }
  @media screen and (max-width: 480px) {
    padding: 8px 10px;

    font-size: 15px;
  }
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
export const FormMainCol = styled.div`
  display: flex;
  max-width: 600rem;
  @media screen and (max-width: 1280px) {
    max-width: 600rem;
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    max-width: 600rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FormCol = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px;
  max-width: 640rem;
  width: 100%;
  @media screen and (max-width: 1280px) {
    margin: 0px;
    max-width: 640rem;
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    margin: 0px;
    max-width: 640rem;
    width: 100%;
    margin-left: 12px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;
export const FormCol1 = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 12px;
  @media screen and (max-width: 1280px) {
    max-width: 540rem;
    margin-right: auto;
    width: 100%;
    margin-right: 24px;
  }
  @media screen and (max-width: 960px) {
    max-width: 540rem;
    margin-right: auto;
    width: 100%;
    margin-right: 12px;
  }

  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;

export const FormMainCol2 = styled.div`
  /* display: flex; */
  max-width: 600rem;
  /* display: none; */
  @media screen and (max-width: 1280px) {
    max-width: 600rem;
    width: 100%;
    display: flex;
  }
  @media screen and (max-width: 960px) {
    max-width: 600rem;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
export const FormCol2 = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1280px) {
    margin: 0px;
    max-width: 640rem;
    width: 100%;
  }
  @media screen and (max-width: 960px) {
    margin: 0px;
    max-width: 640rem;
    width: 100%;
    margin-left: 12px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;
export const FormCol12 = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-right: 12px; */
  @media screen and (max-width: 1280px) {
    max-width: 540rem;
    margin-right: auto;
    width: 100%;
    margin-right: 24px;
  }
  @media screen and (max-width: 960px) {
    max-width: 540rem;
    margin-right: auto;
    width: 100%;
    margin-right: 12px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  /* height: 100vh;
width: 100vw; */
  justify-content: center;
  align-items: center;
`;
export const Accordion = styled.div`
  width: 500px;
`;
export const Item = styled.div`
  background: #f0ebe1;
  margin-bottom: 5px;
  padding: 10px 20px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
`;
export const Title = styled.div`
  color: #85662b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

export const Content = styled.div`
  color: #8b7f75;
  max-height: 0;
  overflow: hidden;
  transition: all 0.5 cubic-bezier(0, 1, 0, 1);
`;
Content.Show = styled.div`
  height: auto;
  max-height: 999px;
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
`;
export const Dropwn = styled.div`
  transition: all 0.5s cubic-bezier(1, 0, 1, 0);
`;
export const TitleH2 = styled.h2``;
export const TitleSpan = styled.span``;
