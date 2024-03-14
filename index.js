const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

items = [
    {
        id: 101,
        name: 'User1'
    },
    {
        id: 102,
        name: 'User1'
    },
    {
        id: 103,
        name: 'User1'
    },
    {
        id: 104,
        name: 'User1'
    }
];

app.get('/',(req, res)=>{
    res.json(items);
});

app.post('/',(req,res)=>{
    const newItem = req.body;
    items.push(newItem);
    res.json(items);
});

app.delete('/:id',(req, res)=>{
    const id = req.params.id;
    const result = items.find(result => result.id == id);
    if(result){
        arrN = items.filter(result => result.id != id);
        res.json(arrN);
    }
    else{
        res.send("Cannot Delete");
    }
});

app.patch('/:id',(req, res)=>{
    const id = req.params.id;
    const name = req.body;
    const result = items.find(result=> result.id == id);
    if(result){
        arrN = items.find(result =>{
            if(result.id == id){
                result.name = name;
            }
        });
        res.json(result);
    }
    else{
        res.send("Unable");
    }
});

app.listen(3000,()=>{
    console.log("Server initialised...");
});