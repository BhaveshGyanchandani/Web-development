var url='http://mylogger.io/log';//which i know is wrong and i donot know what it really is but we wrote itas an example

function log(message){
    console.log(message);}

module.exports.log=log;// the first log is a new varibale name given to the log function which is assigned to it 
// module.exports.endpoint=url; to export the url as a new variable name as endpoint