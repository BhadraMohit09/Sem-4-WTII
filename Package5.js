const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

arr = [
        {
            id: 1,
            name: 'User1',
            salary: 30000
        },
        {
            id: 2,
            name: 'User2',
            salary: 60000
        },
        {
            id: 3,
            name: 'User3',
            salary: 40000
        }];
app.get('/student',(req, res)=>{
    res.json(arr);
})
app.get('/student/:id',(req, res)=>{
    res.send(arr.find((e)=>{
        if(e.id == req.params.id){
            return e;
        }
    }))
})

app.post('/student/:name/:salary',(req, res)=>{
    const userID = arr.length+1;
    const userName = req.params.name;
    const Salary = req.params.salary;
    const Result = {
        "id": userID,
        "name": userName,
        "salary": Salary
    }
    arr.push(Result)
    res.json(arr)
})

app.delete('/student/:id',(req, res)=>{
    const id = req.params.id; 
    const result = arr.find(result => result.id == id);
    if(result){
        arrN = arr.filter(result => result.id != id);
        res.json(arrN);
    }
    else{
        res.send("UnHandled Result...");
    }
})

app.patch('/student/:id/:name',(req, res)=>{
    const id = req.params.id;
    const name = req.params.name;
    const result = arr.find(result => result.id == id);
    if(result){
        arrN = arr.find(result =>{
            if(result.id == id){
                result.name = name;
            }
        });
        res.json(result);
    }
    else{
        res.send("Failed to Update...")
    }

})

app.use(bodyParser.urlencoded({extended: false}));

app.post('/data',(req, res)=>{
    const item = req.body;
    console.log(req.body);
    res.json(item);
})

app.post('/Personal/',(req, res)=>{
    const {Name, Age, City}=req.body;
    const Result = {
        'Name': Name,
        'Age' : Age,
        'City': City,
    };
    res.json(Result);
})


app.listen(3000,()=>{
    console.log("Server initialized...");
})