// local modules arre those module which we can create by ourselves  , a module is like a piece of code to perform some fucntions
// first export this module we created so that other can import it
module.exports=(add,sub,product,divide);
function add(a,b){
    return(a+b);
}


function sub(a,b){
    return(a-b);
}


function product(a,b){
    return(a*b);
}


function divide(a,b){
    return(a/b);
}