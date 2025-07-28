import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar/Sidebar";
import Background from "./Background/Background";
import { useRouter } from "next/router";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const isActive =
    router.pathname === "/terms-and-privacy-policy" ||
    router.pathname === "/terms-and-conditions" ||
    router.pathname === "/cookie-policy" ||
    router.pathname === "/returns-refunds" ||
    router.pathname === "/eld-instructions" ||
    router.pathname === "/product-warranty" ||
    router.pathname === "/activate";

  const toggle = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (loading) {
    return (
      <div style={styles.loaderContainer}>
        <div style={styles.spinner}></div>
        <p style={styles.loadingText}>Loading...</p>
      </div>
    );
  }

  return (
    <>
      {!isActive && <Sidebar isOpen={isOpen} toggle={toggle} />}
      {!isActive && <Navbar toggle={toggle} />}
      {isOpen && <Background click={toggle} />}
      {children}
      {!isActive && <Footer />}
    </>
  );
};

const styles = {
  loaderContainer: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    zIndex: 9999,
  },
  spinner: {
    width: "50px",
    height: "50px",
    border: "6px solid #e5e7eb",
    borderTop: "6px solid #3b82f6",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  },
  loadingText: {
    marginTop: "10px",
    fontSize: "16px",
    color: "#6b7280",
    fontFamily: "sans-serif",
  },
};

export default Layout;
