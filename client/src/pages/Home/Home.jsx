import React from "react";
import styles from "./Home.module.css";
import doctorImg from "./../../images/hero-section-img.png";
import doctorsImg from "./../../images/about-section-img.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      {/*  HERO SECTION  */}
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>
            Efficient medical <br /> management system
          </h1>
          <p>Helps the doctor in the management of reservations</p>
          <div className={styles.heroBtns}>
            <Link className={styles.signup} to="/signup">
              Sign up
            </Link>
            <Link className={styles.login} to="/login">
              Login
              <FontAwesomeIcon className={styles.arrow} icon="arrow-right" />
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <img src={doctorImg} alt="Doctor" />
        </div>
      </section>
      {/*  ABOUT US SECTION  */}
      <section className={styles.about} id="about">
        <h2>About us</h2>
        <div className={styles.aboutContent}>
          <div className={styles.left}>
            <img src={doctorsImg} alt="Doctor" />
          </div>
          <div className={styles.right}>
            <p>
              We are dedicated to providing an efficient clinic management
              system, streamlining healthcare processes for enhanced patient
              care.
            </p>
            <hr />
            <p>
              Our focus is on innovation, precision, and excellence in
              delivering comprehensive solutions for clinics,
              labs, and pharmacies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
