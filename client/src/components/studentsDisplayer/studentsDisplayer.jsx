import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./studentsDisplayerStyles.css";

export const StudentDisplayer = ({ sendList, updateInfo, deleteStudent }) => {

  return (
    <table>
      <thead>
        <tr>
          <td>Id</td>
          <td>Name</td>
          <td>Gender</td>
          <td>School</td>
          <td>Cellphone</td>
          <td>Actions</td>
        </tr>
      </thead>
      <tbody>
        {sendList.map((student, index) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.gender}</td>
            <td>{student.school}</td>
            <td>{student.cellphone}</td>
            <td className="tdButtonsContainer">
              <div>
                <button onClick={()=> updateInfo(student.id)} className="updateButton">Update</button>
                <button className="deleteButton" onClick={()=> deleteStudent(student.id)}>Delete</button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
