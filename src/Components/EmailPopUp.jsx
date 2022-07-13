import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { nameList } from "./EmailTemplate";
import Randomppl from "./Randomppl";
import RichEditor from "./RichEditor";
import TincyEditor from "./TincyEditor";

const EmailPopUp = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [email , setEmail ] = useState("")

  const handleSubmit = () => {
        console.log(email)
  }

  return (
    <div>
      {id && (
        <div className="flex gap-8 m-10 cursor-pointer">
          {nameList.map((name) => (
            <Link to={`${name.id}`} key={name.id}>
              <Randomppl name={name.name} key={name.id} />
            </Link>
          ))}
        </div>
      )}
      {nameList.map(
        (list) =>
          list.id == id && (
            <div
              className="bg-gray-200 p-5 w-[800px] mx-auto mt-[5rem]  rounded-md "
              key={list.id}
            >
              <div className="flex justify-between">
                <h3 className="text-xl">Edit Template</h3>
                <div
                  className="bg-gray-400 px-2 rounded cursor-pointer"
                  onClick={() => navigate("/emailTemplate")}
                >
                  X
                </div>
              </div>

              <h1 className="text-center text-xl">email for {list.name}</h1>

              <div className="mt-6">
                <input
                  type="text"
                  className="rounded block p-2 w-36 mb-4"
                  placeholder="Rejection(Msg)"
                />
                    <p className="font-bold text-xl">Email Subject</p>
                <div className="flex items-center mt-4 justify-between">
                  <div>
                    <select
                      className="w-50 bg-white p-2 rounded"
                      placeholder="Template Variable"
                    >
                      <option>Template Variable</option>
                    </select>
                  </div>
                  <div>
                 
                    <select
                      className="w-50 bg-white p-2 rounded"
                      placeholder="Template Variable"
                    >
                      <option>Template Variable</option>
                    </select>
                  </div>

                  <div>
        
                    <select
                      className="w-50 bg-white p-2 rounded"
                      placeholder="Template Variable"
                    >
                      <option>Template Variable</option>
                    </select>
                  </div>
                </div>
              </div>


              <div>
                  <TincyEditor setEmail={setEmail} name={list.name} />
              </div>
              <button className="mt-6 bg-blue-400 p-3 rounded" onClick={handleSubmit}>Add Document</button>
            </div>
          )
      )}
    </div>
  );
};

export default EmailPopUp;
