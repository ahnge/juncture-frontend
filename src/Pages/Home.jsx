import React from "react";
import { Route, Routes } from "react-router-dom";
import EmailTemplate from "../Components/EmailTemplate";
import { useStore } from "../hooks/useStore";
import JobPosting from "./JobPosting";



const Home = () => {

  const { Authtoken} = useStore()

 console.log(Authtoken)


  return (
    <>
    <h1>Home Page</h1>
    {/* <p className="w-[200px]">{Authtoken.access}</p> */}
    </>
  );
};

export default Home;
