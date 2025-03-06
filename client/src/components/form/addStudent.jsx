import React, { useState } from "react";
import "./addStudentStyles.css";
import Axios from "axios";

export const AddStudent = ({updateList}) => {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [school, setSchool] = useState(0);
  const [cellphone, setCellphone] = useState(0);

  const setInfo = (infoType, event) => {
    infoType(event.target.value);
  };

  const clearFields = () => {
    setName("")
    setGender("")
    setSchool("")
    setCellphone("")
  }

  const registerStudent = () => {
    console.log(`${name},${gender},${school},${cellphone}`);
    Axios.post("http://localhost:3001/create", {
      name: name,
      gender: gender,
      school: school,
      cellphone: cellphone,
    }).then(() => {
      alert("student registered!");
    });
    updateList()
    clearFields()
  };

  return (
    <div className="addStudentContainer">
      <h1>STUDENT MANAGEMENT</h1>
      <div className="inputsContainer">
        <label htmlFor="name"> Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="Enter a name..."
          onChange={(event) => setInfo(setName, event)}
        />
      </div>
      <div className="inputsContainer">
        <label htmlFor="gender"> Gender:</label>
        <input
          type="text"
          id="gender"
          value={gender}
          placeholder="Enter a gender..."
          onChange={(event) => setInfo(setGender, event)}
        />
      </div>
      <div className="inputsContainer">
        <label htmlFor="school"> School:</label>
        <input
          type="text"
          id="school"
          value={school}
          placeholder="Enter a school..."
          onChange={(event) => setInfo(setSchool, event)}
        />
      </div>
      <div className="inputsContainer">
        <label htmlFor="cellphone"> Cellphone:</label>
        <input
          type="number"
          id="cellphone"
          value={cellphone}
          placeholder="Enter a cellphone..."
          onChange={(event) => setInfo(setCellphone, event)}
        />
      </div>
      <div className="divButtonContainer">
      <button type="button" onClick={registerStudent}>
        Add student
      </button>
      </div>
      
    </div>
  );
};
