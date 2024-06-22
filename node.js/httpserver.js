const http=require('http');

// const port=process.env.PORT//iska mtlb hmare server ko jo bhi port mile use apna lo
const port=process.env.PORT ||3000; //ya to ye port set hai ya toh isse port = 3000 pr listen krwao

const server=http.createServer((req,res)=>{
    console.log(req.url);
res.statusCode=200;//request ke according response kya aaya ek baaar net se bhi dekh lena 
res.setHeader('Content-Type','text/html');//meri jo request hai woh ek html ke taur pr handle ki jayegi set nhi kra toh plsain text ki jaise handle hogi
//client ko ye btane ke liye ki server ne uski request pe usse kis tarah ka content bheja hai(jo ki abhi html mein hai) time=1:11:00
res.end('<h1>this is me</h1>')//ki aap kaisa respnse krna cchate ho

})
//server.listen(port,callback) callback mtlb kya bhejna hai
server.listen(port,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
});
