import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import signupImg from "./../../images/signup.png";
import { Link } from "react-router-dom";
import axios from "../../axiosConfig";

const Signup = () => {
  const [next, setNext] = useState(false);
  const [credentials, setCredentials] = useState({
    first_name: "",
    last_name: "",
    specialty: "",
    email: "",
    pass: "",
    address: "",
    phone_number: "",
    category: "",
    experience: "",
    work_time: "",
    description: "",
    certificate: "",
  });

  useEffect(() => {
    if (credentials.category === "pharmacy") {
      setCredentials((prevState) => ({
        ...prevState,
        specialty: "",
      }));
    }
  }, [credentials.category]);

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setCredentials((prevState) => ({
      ...prevState,
      category: category,
      specialty: category === "pharmacy" ? "" : prevState.specialty,
    }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setNext(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(credentials);
      const response = await axios.post(
        "/clinic/register",
        {
          first_name: credentials.first_name,
          last_name: credentials.last_name,
          specialty: credentials.specialty,
          email: credentials.email,
          phone_number: credentials.phone_number,
          pass: credentials.pass,
          category: credentials.category,
          img: credentials.certificate,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Register successful", response.data);
    } catch (error) {
      console.error("Register failed", error);
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
                      name="first_name"
                      value={credentials.first_name}
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
                    <input
                      id="last-name"
                      name="last_name"
                      value={credentials.last_name}
                      onChange={(e) =>
                        setCredentials({
                          ...credentials,
                          last_name: e.target.value,
                        })
                      }
                      type="text"
                    />
                  </div>
                </div>
                <label htmlFor="specialty">Specialty</label>
                <select
                  name="specialty"
                  id="specialty"
                  value={credentials.specialty}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      specialty: e.target.value,
                    })
                  }
                  disabled={credentials.category === "pharmacy"}
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
                <input
                  id="phone"
                  name="phone_number"
                  value={credentials.phone}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      phone_number: e.target.value,
                    })
                  }
                  type="text"
                />
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      email: e.target.value,
                    })
                  }
                  type="email"
                />
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  name="pass"
                  value={credentials.pass}
                  onChange={(e) =>
                    setCredentials({
                      ...credentials,
                      pass: e.target.value,
                    })
                  }
                  type="password"
                />
                <label htmlFor="category">Category</label>
                <select
                  name="category"
                  id="category"
                  value={credentials.category}
                  onChange={handleCategoryChange}
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
                <label htmlFor="certificate">
                  Professional Practice Certificate
                </label>
                <div className="certificateWrapper">
                  <img src="" alt="" />
                  <input
                    type="file"
                    id="certificate"
                    name="certificate"
                    value={credentials.certificate}
                    onChange={(e) =>
                      setCredentials({
                        ...credentials,
                        certificate: e.target.value,
                      })
                    }
                  />
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
