const http = require('http');
 const fs=require('fs');
const hostname = '127.0.0.1';
const port = 3000;
const home=fs.readFileSync('./index.html');// ./index.html means that  index.html file is in the same directory 
//and in terminla we write cd (directory name{keep in mind it shoulnot be in spaces or dots} if it runned without any error)
//then write node index.js and run
const about=fs.readFileSync('./about.html');
const contact=fs.readFileSync('./contact.html');
const services=fs.readFileSync('./services.html');
 
const server = http.createServer((req, res) => {
  console.log(req.url);
  url=req.url;
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  if(url=='/'){//  '/' bcz it is the home or first page
    res.end(home);
  }
  else if(url=='/about'){
    res.end("about code ");
  }
  else if(url=='/contact'){
    res.end("contact");
  }
  else if(url=='/services'){
    res.end("services");
  }
  else {
    res.statusCode;404;
    res.end("<h1>404 not found please refresh</h1>");//it ws as printf fuc
  }
});
 
//server.listen krne se server chalu ho jayega
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});



