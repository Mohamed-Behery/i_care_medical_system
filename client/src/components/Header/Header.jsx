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
        <nav className={`${!menuOpen ? styles.open : ""}`}>
          <ul>
            {location.pathname !== "/reservations" &&
              location.pathname !== "/chat" &&
              location.pathname !== "/profile" && (
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
                    <a className={styles.link} href="/home#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
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
      </div>
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
      {(location.pathname === "/reservations" ||
        location.pathname === "/profile" ||
        location.pathname === "/chat") && (
        <div className={styles.right}>
          <div className={styles.profileCard} onClick={profileMenuToggle}>
            <img src={ProfileImg} alt="Profile" />
            <span>Carter Smith</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          {profileMenu && (
            <div className={`${styles.profileMenu} ${styles.profileMenu}`}>
              <ul>
                <li>
                  <Link to={"/profile"} className={styles.link}>Profile</Link>
                </li>
                <li>Logout</li>
              </ul>
            </div>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
