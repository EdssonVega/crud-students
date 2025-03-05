import React,{useState} from 'react'
import "./addStudentStyles.css"

export const AddStudent = () => {
    const [name, setName] = useState("")
    const [gender, setGender] = useState("")
    const [school, setSchool] = useState(0)
    const [cellphone, setCellphone] = useState(0)

  return (
    <form action="" className="addStudentContainer">
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
