const fs = require('fs');
const http = require('http');
const eventemiter = require('events');
let variable = 0;
const myEvent = new eventemiter();
myEvent.on('increment',()=>{
    variable++;
    console.log(variable);
})
const server =  http.createServer((req,res)=>{
    let url = req.url;
    let method = req.method;
    if(req.url === '/' || req.url === '/home')
    {
        myEvent.emit('increment');
        let data = fs.readFileSync('home.html','utf-8');
        res.write("<a href='about'>About us</a> <br>");
        res.write("<a href='contact'>Contact us</a>");
        res.write(data);
        res.end();
    }
    else if(req.url === '/about')
    {
        myEvent.emit('increment');
        let data = fs.readFileSync('about.html','utf-8') 
        res.write("<a href='/home'>Home</a>");
        res.write(data);
        res.end();
    }
    else if(req.url === '/contact')
    {
        myEvent.emit('increment');
        let data = fs.readFileSync('contact.html','utf-8')
        res.write("<a href='/home'>Home</a>");
        res.write(data);
        res.end();
    }
    console.log("Method is: ", method);
    if(method==="POST")
    {
        console.log("POST METHOD");
    }
    else if(method==="PUT")
    {
        console.log("PUT METHOD");
    }
    else if(method==="DELETE")
    {
        console.log("DELETED");
    }
})

server.listen(3000,()=>{
    console.log("Server is running...");
});