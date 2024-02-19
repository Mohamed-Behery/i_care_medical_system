import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "./../../images/logo-icon.png";
import LogoText from "./../../images/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import HomeIcon from "./../../images/home-icon.svg";
import ReservationsIcon from "./../../images/reservations-icon.svg";
import ChatIcon from "./../../images/chat-icon.svg";
import ProfileImg from "./../../images/profile.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const location = useLocation();

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
          {location.pathname !== "/reservations" && (
            <>
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
            </>
          )}
          {location.pathname === "/reservations" && (
            <>
              <li>
                <a className={styles.link} href="/home">
                  <img src={HomeIcon} alt="Home" />
                </a>
              </li>
              <li>
                <a className={styles.link} href="/reservations">
                  <img src={ReservationsIcon} alt="Reservations" />
                </a>
              </li>
              <li>
                <a className={styles.link} href="/chat">
                  <img src={ChatIcon} alt="Chat" />
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
      <FontAwesomeIcon
        className={styles.menu}
        icon={faBars}
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
              <FontAwesomeIcon className={styles.arrow} icon={faArrowRight} />
            </Link>
          </div>
        </div>
      )}
      {location.pathname === "/reservations" && (
        <div className={styles.right}>
          <div className={styles.profileCard}>
            <img src={ProfileImg} alt="Profile" />
            <span>Carter Smith</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
