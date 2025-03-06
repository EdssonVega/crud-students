import Axios from "axios";
import React,{useState,useEffect} from 'react'
import "./studentsDisplayerStyles.css"

export const StudentDisplayer = ({sendList}) => {

  return (
    <table>
        <thead>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Gender</td>
                <td>School</td>
                <td>Cellphone</td>
            </tr>
        </thead>
        <tbody>
            {
                sendList.map((student,index)=>(
                    <tr key={student.id}>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.gender}</td>
                        <td>{student.school}</td>
                        <td>{student.cellphone}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

