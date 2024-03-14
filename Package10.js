const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const faculty = require('./model/faculty');

const connectionString = "mongodb+srv://23010101605:mohit123@cluster0.pbnz1h4.mongodb.net/Contact";
        
mongoose.connect(connectionString).then(()=>{
    const app = express();

    console.log("Connection Established..");

    app.get('/', async(req,res)=>{
        const result = await faculty.find();
        res.json(result);
    });

    app.get('/:id', async(req,res)=>{
        const result = await faculty.findOne({id: req.params.id});
        res.json(result);
    })

    app.post('/', async(req,res)=>{
        const f1 = new faculty();
        const result = f1.save();
        res.json(result);
    });

    app.delete('/:id', async(req,res)=>{
        const result = await faculty.deleteOne({id: req.params.id});
        res.json(result);
    });

    app.patch('/:id', async(req,res)=>{
        const result = await faculty.findOneAndUpdate({id: req.params.id}, req.body);
        res.json(result);
    });

    app.listen(3000,()=>{
        console.log("Server Initialised...");
    });
});