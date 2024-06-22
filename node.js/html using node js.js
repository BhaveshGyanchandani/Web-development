const http=require('http');
const fs=require('fs');
const filecontent=fs.readFileSync("second.html");//bloacking code banana mtlb file content ko read krke file content wale variable mein daal do

const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});//response is res
    res.end(fileContent);
});//text/html mtlb iss file  ko ek html file ke jaise handle krna

server.listen(80,'127.0.0.1',()=>{
    console.log("listening on port 80");
});