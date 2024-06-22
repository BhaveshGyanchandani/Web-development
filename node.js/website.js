const http = require('http');
const fs=require('fs');
// const port=process.env.PORT//iska mtlb hmare server ko jo bhi port mile use apna lo
const port = process.env.PORT || 3000; //ya to ye port set hai ya toh isse port = 3000 pr listen krwao

const hostname = '127.0.0.1';
const server = http.createServer((req, res) => {
    res.statusCode = 200;//request ke according response kya aaya ek baaar net se bhi dekh lena 
    res.setHeader('Content-Type', 'text/html');//meri jo request hai woh ek html ke taur pr handle ki jayegi set nhi kra toh plsain text ki jaise handle hogi
    //client ko ye btane ke liye ki server ne uski request pe usse kis tarah ka content bheja hai(jo ki abhi html mein hai) time=1:11:00

    console.log(req.url);
    if (req.url == '/') {
        res.end('<h1>this is me</h1>')//ki aap kaisa respnse krna cchate ho

    }
    else if (req.url == '/about') {//write in local host 3000/about tp get coding as a page
        
      const data = fs.readFileSync('index.html');  
      res.end(data.toString());
        
    }
    else {

        res.statusCode = 404;
        res.end("holly molly");
    }

})
//server.listen(port,callback) callback mtlb kya bhejna hai
server.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
//learn nodemon
