import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
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
