// synchronus code or blocking code--> line by line code execution is gurranted
// asynchronus code or non blocking code--> line by line execution of code not gurranted
console.log("hello");

const fs=require("fs");
//readfile(path,[optioin],callbackc )
// let text =fs.readFile("meme.js","utf-8",(error,data)=>{
//     console.log(error,data);
// });//in terminal error comes as null
    
let text =fs.readFile("meme.js","utf-8",(error,data)=>{
    console.log(data);
});//here not incli=udng error means i only want data;
    console.log("this is a message");
    // in asynchronus file like readfile the code will go on until the code has been finished
    //means when the code execution is finised then the read file will execute itself
//sbse phle readfile js file ko bg mein pdega aur whi rhkhega jb tk next code of lins executen na ho jaye
//ye sb kuch line by line hi hoga phle read krega file next line ka console print krega aur end mein readed file ko print kregaj