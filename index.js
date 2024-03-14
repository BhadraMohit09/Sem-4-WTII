const express = require('express');
const app = express();

const fileA = require('./fileA');
const fileB = require('./fileB');

app.use('/', fileA=>{
    console.log("Inside File A");
})

app.use('/', fileB=>{
    console.log("Inside File B");
})

app.listen(3000,()=>{
    console.log("...");
})
