import React from "react";
import styles from "./Home.module.css";
import doctorImg from "./../../images/hero-section-img.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.left}>
          <h1>Efficient medical <br /> management system</h1>
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
    </>
  );
};

export default Home;
