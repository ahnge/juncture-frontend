import React from "react";
import SignUp from "../Components/SignUp";
import WelcomePage from "../Components/WelcomePage";
import styles from "../styled/Login.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <WelcomePage />
      <SignUp
        title="Sign in here"
        placeholder1="Password"
        btn="Sign in"
        back="Reset Password"
        backLink="/resetPassword"
      handlesubmitFun='true'
      loginError="Your UserName and passwork is wrong"
      />
    </div>
  );
};

export default LoginPage;
