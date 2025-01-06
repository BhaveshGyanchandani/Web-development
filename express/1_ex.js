// do npm init -y to start the npm in the commmand prompt

//and do npm i express nodemon in terminal to install nodemon package manager

// we are doing it to connect express.js to node.js

// do then npm init -y and then npm init in terminal

// using it we wil get package.json and packahe-Lock.json file but we have only package.json file

//add  "start":"nodemon ex.js" in package.json

// express js is an framework for nodejs 
//lightweight and minimalist
//provides boilerplates structure and organization for ur web apps


const express=require("express") // require se express nikl ke express const mein aa gya
const app=express() // ab express variable ko run kiya ......mtlb ab joh express kr skta hai woh app bhi kr skta hai
const port=5500

//create a middleware....

app.use(function(req, res , next){
    next(); //imortant see next 4 commented line....to push control to next middleware.....means agr url mein /apple likhenge toh next() ki wjh se  /apple pr jayega.....agr next() nhi likhenge toh bs load hota hua dikhega pr load nhi hoga......
})

// .use is used to create the middleware ...app.it willl have a function ... tht function will take 3 things, ....request , response , and next....
// request req contains the user's data sended to server.....we can see using console.log(req)....the response res contains all the servver's data when it give us its response....
// res mein basically control hote hai jinke basis pe him server se response bhej paate hai,,,,



// agr ek baar control kisi bhi middleware ke paas gya toh uske baad woh control apne aap se kisi dusre middleware ke paas nhi jaa skta.....so control ko next middleware ke bhejne ke liye humko "push" krna pdega.....ye "push" khleyaga next ko chlana......next()

app.get("/",(req,res)=>{ // '/' is the first webpage that opens when we open or run the server
    
    res.send("its a start")
})


app.get("/apple",(req,res)=>{ // we can use request and response
    //it means we need to give localhost:5500/apple    to get this Apple is of red color 
    res.send("Apple is of red color") // it will print on the browser on the client side

    // so to be clear , we send our req as '/' or /apple and then server sends us its response using res.send() ....so thats how it works....

})
// this is how we create a router 

app.get('/Home',(req,res)=>{ // we can use request and response
    //it means we need to give localhost:5500/apple    to get this Apple is of red color 
    res.send("This is our Home") // it will print on the browser on the client side
})


app.listen(port,()=>{
    console.log("server running successfully")
})

//npx nodemon './1_ex.js'

// now we can run in localhost:5500
//even after cahnging something here it will change things here as well as run in console 
//means we dont need to restart everytime when something changed


// this /apple is called routing

//middleware is something in b/w client and server...the request and response reaches middleware before going to client or server
// sbse phle middleware mein joh bhi hai woh chlega uske baad routing chlega...like /, /apple, /home etc chlne se phle middleware chlega

// MVC( model view controller) is an software architecture which seperates an applications into 3 interconnected components i.e model,view and controller for developing GUI / UI to and serve and as client server requesr response...it is used to do a good mainataince of the code....it accquires a code on the basis of the request of the client and responses back to it by maintaing the code....




