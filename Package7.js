const bodyParser = require('body-parser');
const express = require('express');

const app = express();

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: false}));

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

// function middleware(req, res, next)
// {
//     const {name, pass} = req.body;
//     if(name === 'User2' && pass === '12345')
//     {
//         next();
//     }
//     else{
//         res.send("Invalid credentials....");
//         // console.log("Invalid");
//     }
// }

app.get('/',(req, res)=>{
    res.json(arr);
})

app.post('/data/',(req, res)=>{
    const id = arr.length + 1;
    const {name,salary} = req.body;
    
    const newData = {
        "id": id,
        "name": name,
        "salary": salary
    }
    arr.push(newData);
    res.json(arr);
});

app.listen(3000,()=>{
    console.log("Server initialized....");
});

