const express = require('express');

const app = express();

app.get('/',(req,res, next)=>{
    res.send("Inside the GET....");
    next();
})

app.get('/',(req,res)=>{
    console.log("New Home...")
})
app.get('/about',(req,res)=>{
    res.send("Inside GET About....");
})

app.get('/contact',(req, res)=>{
    res.send("Inside GET Contact....")
})

app.listen(3000,()=>{
    console.log("Server initialised...");
})