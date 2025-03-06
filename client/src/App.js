import './App.css';
import { AddStudent } from './components/form/addStudent';
import { StudentDisplayer } from './components/studentsDisplayer/studentsDisplayer';
import { useState,useEffect } from 'react';
import Axios from "axios";


function App() {
  const [getStudentsList, setGetStudentsList] = useState([])
  const [updatedStudent, setUpdatedStudent] = useState({})
  const [edit, setEdit] = useState(false)

  const getStudents = () => {
    Axios.get("http://localhost:3001/students").then((response)=>{
      setGetStudentsList(response.data)
    })
}

const editInfo = (id) => {
  setUpdatedStudent( getStudentsList.find(student => student.id === id))
  console.log(updatedStudent)
  setEdit(true)
}

const cancelEdit = () => {
  setEdit(false)
}

const deleteStudent = (id) => {
  Axios.delete(`http://localhost:3001/delete/${id}`).then(() => {
    alert("student deleted!");
  });
};

useEffect(() => {
  getStudents()
}, [getStudentsList])

  return (
    <div className="App">
      <AddStudent updateList={getStudents} getStudentForUpdate = {updatedStudent} setEdit={edit} cancelEdit={cancelEdit}/>
      <StudentDisplayer sendList = {getStudentsList} updateInfo = {editInfo} deleteStudent={deleteStudent}/>
    </div>
  );
}

export default App;
