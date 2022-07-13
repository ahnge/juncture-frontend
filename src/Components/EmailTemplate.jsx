import React, { useState } from "react";
import { Link } from "react-router-dom";
import EmailPopUp from "./EmailPopUp";
import Randomppl from "./Randomppl";

export const nameList = [
  {
    name: "kyaw Kyaw",
    id: 1,
  },
  {
    name: "mg mg",
    id: 2,
  },
  {
    name: "tun tun",
    id: 3,
  },
  {
    name: "zay zay",
    id: 4,
  },
  {
    name: "mg zaw",
    id:5,
  },
];

const EmailTemplate = () => {

  return (
    <div>
      <div className="flex gap-8 m-10 cursor-pointer">
        {nameList.map((name) => (
          <Link to={`${name.id}`} key={name.id}>
            <Randomppl name={name.name} key={name.id} />
          </Link>
        ))}
      </div>

      <EmailPopUp  />



     
    </div>
  );
};

export default EmailTemplate;