import './App.css';
import { AddStudent } from './components/form/addStudent';
import { StudentDisplayer } from './components/studentsDisplayer/studentsDisplayer';
import { useState,useEffect } from 'react';
import Axios from "axios";


function App() {
  const [getStudentsList, setGetStudentsList] = useState([])


  const getStudents = () => {
    Axios.get("http://localhost:3001/students").then((response)=>{
      setGetStudentsList(response.data)
    })
}

useEffect(() => {
  getStudents()
}, [getStudentsList])

  return (
    <div className="App">
      <AddStudent updateList={getStudents} />
      <StudentDisplayer sendList = {getStudentsList} />
    </div>
  );
}

export default App;
