import React, { useState } from "react";
import {
  Icon,
  Logo,
  SidebarContainer,
  SidebarLink,
  SidebarWrapper,
  SideBtnWrap,
  Col,
  FrequntlyBox2,
  FrequentlyP,
} from "./SidebarElements";
import Link from "next/link";

const Sidebar = ({ isOpen, toggle }) => {
  const [selected, setSelected] = useState(null);
  const toggle2 = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarWrapper>
        <Icon>
          <Link href="/">
            <Logo src="Signin/LogoSidebar.png" />
          </Link>
        </Icon>
        <div>
          {data.map((item, i) => (
            <FrequntlyBox2
              key={i}
              className={selected === i ? "border" : "border1"}
            >
              <Col
                onClick={() => toggle2(i)}
                className={selected === i ? "col" : "col2"}
              >
                <SidebarLink className={selected === i ? "color" : "color1"}>
                  {item.question}
                </SidebarLink>
              </Col>
              <FrequentlyP
                className={selected === i ? "content show" : "content"}
              ></FrequentlyP>
            </FrequntlyBox2>
          ))}
        </div>

        <SideBtnWrap></SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;

const data = [
  {
    question: "Products",
    answer: (
      <div>
        <div>
          <a href="/">ProTrux</a>
        </div>
        <div>
          <a href="/tteldLoads">ProTrux Loads</a>
        </div>
        <div>
          <a href="/store">Store</a>
        </div>
      </div>
    ),
    link: (
      <div>
        <div>/</div>
        <div>tteldLoads</div>
        <div>store</div>
      </div>
    ),
  },

  {
    question: "Features",
    answer: (
      <div>
        <div>Compliance</div>
        <div>Advanced Load Board</div>
        <div>Vehicle Telematics</div>
      </div>
    ),
  },
  {
    question: "Pricing",
    answer: "dsds",
  },
  {
    question: "Company",
    answer: (
      <div>
        <div>About</div>
        <div>Blog</div>
        <div>Sign Up</div>
      </div>
    ),
  },
  {
    question: "Help",
    answer: (
      <div>
        <div>Contact</div>
        <div>Guides</div>
        <div>Downloads</div>
      </div>
    ),
  },
];
