const  fs=require("fs");
let text=fs.readFileSync("meme.js","utf-8");//used to read the content of the file and utf-8 is the encoding no. and necessary
text=text.replace("hello","melo");//replaced the word heelo with melo in the file
console.log(text);//will print the content of the file

console.log("creating a new file ");
fs.writeFileSync("createnewfile.txt",text);//text is written as secod argument as i want it as text to write in
//used t create a new file

//text=fs.readFileSync () ka mtlb hai ki jb tk fs ke andr 1st wali file text file ke ander read na ho jaye tb tk usse aage mtlb badana