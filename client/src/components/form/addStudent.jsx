import React from 'react'
import "./addStudentStyles.css"

export const AddStudent = () => {
  return (
    <form action="" className="addStudentContainer">
        <label htmlFor="name"> Name:</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="gender"> Gender:</label>
        <input type="text" name="gender" id="gender"/>
        <label htmlFor="dni"> Identification document number:</label>
        <input type="number" name="dni" id="dni"/>
        <label htmlFor="cellphone"> Cellphone:</label>
        <input type="number" name="cellphone" id="cellphone"/>
        <button type='submit'>Add student</button>
    </form>
  )
}
