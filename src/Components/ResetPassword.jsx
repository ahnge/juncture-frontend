import React from "react";
import LoginPage from "../Pages/LoginPage";
import SignUp from "./SignUp";

const ResetPassword = () => {
  return (
    <div>
      <SignUp
        title="Reset your Password here"
        placeholder1="Current Password"
        placeholder2="New password"
        btn="Reset Password"
        back="Back to Login"
        backLink="/login"
        handleResetFun = "true"
        SignUpError="Reset Password Successful"
      />
    </div>
  );
};

export default ResetPassword;
