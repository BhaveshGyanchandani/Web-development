console.log("hello world");
//used to make a server
const http = require('http');//iska mtlb hm http module ko istemaal krna chate hai
 
const hostname = '127.0.0.1';
const port = 3000;
 
const server = http.createServer((req, res) => {
  res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plaim');//agr hm text/html krenge toh fir ye html ko use krega text ke saath i guess so
  res.setHeader('Content-Type', 'text/html');
  //we can also use if else loop here if the requst is coming form somewhere else show somethi g else and etc
//   res.end('Hello World');//ab http module ka isetmaal krke mein hello world serve krna chata hu
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>anmations and key frames</title>
      <style>
          .cont {
              background-color: green;
              display: flex;
          }
  
          .box {
              background-color: cyan;
              width: 300px;
              height: 200px;
              position: relative;
              animation-name: kratos;
              animation-duration: 10s;
          
              animation-iteration-count: infinite;
              /*number of times it will move per reload, we can also set it to infinte */
              animation-fill-mode: backwards;
              animation-timing-function: ease ;
              /* and use other too */
              /* animation-direction: reverse; /* to reverse the animtion  */
  
  
          }
  
          @keyframes kratos {
              0% {
                  top: 0px;
                  left: 0px
              }
  
              25% {
                  top: 50px;
                  left: 0px
              }
  
              50% {
                  top: 50px;
                  left: 100px
              }
  
              75% {
                  top: 0px;
                  left: 100px
              }
  
              100% {
                  top: 0px;
                  left: 0px
              }
          }
  
          /* @keyframes kratos {
              from {
                  width: 10px;
  
              }
  
              to {
                  width: 500px;
              }
  
          } */
      </style>
  </head>
  
  <body>
      <div class="cont">
          <div class="box">
              <h1>this is the heading</h1>
          </div>
      </div>
  </body>
  
  </html>`);
});
 //it will open the animation wala html doc into the port and this is callled backend programming
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
//ctrl + c is used to restart the server at terminal output