import React, { useContext, useEffect, useState } from "react";
import styles from "../styled/SignUp.module.css";
import juncture from "../assets/JunctureLogo.png";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { API_URL, fetchData, getMethod, postMethod } from "../utils/FetchMethod";
import axios from "axios";
import { useStore } from "../hooks/useStore";
import { Store } from "../Context/Store";

const SignUp = ({
  title,
  placeholder1,
  placeholder2,
  btn,
  back,
  backLink,
  loginError ,
  SignUpError
}) => {

  const  {pathname} = useLocation()
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [changePassword, setChangePassword] = useState("");

  const { user , Authtoken , dispatch} = useStore()
  
  const navigate = useNavigate();


  console.log(Authtoken)

  const handleSubmit =async (e) => {
    e.preventDefault();
    const userData = { username : userName,password : password };

    try {
      const response = await fetch('https://heinhtetnyi.pythonanywhere.com/auth/login/', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });


      const result = await response.json();

      if(response.status === 200){
        dispatch({ type:"LOGIN", payload: result.user })
        dispatch({type :"TOKEN" , payload: result.user.tokens})
      }else {
        setError("Something is wrong")
      }



    } catch (err) {
     console.log(err.message)
    
  };

   setUserName("")
    setPassword("");
  };



  const handleReset = (e) => {
    e.preventDefault();
    const resetData = { userName , password , changePassword}
    console.log(resetData);

  };

  return (
    <div className={styles.container}>
      <div>
        <img src={juncture} className={styles.img} alt="juncture" />

        <form
          onSubmit={pathname==='/login'? handleSubmit : handleReset}
          className={styles.wrapper}
        >
          <h3>{title}</h3>
          <input
            type="text"
            placeholder="UserName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder={placeholder1}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {placeholder2 && (
            <input
              type="text"
              placeholder={placeholder2}
              value={changePassword}
              onChange={(e) => setChangePassword(e.target.value)}
              required
            />
          )}

          <button className="jbtn">{btn}</button>

          <Link to={`${backLink}`}>
            <p>{back}</p>
          </Link>

          {error && (
            <p style={{ color: loginError? "red" : "green"   }}>
              {loginError ? loginError : SignUpError}
            </p>
          )}
         
        </form>
      </div>
    </div>
  );
};

export default SignUp;
