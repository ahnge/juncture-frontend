import { Button } from "@mui/material";
import React, { useState } from "react";
import TincyEditor from "./TincyEditor";
import SendIcon from "@mui/icons-material/Send";


const Mail = ({ setShowMail }) => {
  const [template, setTemplate] = useState("");
  const [mail, setMail] = useState("");
  console.log(template)

  const handleSend = async () => {
  
    try {
      const res = await fetch(
        "https://heinhtetnyi.pythonanywhere.com/juncture/send-mail/",
        {
          method: "POST",
          body: JSON.stringify({
            name: [ "koseb" , "brian" , "hein"],
            to_email: ["kaungkhantnyar@gmail.com" , "kyawthant035@gmail.com" , "to.72.72.78.111@gmail.com"],
            company: "Juncture",
            email_type: `${template}`,
          }),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      const result = await res.json();

      console.log(result);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <div className="bg-gray-300 absolute w-[30rem]  top-[6rem] left-[70rem] p-5 rounded">
        <div className="flex justify-between">
          <h1 className="text-lg">Email Tempalte </h1>
          <button
            onClick={() => setShowMail(false)}
            className=" bg-red-500 px-2 rounded text-white"
          >
            X
          </button>
        </div>

        <select
          className="mt-8 p-2 rounded"
          onClick={(e) => setTemplate(e.target.value)}
        >
          <option value="offer">Offer</option>
          <option value="reject">Reject</option>
        </select>

        <TincyEditor setEmail={setMail} />
        <div className="flex justify-end">
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            startIcon={<SendIcon />}
            onClick={handleSend}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mail;
