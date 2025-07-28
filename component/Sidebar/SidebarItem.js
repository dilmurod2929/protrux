import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ReactGA from "react-ga4";
export default function SidebarItem({ item }) {
  const [open, setOpen] = useState(false);

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
  if (item.childrens) {
    return (
      <>
        <div className={open ? "sidebar-item-Open open" : "sidebar-item"}>
          <div className="sidebar-title" onClick={() => setOpen(!open)}>
            <span className="span-title">
              {item.icon && <i className={item.icon}></i>}
              {item.title}
            </span>
            <i className="bi-chevron-down toggle-btn"></i>
          </div>
          <div className="sidebar-content">
            {item.childrens?.map((child, index) => (
              <SidebarItem key={index} item={child} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <a
          onClick={() => handleScrollOrRedirect(item.path)}
          className="sidebar-item2"
        >
          {item.icon && <i className={item.icon}></i>}
          {item.title}
        </a>
      </>
    );
  }
}
