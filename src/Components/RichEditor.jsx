import React, { useState } from "react";
import MyStatefulEditor from "./rte_test";

export default function RichEditor({ setDescription , setEmail }) {
  const [val, setVal] = useState("");
  const handleChange = (value) => {
    setVal(value);
    setDescription(value);
    setEmail(value)
  };
  return (
    <div className="App mt-12">
      <h1 className="mb-4">Job Description</h1>
      <MyStatefulEditor markup="" onChange={handleChange} value="defa" />
      {/* <p dangerouslySetInnerHTML={{ __html: val }}></p> */}
      {/* <hr /> */}
      {/* <p>{val}</p> */}
    </div>
  );
}
