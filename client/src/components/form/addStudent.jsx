import React,{useState} from 'react';
import "./addStudentStyles.css";
import Axios from "axios";

export const AddStudent = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState(0)
    const [cellphone, setCellphone] = useState(0)

    const registerStudent = () => {
        Axios.post("http://localhost:3001/create",{
            name:name,
            gender:gender,
            school:school,
            cellphone:cellphone
        }).then(()=>{
            alert("student registered!");
        })
    }

  return (
    <form onSubmit={registerStudent} className="addStudentContainer">
        <label htmlFor="name"> Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="gender"> Gender:</label>
        <input type="text" name="gender" id="gender"/>
        <label htmlFor="school"> School:</label>
        <input type="number" name="school" id="dni"/>
        <label htmlFor="cellphone"> Cellphone:</label>
        <input type="number" name="cellphone" id="cellphone"/>
        <button type='submit'>Add student</button>
    </form>
  )
}
