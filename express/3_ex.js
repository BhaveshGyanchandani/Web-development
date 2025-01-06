const express=require("express") 
const app=express()
const port=5500

app.use(function(req, res , next){
    next(); 
})

app.set("view engine" , "ejs")

app.get("/",(req,res)=>{ 
    
    res.render("index")
})

app.get("/contact",(req,res)=>{ 
    
    res.render("contact" ,{age:12}) //jha bhi age hoga in <%= age %> wha pe 12 aa jayega in contact.ejs file in web browser
})

// template engine like ejs ye ek style of markup se convert krrke aapko html dete hai
//setup ejs.....
// 1) ejs intall--> npm i ejs
// 2)configure ejs- app.set("view engine" ,"ejs");
// 3) create a folder named "views"
// 4)create a file with .ejs extension having html Code
// 5)change send with render...and then put name of the file in the views folder without extension i.e .ejs
// .ejs mein joh HTML likhte hai woh basically HTML nhi hai blki yeh HTML jaisa dikha hai....like jsx mein JS + XML
//this ejs code is then converted into HTML by ejs engine.....
//there are many other template engines like ejs



app.listen(port,()=>{
    console.log("server running successfully")
})

