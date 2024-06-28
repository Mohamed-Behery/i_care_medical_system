import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import signupImg from "./../../images/signup.png";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";

const Signup = () => {
  const [next, setNext] = useState(false);
  const [credentials, setCredentials] = useState({
    firstName: "",
    lastName: "",
    specialty: "",
    phone: "",
    countryCode: "",
    email: "",
    password: "",
    category: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    if (credentials.category === "pharmacy") {
      setCredentials((prevState) => ({
        ...prevState,
        specialty: "",
      }));
    }
  }, [credentials.category]);

  const handleNext = (e) => {
    e.preventDefault();
    setNext(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const response = await axios.post(
        "https://icare48.000webhostapp.com/api/clinic/signup",
        {
          first_name: credentials.firstName,
          last_name: credentials.lastName,
          specialty: credentials.specialty,
          phone: credentials.phone,
          countryCode: credentials.countryCode,
          email: credentials.email,
          password: credentials.password,
          category: credentials.category,
          country: credentials.country,
          city: credentials.city,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Signup successful", response.data);
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <div className={styles.signupContainer}>
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
                    <input
                      id="first-name"
                      name="first-name"
                      value={credentials.firstName}
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          first_name: e.target.value,
                        })
                      }
                      type="text"
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name">Last Name</label> <br />
                    <input id="last-name" name="last-name" type="text" />
                  </div>
                </div>
                <label htmlFor="specialty">Specialty</label>
                <select
                  name="specialty"
                  id="specialty"
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      specialty: e.target.value,
                    })
                  }
                  disabled={credentials.category === "Pharmacy"}
                >
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
                <select
                  name="category"
                  id="category"
                  value={credentials.category}
                  onChange={(e) =>
                    setCredentials({ ...credentials, category: e.target.value })
                  }
                >
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
                <input type="text" id="address" />
                <label htmlFor="experience">Experience</label>
                <input type="text" name="experience" id="experience" />
                <label htmlFor="work-time">Work Time</label>
                <input type="text" name="work-time" id="work-time" />
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />
                <label htmlFor="certificate">
                  Professional Practice Certificate
                </label>
                <div className="certificateWrapper">
                  <input type="file" id="certificate" />
                  <p>
                    If the certificate is forged, You will be <br /> subjected
                    to legal accountability.
                  </p>
                </div>
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
    </div>
  );
};

export default Signup;
