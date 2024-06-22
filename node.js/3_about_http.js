const http=require('http'); // imported the module http

const myserver=http.createServer((request,response)=>{ // the request and response is for client and server side communication
    response.write("hello_there "); // resposne from the server side means to display this text when opened this module in client server side
    response.end(); // we need to end the response for a better communication between client and server
})
myserver.listen(5500); // to communicate with the server we need a "port number " so we use .listen to make a port nummber to listen server on and this port number is 5500 here

// or we can use  myserver.listen(5500); here too if in myserver it doesnt work
// to run in local host we need to write ....localhost:port_number in browser....
//here it is localhost:5500




