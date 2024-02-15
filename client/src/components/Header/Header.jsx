import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import LogoIcon from "./../../images/logo-icon.png";
import LogoText from "./../../images/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Header.module.css";

const Header = () => {
  const [menu, setMenu] = useState(true);

  const menuToggle = () => {
    setMenu(!menu);
  };

  return (
    <header className={styles.header}>
      <div className={styles.left}>
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
        <nav className={`${!menu ? styles.open : ""}`}>
          <NavLink className={styles.link} to="/home">
            Home
          </NavLink>
          <NavLink className={styles.link} to="/home#about">
            About US
          </NavLink>
          <NavLink className={styles.link} to="/home#services">
            Services
          </NavLink>
          <NavLink className={styles.link} to="/home#contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className={[styles.right, !menu ? styles.open : ""].join(" ")}>
        <Link className={[styles.link, styles.login].join(" ")} to="/login">
          Login
        </Link>
        <Link
          className={[styles.link, styles.register].join(" ")}
          to="/register"
        >
          Sign up
          <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
        </Link>
        <span>
          <FontAwesomeIcon
            className={styles.menu}
            icon="fa-bars"
            onClick={menuToggle}
          />
        </span>
      </div>
    </header>
  );
};

export default Header;
