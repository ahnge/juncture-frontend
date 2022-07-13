import React, { useEffect, useState } from "react";
import Select from "react-select";
import { API_URL, fetchData, postMethod } from "../utils/FetchMethod";
import { useNavigate } from "react-router-dom";
import RichEditor from "../Components/RichEditor";
import TincyEditor from "../Components/TincyEditor";
import axios from "axios";


const SkillCategories = [
  { value: "development", label: "development" , id:1 },
  { value: "design", label: "Design" , id : 2},
  { value: "sales", label: "Sales", id:3 },
  { value: "marketing", label: "Marketing" , id :4},
];

const JobPosting = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState("");
  const [education, setEducation] = useState("");
  const [loaction, setLocation] = useState("");
  const [type, setType] = useState("");
  const [skill, setSkill] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [description, setDescription] = useState("");
  const [benefit, setBenefit] = useState("");
  const [gender , setGender] = useState("")
  const [skillCateGory , setSkillCategory] = useState("")




  const handlePublish = async () => {
    const PostData = {
      role : jobTitle,
      edu_lvl :education,
      loaction,
      type,
      skills : skill.map((skill)=>skill.id),
      gender, 
      experience,
      salary,
      benefit,
      description,
    };

    console.log(PostData)

       try {
      const response = await fetch('http://127.0.0.1:8000/juncture/jobs/', {
        method: 'POST',
        body: JSON.stringify(PostData),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

      console.log(result)

    } catch (err) {
     console.log(err.message)
  };

  };



  return (
    <div className="h-screen">
      <div className="w-full px-20 flex flex-col justify-center shadow-md bg-gray-100 h-[3rem]">
        <h3 className="text-xl">Jobs &#62; Add new</h3>
      </div>

      <div className="w-[1200px] mx-auto mt-12  ">
        <h1 className="text-2xl font-semibold">
          What's the job you're hiring for?
        </h1>

        <input
          type="text"
          placeholder="Enter a new Job title"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          className="w-full  border-blue-100 text-xl mt-16 p-3 "
        />
        <div className="border border-solid border-t-2-primary"></div>

        {/* jon department and job type */}
        <div className="flex justify-between items-center mt-12 gap-8">
          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Education Level</h6>
            <select
              className="bg-white border border-solid w-full  p-2 rounded"
              onChange={(e) => setEducation(e.target.value)}
            >
              <option value="highSchoolGraduated">High School Graduated</option>
              <option value="graduated">Graduated</option>
            </select>
          </label>

          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Job type</h6>
            <select
              className="bg-white border border-solid w-full p-2 rounded"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="FT">full time</option>
              <option value="CT">contract</option>
              <option value="PT">part time</option>
            </select>
          </label>
        </div>

        {/* <RichEditor setDescription={setDescription}/> */}
        <TincyEditor setDescription={setDescription}/>
  

        <div className="flex justify-between items-center mt-12 gap-8">
          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Skills</h6>
            <Select
              isMulti
              options={SkillCategories}
              onChange={(options) => setSkill(options)}
            />
          </label>

          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Experience</h6>
            <select
              className="bg-white border border-solid w-full p-2 rounded"
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="fulltime">Entry Level</option>
              <option value="internship">Associate</option>
              <option value="contract">Mid senior</option>
              <option value="parttime">Senior</option>
            </select>
          </label>
        </div>

        <div className="flex justify-between items-center mt-12 gap-8">
          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Salary</h6>
            <input
              type="number"
              value={salary}
              placeholder="salary"
              onChange={(e) => setSalary(e.target.value)}
              className="border border-solid border-blue-200 p-3"
            />
          </label>

          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Benefit</h6>
            <textarea
              type="text"
              value={benefit}
              placeholder="benefit"
              onChange={(e) => setBenefit(e.target.value)}
              className="border border-solid border-blue-200 p-3 h-[5rem]"
            />
          </label>

          <label className="w-full flex-1">
            <h6 className="text-sm mb-4 font-bold">Gender</h6>
            <select
              className="bg-white border border-solid w-full p-2 rounded"
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="F">male</option>
              <option value="M">female</option>
             
            </select>
          </label>
        </div>
        <button
          className="my-28 p-2 bg-blue-200 text-xl px-4 rounded"
          onClick={handlePublish}
        >
          Publish
        </button>
      </div>
    </div>
  );
};

export default JobPosting;
