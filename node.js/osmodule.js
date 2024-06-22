const os = require('os');
//but why not ./os like other 
//its bcz when we use a built in module we can directly write its name
//while in other we have to use ./ to tell program that this file or folder in the same file we are executing in
// and now we can execute various OS functins

// const a=os.freemem(); used to tell us that how much memory is left
// console.log(a);
//or
//and other os functions available in node js website document(docs)
console.log(os.freemem());
console.log(os.homedir());
console.log(os.hostname());
console.log(os.platform());
console.log(os.release());
console.log(os.type());
//and etc
