import React, { useEffect, useState } from "react";
import {
  MobileIcon,
  Nav,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLogo,
  NavMenu,
  NavSignBtnLink,
  NavTXT,
  SpanFlex,
  ContactUsArrow,
  NavLi,
} from "./Navbar";
import { useRouter } from "next/router";
import { IconContext } from "react-icons/lib";
import Link from "next/link";
import ReactGA from "react-ga4";

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 40) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const router = useRouter();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: router.pathname });
  }, [router.pathname]);

  const handleScrollOrRedirect = (id) => {
    if (router.pathname !== "/") {
      router.push(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <SpanFlex>
              <Link href="/">
                <a>
                  <NavLogo>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="124"
                      height="20"
                      viewBox="0 0 124 20"
                      fill="none"
                    >
                      <path
                        d="M109.684 0L113.068 7.12121H113.219L116.83 0H122.916L117.436 9.79798L123.396 19.697H116.906L112.967 12.4747H112.765L109.027 19.697H102.992L108.548 9.79798L103.472 0H109.684Z"
                        fill="#1D72E9"
                      />
                      <path
                        d="M102.346 11.6162C102.346 18.3333 100.603 20 93.6084 20C86.6135 20 84.8711 18.3333 84.8711 11.6162V0H90.1741V11.6162C90.1741 15.303 90.5276 15.7071 93.6084 15.7071C96.6891 15.7071 97.0427 15.303 97.0427 11.6162V0H102.346V11.6162Z"
                        fill="#1D72E9"
                      />
                      <path
                        d="M76.7937 0C82.0462 0 83.3593 1.13636 83.3593 5.70707C83.3593 8.96465 82.1472 10.5051 79.3947 10.8838C82.0209 11.1616 83.3593 12.3232 83.3593 14.8485V19.697H77.8038V15.1515C77.8038 12.9798 77.526 12.7525 74.7736 12.7525H70.8342V19.697H65.5312V0H76.7937ZM70.8342 8.71212H75.4301C77.8038 8.71212 78.0563 8.48485 78.0563 6.46465C78.0563 4.5202 77.8038 4.29293 75.4301 4.29293H70.8342V8.71212Z"
                        fill="#1D72E9"
                      />
                      <path
                        d="M53.2501 19.697V4.54545H47.2148V0H64.6389V4.54545H58.5531V19.697H53.2501Z"
                        fill="#1D72E9"
                      />
                      <path
                        d="M38.894 8.02811C36.2931 8.02811 36.0153 8.43215 36.0153 12.119C36.0153 15.8059 36.2931 16.2099 38.894 16.2099C41.495 16.2099 41.7728 15.8059 41.7728 12.119C41.7728 8.43215 41.495 8.02811 38.894 8.02811ZM30.9648 12.119C30.9648 5.80589 32.5557 4.24023 38.894 4.24023C45.2323 4.24023 46.8232 5.80589 46.8232 12.119C46.8232 18.4322 45.2323 19.9978 38.894 19.9978C32.5557 19.9978 30.9648 18.4322 30.9648 12.119Z"
                        fill="#0F111C"
                      />
                      <path
                        d="M19.3516 4.54663H24.1495V7.34966C24.5788 5.40522 25.9424 4.54663 28.4676 4.54663H30.21V8.83956L26.801 8.78906C24.9323 8.7638 24.1495 9.49613 24.1495 11.188V19.6981H19.3516V4.54663Z"
                        fill="#0F111C"
                      />
                      <path
                        d="M0 0H11.2625C16.5149 0 17.8281 1.31313 17.8281 6.56566C17.8281 11.6667 16.6159 13.0051 11.717 13.2576H5.30296V19.697H0V0ZM5.30296 8.71212H9.89886C12.2726 8.71212 12.5251 8.5101 12.5251 6.59091C12.5251 4.5202 12.2726 4.29293 9.89886 4.29293H5.30296V8.71212Z"
                        fill="#0F111C"
                      />
                    </svg>
                  </NavLogo>
                </a>
              </Link>
            </SpanFlex>
            <NavMenu>
              <nav>
                <ul style={{ gap: "32px" }}>
                  <NavLi>
                    <a onClick={() => handleScrollOrRedirect("features")}>
                      <NavTXT>Features</NavTXT>
                    </a>
                  </NavLi>
                  <NavLi>
                    <a onClick={() => handleScrollOrRedirect("integrations")}>
                      <NavTXT>Integrations</NavTXT>
                    </a>
                  </NavLi>
                  <NavLi>
                    <a onClick={() => handleScrollOrRedirect("contact")}>
                      <NavTXT>Contact</NavTXT>
                    </a>
                  </NavLi>
                </ul>
              </nav>
            </NavMenu>
            <NavBtn>
              <MobileIcon onClick={toggle}>
                <img src="./Signin/burgerMenu.svg" />
              </MobileIcon>

              <Link href="https://dash.protrux.com/login" target="_blank">
                <a target="_blank">
                  <NavSignBtnLink
                    onClick={() =>
                      ReactGA.event({
                        category: "OnClick Sign In button",
                        action: "OnClick Sign In button",
                        label: "OnClick Sign In button",
                      })
                    }
                    scrollNav={scrollNav}
                  >
                    Log in
                  </NavSignBtnLink>
                </a>
              </Link>
              <Link
                href="https://dash.protrux.com/registration"
                target="_blank"
              >
                <a target="_blank">
                  <NavBtnLink
                    onClick={() =>
                      ReactGA.event({
                        category: "OnClick Sign Up button",
                        action: "OnClick Sign Up button",
                        label: "OnClick Sign Up button",
                      })
                    }
                    scrollNav={scrollNav}
                  >
                    Get started{" "}
                    <ContactUsArrow src="/ProductsImgs/icon-right.svg" />
                  </NavBtnLink>
                </a>
              </Link>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
//fff
