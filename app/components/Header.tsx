"use client";

import Image from "next/image";
import { useState } from "react";

export const Header = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsNavCollapsed(true);
  };

  return (
    <nav className="navbar navbar-expand-md bg-body-tertiary">
      <div className="container">
        <a href="/" className="navbar-brand">
          <Image src="/images/logo.png" alt="logo" width={238} height={35} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setIsNavCollapsed(!isNavCollapsed)}
          aria-controls="navbarText"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`navbar-collapse ${
            isNavCollapsed ? "collapse-mobile" : "show-mobile"
          }`}
          id="navbarText"
        >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={(e) => handleScroll(e, "#home")}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#about"
                onClick={(e) => handleScroll(e, "#about")}
              >
                About
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#contact"
                onClick={(e) => handleScroll(e, "#contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
