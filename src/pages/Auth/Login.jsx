import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import loginImg from "./../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode"; // الاستيراد الصحيح
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "../../axiosConfig";

const Login = ({ userData, setUserData, isLoggedIn, setIsLoggedIn }) => {
  const [credentials, setCredentials] = useState({
    email: "",
    pass: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Sending request with credentials:", credentials);
      const response = await axios.post(
        "https://icare48.000webhostapp.com/api/clinic/login",
        {
          email: credentials.email,
          pass: credentials.pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      const decoded = jwtDecode(data.token);
      localStorage.setItem("token", data.token);
      setUserData(decoded);
      setIsLoggedIn(true);
      console.log("Login Successful:", response.data);
      navigate("/home", { replace: true });
    } catch (error) {
      if (error.response) {
        console.error("Error response data:", error.response.data);
        console.error("Error response status:", error.response.status);
        console.error("Error response headers:", error.response.headers);
      } else if (error.request) {
        console.error("Error request:", error.request);
      } else {
        console.error("Error message:", error.message);
      }
      console.error("Login failed", error.config);
    }
  };

  const handleSuccess = (response) => {
    if (response) {
      const decoded = jwtDecode(response?.credential);
      localStorage.setItem("token", response.credential);
      setUserData(decoded);
      setIsLoggedIn(true);
      navigate("/home", { replace: true });
    }
  };

  useEffect(() => {
    if (isLoggedIn && userData) {
      navigate("/home", { replace: true });
    }
  }, [isLoggedIn, userData, navigate]);

  const handleError = (error) => {
    console.error("Google login error:", error);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.login}>
        <div className={styles.left}>
          <form>
            <h3>Login</h3>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={credentials.email}
              onChange={(e) =>
                setCredentials({ ...credentials, email: e.target.value })
              }
            />
            <div className={styles.passwordContainer}>
              <input
                id="password"
                name="pass"
                value={credentials.pass}
                onChange={(e) =>
                  setCredentials({ ...credentials, pass: e.target.value })
                }
                type={showPassword ? "text" : "password"}
              />
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                onClick={togglePasswordVisibility}
                className={styles.passwordToggle}
              />
            </div>
            <div className={styles.loginFeatures}>
              <div>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <Link className={styles.forgot}>Forgot Password?</Link>
            </div>
            <button
              type="submit"
              className={styles.btnLogin}
              onClick={handleSubmit}
            >
              Login
            </button>
            <div className={styles.btnGoogle}>
              <GoogleLogin
                onSuccess={handleSuccess}
                onFailure={handleError}
                buttonText="Login with Google"
                cookiePolicy={"single_host_origin"}
              />
            </div>
            <p>
              Don't have an account?<Link to="/signup">Signup</Link>
            </p>
          </form>
        </div>
        <div className={styles.right}>
          <img src={loginImg} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
