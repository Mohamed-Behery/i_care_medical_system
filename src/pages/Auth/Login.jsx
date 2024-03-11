import React, { useState } from "react";
import styles from "./Auth.module.css";
import loginImg from "./../../images/login.png";
import { Link } from "react-router-dom";
// import {
//   GoogleLogin,
//   GoogleOAuthProvider,
//   useGoogleOAuth,
// } from "@react-oauth/google";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = (onGoogleLogin) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [user, setUser] = useState(null);
  // const { isSignedIn, setIsSignedIn } = useGoogleOAuth();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // const handleSuccess = (response) => {
  //   setUser(response.profileObj);
  // };

  // const handleError = (error) => {
  //   console.error("Google login error:", error);
  // };

  return (
    // <GoogleOAuthProvider clientId="680554552772-nta47dvlgkcqoba9p78ce0ng16faaj64.apps.googleusercontent.com">
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
            {/* {isSignedIn || user ? (
                <div>
                  <p>Name: {setIsSignedIn.name}</p>
                  <p>Email: {setIsSignedIn.email}</p>
                </div>
              ) : (
                <GoogleLogin
                  onSuccess={handleSuccess}
                  onFailure={handleError}
                  buttonText="Login with Google"
                />
              )} */}
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
    // </GoogleOAuthProvider>
  );
};

export default Login;
