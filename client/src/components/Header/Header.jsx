import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "./../../images/logo-icon.png";
import LogoText from "./../../images/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const location = useLocation();
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <Link className={styles.logoWrapper} to="/home">
        <img
          className={[styles.logo, styles.logoIcon].join(" ")}
          src={LogoIcon}
          alt="Logo Icon"
        />
        <img
          className={[styles.logo, styles.logoText].join(" ")}
          src={LogoText}
          alt="Logo Text"
        />
      </Link>
      <nav className={`${!menuOpen ? styles.open : ""}`}>
        <ul>
          <li>
            <a className={styles.link} href="/home">
              Home
            </a>
          </li>
          <li>
            <a className={styles.link} href="/home#about">
              About US
            </a>
          </li>
          <li>
            <a className={styles.link} href="/home#services">
              Services
            </a>
          </li>
          <li>
            <a className={styles.link} href="/home#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        className={styles.menu}
        icon="fa-bars"
        onClick={menuToggle}
      />
      {(location.pathname === "/home" ||
        location.pathname === "/" ||
        !location.pathname) && (
        <div className={styles.right}>
          <div>
            <Link className={[styles.link, styles.login].join(" ")} to="/login">
              Login
            </Link>
            <Link
              className={[styles.link, styles.signup].join(" ")}
              to="/signup"
            >
              Sign up
              <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
