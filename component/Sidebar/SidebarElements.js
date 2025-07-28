import styled from "styled-components";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  max-width: 50%;
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: grid;
  top: 0;

  transition: 0.3s ease-in-out;
  opacity: ${({isOpen}) => (isOpen ? "100%" : "0")};
  left: ${({isOpen}) => (isOpen ? "0" : "-100%")};
  
  @media (max-width: 480px){
    max-width: 70%;

  }
`;
export const SidebarWrapper = styled.div`
  color: #fff;
  padding: 0 25px;
`;
export const Icon = styled.div`
  padding: 0px 0 20px 0;
  border-bottom: solid 1px #eae9f2;
`;
export const Logo = styled.img`
  width: 60%;
`;
export const SidebarLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-weight: 400;
  font-size: 24px;
  line-height: 24px;
  color: #2c303d;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  text-decoration: none;
  font-family: var(--inter-family);
  cursor: pointer;
  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
  @media screen and (max-width: 320px) {
    font-size: 14px;
  }

  &:hover {
    color: #01bf71;
    transition: 0.2s ease-in-out;
  }
`;
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 90px;
  @media screen and (max-width: 320px) {
    font-size: 14px;
    padding-top: 50px;
  }
`;
export const FrequntlyBox2 = styled.div`
  box-sizing: border-box;
  margin: 0 22px 0 22px;
  transition: all 0.2s ease-in-out;

  :hover {
    transform: scale(1.005);
    transition: all 0.2s ease-in-out;
  }

  @media screen and (max-width: 1280px) {
    max-width: 1140px;
  }
  @media screen and (max-width: 1024px) {
    max-width: 55rem;
  }
  @media screen and (max-width: 820px) {
    padding: 16px 22px;
  }
  @media screen and (max-width: 768px) {
    padding: 23px 15px 15px 15px;
  }
  @media screen and (max-width: 480px) {
    padding: 4px 10px 1px 10px;
    margin: 0;

  }
  @media screen and (max-width: 320px) {
    padding: 3px 1px 1px 1px;
  }
`;
export const Col = styled.div`
  display: flex;
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
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin: 0px 6px 0px 6px;
  }
`;
export const FrequentlyP = styled.p`
  max-width: 60rem;
  width: 100%;
  margin-right: 210px;
  font-weight: 400;
  font-size: 16px;
  line-height: 28px;
  color: #4E4F51;
  font-family: 'Inter', sans-serif;

  @media screen and (max-width: 1280px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #5a7184;
  }
  @media screen and (max-width: 1024px) {
    font-weight: 400;
    font-size: 16px;
    line-height: 32px;
    color: #5a7184;
  }
  @media screen and (max-width: 960px) {
    font-weight: 600;
    font-size: 15px;
    line-height: 29px;
  }
  @media screen and (max-width: 820px) {
    font-weight: 600;
    font-size: 13.5px;
    line-height: 28px;
    margin-top: 5px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
  }
  @media screen and (max-width: 480px) {
    font-weight: 400;
    font-size: 12px;
    line-height: 22px;
    margin-right: 0;
    padding: 0 0 4px 10px;
  }
  @media screen and (max-width: 280px) {
    font-size: 14px;
  }
`;

