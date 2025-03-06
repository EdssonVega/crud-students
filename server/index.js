const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"studentscrud"
})

app.post("/create",(req,res)=>{
    const name = req.body.name;
    const gender = req.body.gender;
    const school = req.body.school;
    const cellphone = req.body.cellphone;

    db.query("INSERT INTO students(name,gender,school,cellphone) VALUES(?,?,?,?)",[name,gender,school,cellphone],
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        } 
    })
})

app.get("/students",(req,res)=>{

    db.query("SELECT * FROM students",
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        } 
    })
})

app.put("/update",(req,res)=>{
    const id = req.body.id;
    const name = req.body.name;
    const gender = req.body.gender;
    const school = req.body.school;
    const cellphone = req.body.cellphone;

    db.query("UPDATE students SET name=?,gender=?,school=?,cellphone=? WHERE id=?",[name,gender,school,cellphone,id],
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        } 
    })
})

app.delete("/delete/:id",(req,res)=>{
    const id = req.params.id;

    db.query("DELETE FROM students WHERE id=?",id,
    (err,result)=>{
        if (err) {
            console.log(err);
        }else{
            res.send(result)
        } 
    })
})


app.listen(3001,()=>{
    console.log("Corriendo en el puerto 3001")
})