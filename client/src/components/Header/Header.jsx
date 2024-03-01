import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import LogoIcon from "./../../images/logo-icon.png";
import LogoText from "./../../images/logo-text.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faBars,
  faAngleDown,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./Header.module.css";
import HomeIcon from "./../../images/home-icon.svg";
import ReservationsIcon from "./../../images/reservations-icon.svg";
import ChatIcon from "./../../images/chat-icon.svg";
import ProfileImg from "./../../images/profile.svg";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileMenu, setprofileMenu] = useState(false);
  const location = useLocation();

  const menuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const profileMenuToggle = () => {
    setprofileMenu(!profileMenu);
  };

  return (
    <header>
      <div className={styles.navBar}>
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

        <div className={styles.navToggle} onClick={menuToggle}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>

        <ul className={`${styles.navList} ${menuOpen ? styles.active : ""}`}>
          {location.pathname !== "/reservations" &&
            location.pathname !== "/chat" &&
            location.pathname !== "/profile" && (
              <>
                <li className={styles.navItem}>
                  <a className={styles.link} href="/home">
                    Home
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.link} href="/home#about">
                    About US
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.link} href="/home#services">
                    Services
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.link} href="/home#faq">
                    FAQ
                  </a>
                </li>
                <li className={styles.navItem}>
                  <a className={styles.link} href="/home#contact">
                    Contact
                  </a>
                </li>
              </>
            )}
          {(location.pathname === "/reservations" ||
            location.pathname === "/chat" ||
            location.pathname === "/profile") && (
            <>
              <li className={styles.navItem}>
                <a className={styles.link} href="/home">
                  <img src={HomeIcon} alt="Home" />
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.link} href="/reservations">
                  <img src={ReservationsIcon} alt="Reservations" />
                </a>
              </li>
              <li className={styles.navItem}>
                <a className={styles.link} href="/chat">
                  <img src={ChatIcon} alt="Chat" />
                </a>
              </li>
            </>
          )}
          <li className={styles.navItem}>
            {(location.pathname === "/home" ||
              location.pathname === "/" ||
              !location.pathname) && (
              <div className={styles.rightLinks}>
                <Link
                  className={[styles.link, styles.login].join(" ")}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  className={[styles.link, styles.signup].join(" ")}
                  to="/signup"
                >
                  Sign up
                  <FontAwesomeIcon
                    className={styles.arrow}
                    icon={faArrowRight}
                  />
                </Link>
              </div>
            )}
            {(location.pathname === "/reservations" ||
              location.pathname === "/profile" ||
              location.pathname === "/chat") && (
              <>
                <div className={styles.profileCard} onClick={profileMenuToggle}>
                  <img src={ProfileImg} alt="Profile" />
                  <span>Carter Smith</span>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
                {profileMenu && (
                  <div
                    className={`${styles.profileMenu} ${styles.profileMenu}`}
                  >
                    <ul>
                      <li>
                        <Link to={"/profile"} className={styles.link}>
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link to={"/home"} className={styles.link}>
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            )}
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Nav;
