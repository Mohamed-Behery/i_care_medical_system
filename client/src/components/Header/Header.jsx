import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "./../../images/logo-icon.png";
import LogoText from "./../../images/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);

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
            <NavLink className={styles.link} to="/home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/home#about">
              About US
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/home#services">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink className={styles.link} to="/home#contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <FontAwesomeIcon
        className={styles.menu}
        icon="fa-bars"
        onClick={menuToggle}
      />
      <div className={styles.right}>
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
    </header>
  );
};

export default Header;
