const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"students"
})

app.post("/create",(req,res)=>{
    const name = req.body.name;
    const gender = req.body.gender;
    const school = req.body.school;
    const cellphone = req.body.cellphone;

    db.query("INSERT INTO students(name,gender,school,cellphone) VALUES(?,?,?,?,?)",[name,gender,school,cellphone],
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send("student registered succesfully!")
        } 
    })
})

app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})