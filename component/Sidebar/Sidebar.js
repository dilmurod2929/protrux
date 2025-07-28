import SidebarItem from "./SidebarItem";
import items from "./data/sidebar.json";
import { Icon, Logo, SidebarContainer } from "./SidebarElements";
import React from "react";
import Link from "next/link";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen}>
      <div className="sidebar" isOpen={isOpen}>
        <Icon>
          <Link href="/">
            <Logo src="FooterIcons/ProTrux.svg" />
          </Link>
        </Icon>
        {items.map((item, index) => (
          <SidebarItem key={index} item={item} />
        ))}
      </div>
    </SidebarContainer>
  );
}
