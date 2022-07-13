import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Juncture from "../assets/JunctureLogo.png";
import { useStore } from "../hooks/useStore";

const list = [
  { tag : "+Job Posting",
    link : "/jobPosting"
  },
  { tag : "Email Template",
    link : "/emailTemplate"
  },{
    tag : "Search",
    link : '/search'
  }
]




const Navbar = () => {
    const navigate = useNavigate();
  const {  dispatch } = useStore();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    console.log("Logout")
    navigate('/login')

  };
  return (
    <div className=" mx-auto  shadow ">
      <nav className="container mx-auto flex justify-between items-center ">
        <div className="flex  items-center">
            <Link to="/">
          <img src={Juncture} className="w-20" alt="" />
            </Link>
          <h1 className="text-2xl text-uppercase">Juncture</h1>
        </div>
        <div className="flex justify-between gap-4 text-xl">
          {list.map((li) => (
            <Link to={li.link} key={li.tag}>
              <div className="bg-cyan-400 hover:bg-cyan-300 p-2 px-4 rounded-lg text-white cursor-pointer">
                {li.tag}
              </div>
            </Link>
          ))}

          <button
            className="bg-red-600 p-3 rounded text-white text-xl px-6 hover:bg-red-500"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
