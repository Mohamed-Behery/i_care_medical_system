import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div id="contact" className={styles.contact}>
        <h2>Contact us</h2>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.icon} />
            <span>1234 Street Name, City, Country</span>
          </div>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faPhone} className={styles.icon} />
            <span>+123 456 7890</span>
          </div>
          <div className={styles.contactItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
            <span>info@example.com</span>
          </div>
        </div>
      </div>
      <div className={styles.footerLinks}>
        <ul className={styles.linksList}>
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
        </ul>
      </div>
      <div className={styles.copyRight}>
        <p>&copy; 2024 I Care. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
