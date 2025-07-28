import styled from "styled-components";

export const Nav = styled.nav`
  box-shadow: ${({ scrollNav }) =>
    scrollNav ? "0px 4px 8px rgba(0, 0, 0, 0.03)" : "transparent"};
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 480px) {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.03);
    height: 60px;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  z-index: 1;
  width: 63%;

  @media screen and (max-width: 1680px) {
    width: 80%;
  }
  @media screen and (max-width: 1065px) {
    width: 100%;
    padding: 0 24px;
  }
`;
export const SpanFlex = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLogo = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 10px;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
  width: 150px;
  @media screen and (max-width: 1671px) {
    padding: 0;
  }
  @media screen and (max-width: 1280px) {
    padding: 0;
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
  @media screen and (max-width: 790px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 150px;
  }
  @media screen and (max-width: 743px) {
  }
  @media screen and (max-width: 480px) {
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;
export const NavLogo2 = styled.a`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
  margin-right: 20px;
  @media screen and (max-width: 1671px) {
    padding: 0;
  }
  @media screen and (max-width: 1280px) {
    padding: 0;
  }

  @media screen and (max-width: 1024px) {
  }
  @media screen and (max-width: 960px) {
    padding: 0;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 150px;
  }

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
  }
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    /* display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #fff; */
  }
  @media screen and (max-width: 768px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 20px;
    bottom: 0;
    margin: 0;
    padding: 0;
    /* transform: translate(150%, 0%); */
    cursor: pointer;
    font-size: 33px;
  }
`;
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  :after {
    content: "";
    clear: both;
    display: table;
  }

  @media screen and (max-width: 1671px) {
    margin-right: 0px;
  }
  @media screen and (max-width: 1280px) {
  }
  @media screen and (max-width: 1024px) {
    margin: 0;
  }
  @media screen and (max-width: 960px) {
    margin: 0;
  }
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const NavLinks = styled.div`
  font-family: var(--inter-family);
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  //color: var(--txt);
  color: ${({ active }) => (active ? "#000" : "#50555c")};
  width: 100%;
  align-items: flex-start;
  cursor: pointer;
  text-align: left;

  :nth-child(1) {
    padding: 12px 24px 12px 24px;
  }

  :nth-child(2) {
    padding: 12px 24px 12px 24px;
  }

  :nth-child(3) {
    padding: 12px 24px 12px 24px;
  }

  :hover {
    background: #f5f5f5 !important;
  }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 12px;
    bottom: 0;
    margin: 0;
    padding: 0;
  }
  @media screen and (max-width: 320px) {
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 15px;
    bottom: 0;
    margin: 0;
    padding: 0;
  }
`;
export const NavSignBtnLink = styled.div`
  padding: 8px 12px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--title);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  border-radius: 8px;
  border: solid 1px #fff;
  margin-right: 8px;
  &:hover {
    transition: all 0.2s ease-in-out;
    border: solid 1px #706e77;
  }

  @media screen and (max-width: 1110px) {
    padding: 8px 20px;
  }

  @media screen and (max-width: 768px) {
    display: none !important;
  }
`;
export const NavBtnLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  text-decoration: none;
  text-align: center;
  background: var(--orange-background);
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  white-space: nowrap;
  color: #ffffff;
  font-family: var(--inter-family);
  border: 1.2px solid var(--orange-background);
  padding: 8px 8px 8px 12px;
  border-radius: 8px;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: var(--Light-blue, #409cff);
    box-shadow: 0px 2px 16px 0px rgba(64, 156, 255, 0.24);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ContactUsArrow = styled.img`
  margin-left: 8px;
`;
export const NavLi = styled.li`
  position: relative;
`;

export const NavTXT = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 24px;
  padding: 24px 0px;
  font-size: 16px;
  font-weight: 500;
  color: #0f111c;
  height: ${({ active }) => (active ? "calc(100% + 4px)" : "100%")};
  cursor: pointer;
  /* @media screen and (max-width: 1110px) {
    font-size: 14px;
  } */
`;
export const NavLiHelp = styled.li`
  margin-left: 24px;
`;
export const NavTXTHelp = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 24px;
  //height: 100%;
  padding: 24px 0px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ active }) => (active ? "#000" : "#50555c")};
  height: ${({ active }) => (active ? "calc(100% + 4px)" : "100%")};
  border-bottom: ${({ active }) =>
    active ? "solid 3px var(--orange-color)" : ""};
  cursor: pointer;
  font-family: "Inter", sans-serif;
  //:after{
  //  display: block;
  //  content: "";
  //  margin-bottom: -10px;
  //  border-bottom: solid 4px rgb(147, 145, 145);
  //  border-radius: 10%;
  //  transform: scaleX(0);
  //  transition: transform 250ms ease-in-out;
  //}
  //:hover:after{
  //  transform: scaleX(1);
  //}
`;
