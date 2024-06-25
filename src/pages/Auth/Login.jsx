import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import loginImg from "./../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import api from "../../ApiConnection";

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
      const response = await api.post("/login", credentials);
      const decoded = jwtDecode(response?.credential);
      localStorage.setItem("token", response.credential);
      setUserData(decoded);
      setIsLoggedIn(true);
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login failed", error);
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
                name="password"
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
