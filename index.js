// create mongo db database 
// mongodb student databse id, name, array of courses
// Api for the retrival of data
// insert operation 
// delete operation 



const express = require("express");
const app = express();

const Port = 8080;
const mongo = require("./DB/db");


app.use('/student/', require('./Router/Student_Router'))

app.listen(Port, ()=>{
    console.log("Server is started at : "+ Port);
})
