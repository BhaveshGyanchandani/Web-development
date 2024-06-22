// do npm init -y to start the npm in the commmand prompt

//and do npm i express nodemon in terminal to install nodemon package manager

// we are doing it to connect express.js to node.js

// do then npm init -y and then npm init in terminal

// using it we wil get package.json and packahe-Lock.json file but we have only package.json file

//add  "start":"nodemon ex.js" in package.json

// express js is an framework for nodejs 
//lightweight and minimalist
//provides boilerplates structure and organization for ur web apps


const express=require("express")
const app=express()
const port=5500
app.get("/apple",(req,res)=>{ // we can use request and response
    //it means we need to give localhost:5500/apple    to get this Apple is of red color 
    res.send("Apple is of red color") // it will print on the browser on the client side
})
app.listen(port,()=>{
    console.log("server running successfully")
})

// now we can run in localhost:5500
//even after cahnging something here it will change things here as well as run in console 
//means we dont need to restart everytime when something changed


// this /apple is called routing

//middleware is something in b/w client and server...the request and response reaches middleware before going to client or server