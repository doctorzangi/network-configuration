import React from "react";
import styles from './login.module.css'
import wlan from '../../resources/_46feea69-5c6e-487f-ad32-0f837f8815da.jpeg'

const Login = () => {
  return (
    <div className={styles.main}>
      <img src={wlan} alt="loginImage" className={styles.image} />
      <form className={styles.LogIn} method="post">
        <div className={styles.email}>
          <p>Email</p>
          <input type="text" placeholder="abc@gmail.com" id="username" />
          <div className={styles.emailError}>Please enter a correct email</div>
        </div>
        <div className={styles.Password}>
          <p>Password</p>
          <input type="password" placeholder="Password" id="password" />
          <div className={styles.passError}>Please enter a correct password</div>
        </div>
        <button onclick="login()">Log In</button>
        <div className={styles.account}>
          <p>Don't have any account?</p>
          <a href="#">Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
