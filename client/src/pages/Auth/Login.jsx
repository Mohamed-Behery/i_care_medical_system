import React, { useState } from "react";
import styles from "./Auth.module.css";
import loginImg from "./../../images/login.png";
import { Link } from "react-router-dom";
import GoogleLogin from "react-google-login";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
            <GoogleLogin
              clientId="680554552772-nta47dvlgkcqoba9p78ce0ng16faaj64.apps.googleusercontent.com"
              buttonText="Continue with Google"
              cookiePolicy={"single_host_origin"}
            />
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
