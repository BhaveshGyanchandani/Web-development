const EventEmitter = require('node:events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('waterfull', () => {
  console.log('please trun off the motor');
  setTimeout(()=>{
    console.log("please turn off the molor its been 3sec");
  },3000);
});
console.log('please trun off the motor waater is sinking');
console.log('please trun off the motorwaater is still sinking');
myEmitter.emit('waterfull');