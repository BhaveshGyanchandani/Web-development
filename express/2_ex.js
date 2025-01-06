const express=require("express") 
const app=express()
const port=5500

app.use(function(req, res , next){
    next(); 
})

app.get("/",(req,res)=>{ 
    
    res.send("its a start")
})

app.get("/apple",(req,res)=>{ 
  
    res.send("Apple is of red color") 
})


app.get('/home',(req,res)=>{
   
    res.send("This is our Home") 
})

app.get("/home/:username",(req,res)=>{
   
    // res.send(`Hello from ${req.params.username}`) 
    res.send("Hello from " + req.params.username)
})
// so instad of creatinf so many .get for every /home/watch , /home/sales etc we can create a dynamic type of this ..../home/{paramter}
//we can do by....../home/:username.......means in place of username there can be anything and it will work.....
// apn username ki jgh a , b, etc kuch bhi paramater ka naam daaal skte hai.....ye :username ko hum params bolte hai.....aur params ki value humesha "req" mein milegi kyuki yeh apn khud req ke form meoin bhej rhe hai to sever

//setup ejs.....
// 1) ejs intall--> npm i ejs
// 2)configure ejs- app.set("view engine" ,"ejs");
// 3) create a folder named "views"
// 4)create a file with .ejs extension having html Code
// 5)change send with render...and then put name of the file in the views folder without extension i.e .ejs

app.listen(port,()=>{
    console.log("server running successfully")
})

