
const content="hello there !!"

my_fs.writeFile("E:\\web development\\node.js\\4_file.txt ",content , (err,data)=>{
    if(err){
                console.log(err);
            }
            else{
                console.log("file data updated sucessfully !!!!");
            }
})