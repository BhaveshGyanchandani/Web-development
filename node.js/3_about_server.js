// in order to launch/use an module we need to import that module .. for this we use require('os');
//require('os') 
//we will import the module name os(operating system)
//the os module is used to get the details about the operating system
// but we need to declare this module in a variable so we will use const var_name so that it doesnt change 


const my_os=require('os') ;
console.log(my_os.type()); // it will give the tyoe if operating system i am using i.e windows
console.log(my_os.version());
console.log(my_os.freemem());
console.log(my_os.cpus());


//path module provides a way of working with the file by giving path of file and etc
const my_path=require('path');
console.log(my_path.dirname(__filename)); // it will provide the pathh of file w e are working operating
console.log(my_path.parse(__filename)); 


// the file system is used to manaage a file by creating, updating and deleting it (the files ) and etc

// we can access it by "fs"(file systen) module....example file.txt

const my_fs=require('fs');
const { Server } = require('http');
my_fs.readFile("E:\\web development\\node.js\\4_file.txt",'utf-8',(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data);
        }
})

//this my_fs.readFile("4_file.txt", " utf-8",(err,data)=>{()} is a method that takes 3 arguments at maximum in js just like other methods in js
// var_name_method_name_arguments(3 maximum)
// if.e  file name(path of file with file name with "\\") , decoding type i.e utf-8 or text transformation type , and if else arrow funtion (but here we hve it in arrow function ()= )
// this arrow funciton is having 2 arguments in it that is error ( err ) and data


// to create a file 

// my_fs.writeFile("4_2_s26.txt",'utf-8',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log("file created sucessfully !!!!");
//     }
// })

// thos file is created in web dev not in node.js...

// we can add content in the file as
// 

const content="hello there !!"

my_fs.writeFile("E:\\web development\\node.js\\4_file.txt ",content , (err,data)=>{
    if(err){
                console.log(err);
            }
            else{
                console.log("file data updated sucessfully !!!!");
            }
})

// renaming of the file
my_fs.rename("E:\\web development\\node.js\\4_file.txt ","4_changed.txt" , (err,data)=>{
    if(err){
                console.log(err);
            }
            else{
                console.log("file renamed sucessfully !!!!");
            }
})

///to delete the file we use unlink

my_fs.unlink("E:\\web development\\node.js\\4_2_file.txt " , (err,data)=>{
    if(err){
                console.log(err);
            }
            else{
                console.log("file renamed sucessfully !!!!");
            }
})

// fs module is used to perform CRUD operations


// http module ....hyper text transfer protocol module....a client server communication module

// we will made a request to the Server ( HTTP server ) and then will make a response to us(HTTP client)

 