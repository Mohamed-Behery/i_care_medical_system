import React, { useEffect, useState } from "react";
import styles from "./Auth.module.css";
import loginImg from "./../../images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = ({ onGoogleLogin, isLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/profile");
  };

  const handleSuccess = (response) => {
    if (response) {
      const decoded = jwtDecode(response?.credential);
      localStorage.setItem("token", response.credential);
      if (onGoogleLogin) {
        onGoogleLogin(decoded);
      }
      // navigate("/profile", { replace: true });
      // console.log("Google login success:", decoded);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate.push("/profile", { replace: true });
    }
  }, [isLoggedIn, navigate]);

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
            <input id="email" name="email" type="email" />
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
