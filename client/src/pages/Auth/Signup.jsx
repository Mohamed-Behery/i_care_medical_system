import React, { useState } from "react";
import styles from "./Auth.module.css";
import signupImg from "./../../images/signup.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const [next, setNext] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    setNext(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={styles.signup}>
      <div className={styles.left}>
        <img src={signupImg} alt="Signup" />
      </div>
      <div className={styles.right}>
        <form>
          <h3>Sign up</h3>
          {next === false && (
            <>
              <div className={styles.nameInput}>
                <div>
                  <label htmlFor="first-name">First Name</label> <br />
                  <input id="first-name" name="first-name" type="text" />
                </div>
                <div>
                  <label htmlFor="last-name">Last Name</label> <br />
                  <input id="last-name" name="last-name" type="text" />
                </div>
              </div>
              <label htmlFor="specialty">Specialty</label>
              <select name="specialty" id="specialty">
                <option value="dermatology">Dermatology</option>
                <option value="orthopedics">Orthopedics</option>
                <option value="neurology">Neurology</option>
                <option value="internal-medicine">Internal Medicine</option>
                <option value="pediatrics">Pediatrics</option>
                <option value="ophthalmology">Ophthalmology</option>
                <option value="gynecology">Obstetrics and Gynecology</option>
                <option value="cardiology">Cardiology</option>
                <option value="urology">Urology</option>
                <option value="radiology">Radiology</option>
              </select>
              <label htmlFor="phone">Phone Number</label>
              <div className={styles.phoneInput}>
                <input
                  id="countryCode"
                  name="countryCode"
                  className={styles.countryCode}
                  type="text"
                />
                <input id="phone" name="phone" type="text" />
              </div>
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" />
              <label htmlFor="password">Password</label>
              <input id="password" name="password" type="password" />
              <label htmlFor="category">Category</label>
              <select name="category" id="category">
                <option value="doctor">Doctor</option>
                <option value="pharmacy">Pharmacy</option>
                <option value="laboratory">Laboratory</option>
              </select>
              <button className={styles.btnNext} onClick={handleNext}>
                Next
              </button>
              <p>
                Already have an account?<Link to="/login">Login</Link>
              </p>
            </>
          )}
          {next === true && (
            <>
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
              <button
                type="submit"
                className={styles.btnSignup}
                onClick={handleSubmit}
              >
                Signup
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Signup;
