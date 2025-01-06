const express=require("express") 
const app=express()
const port=5500

app.use(function(req, res , next){
    next(); 
})

app.set("view engine" , "ejs")

app.use(express.static('./public')) // give the path where we can find the static files 

app.get("/",(req,res)=>{ 
    res.render("index")
})
app.get("/error",(req,res,next)=>{ 
    // new Error OR
    // throw new Error OR 
    throw Error("something went wrong")

})



// if we want to define all the static files we created, in public folder then we use static files thing
// lets say we want to link the style,css with the index.ejs ...so we can use static files method
// for static files setup... 
// 1)create folder named PublicKeyCredential2) create 3 folder inside it ...images, stylesheets, javascripts
// 3) configure the express static in index.js
// 4) understand the path


//errro handling
// create a error.ejs in views too
app.use("/error",(err,req,res,next)=>{ 
    if(res.headersSent){
        return next(err)
    }
    res.status(500)
    res.render('error' ,{error:err})
})


app.listen(port,()=>{
    console.log("server running successfully")
})

