import React,{useState} from 'react';
import "./addStudentStyles.css";
import Axios from "axios";

export const AddStudent = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState(0)
    const [cellphone, setCellphone] = useState(0)

    const setInfo = (infoType,event) => {
        infoType(event.target.value)
    }

    const registerStudent = (e) => {
        e.preventDefault()
        console.log(`${name},${gender},${school},${cellphone}`)
        /*
        Axios.post("http://localhost:3001/create",{
            name:name,
            gender:gender,
            school:school,
            cellphone:cellphone
        }).then(()=>{
            alert("student registered!");
        })*/
    }


  return (
    <form onSubmit={registerStudent} className="addStudentContainer">
        <label htmlFor="name"> Name:</label>
        <input type="text" name="name" id="name" onChange={(event)=> setInfo(setName,event)}/>
        <label htmlFor="gender"> Gender:</label>
        <input type="text" name="gender" id="gender" onChange={(event)=> setInfo(setGender,event)}/>
        <label htmlFor="school"> School:</label>
        <input type="text" name="school" id="school" onChange={(event)=> setInfo(setSchool,event)}/>
        <label htmlFor="cellphone"> Cellphone:</label>
        <input type="number" name="cellphone" id="cellphone" onChange={(event)=> setInfo(setCellphone,event)}/>
        <button type='submit'>Add student</button>
    </form>
  )
}
