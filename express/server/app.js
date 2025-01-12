const express = require('express')
const dotenv = require('dotenv')
const  mongoose  = require('mongoose')
const app = express()
const port=3000
const cors = require('cors');

dotenv.config({path:'./config.env'});
app.use(cors());
app.use(express.json()) //to convert the data we get from JSON format to object format.....and data sendded from POSTMAN will be shown in terminal

// link with userSchema file
const User = require('./userSchema');
// link with auth file 


app.use(require('./auth')) // yha pr hum auth wali ko access kr rhe hai aur auth mein '/' path pe humko res mil rha hau
// jiski wjh se engine ko lgegea ki AUTH mein joh '/' hai mein usko lunga kyuki yha pr phle hum AUTH file ko access kr rhe hai
///jiski wjh se neeche app.get('/' ,) wala ignore ho jayega AUTH ke router.get('/' , ) ki wjh se as we are acessing AUTH file first AND WILL HAPPEN TO OTHER PATH TOO


// connect with mongoose
require('./conn.js');

app.use(function(req, res , next){
    next(); 
})


app.get('/' , (req,res)=>{
    res.send('Hello word from server app.js')
})

app.get('/home',(req,res)=>{
   
    res.send("This is our Home") 
})

app.get("/home/:username",(req,res)=>{
   
    // res.send(`Hello from ${req.params.username}`) 
    res.send("Hello from " + req.params.username)
})

app.listen(port,()=>{
    console.log('server is at port 3000')
})