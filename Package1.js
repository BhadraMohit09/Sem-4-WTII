const e = require('express');
const fs = require('fs');
console.log(fs);
//Sychronized File System:
//P1
// fs.writeFileSync('myFle1.txt','This is a demo file...');
// fs.writeFileSync('myFile2.txt','This is a new file #2');
//P2
// const data = fs.readFileSync('myFle1.txt','utf-8');
// console.log(data);
//P3
// fs.appendFileSync('myFle1.txt','This is appended text...');
//P4
// fs.renameSync('myFle1.txt', 'myFile1.txt');
//P5
// fs.unlinkSync('myFile2.txt');
//P1
// fs.writeFile('myUFile1.txt','This is unsynchronized file...',(e) => {
//     if(e)
//     {
//         console.log("File couldnt be created..");
//     }
//     else{
//         console.log("File created successfully");
//     }
// });
//P2
// const data =  fs.readFile('myUFile1.txt','utf-8',(e, data) =>{
//     if(e)
//     {
//         console.log("File couldnt be read..");
//     }
//     else{
//         console.log(data);
//     }
// })
//P3
// fs.appendFile('myUFile1.txt','This is appended data', (e) =>{
//     if(e)
//     {
//         console.log("Couldnt append...");
//     }
//     else{
//         console.log("Appended the data...");
//     }
// })
//P4
// fs.rename('myUFile1.txt','UnSyncFile1.txt',(e) => {
//     if(e)
//     {
//         console.log("Rename not done!");
//     }
//     else{
//         console.log("Rename done!");
//     }
// });