//functions
console.log("this is the fuunctions");

function greet(name){
    console.log(name + " is a boy");
}//to use code again and again

 //OR


function greet(name,greettext="greeting from js"){
    let nam="game";//only used in this function not globally 
    console.log(greettext + " " +name+",");
    console.log(name + " is a boy");
}//to use code again and again

let nam="boy";
let name1="pc";
let name2="tab";
let name3="droid";
let name4="bo";
let greettext="good morning";
greet(nam,greettext);
greet(name1,greettext);
greet(name2,greettext);
greet(name3,greettext);
greet(name4);

console.log(nam   +" is boy ");
console.log(name1 +" is boy ");
console.log(name2 +" is boy ");
console.log(name3 +" is boy ");
console.log(name4 +" is boy ");

function sum(a,b,c){
 let d=a+b+c;
    return d;
}
let returnval=sum(1,2,3);
console.log(returnval);


function hello(username , message){
    return username + " " + message ; 
}

console.log(hello("neto","fk you"));

// arrow functions
// () => {}.....arrow functions are those annonomous funcitons which dont have a name....nor the function keyword...
// they just have this () => { } syntax....in which () can have parameter for it....liek ( username , message ) etc...
//they are called when we want to just write a annonomous funciton somewhere instantly to do a job...

()=>{
    console.log("hello");
};

function hello(username){
    return `${username} just logged in` //  just as we do in python f"{username}" to print the username variable value ...we use `${}` to take the username value to be printed here
}

function hello(username){
    return `${username} just logged in` //  functioon will end when return is encountered and will retun the function the value returned...
    // console.log("helo world") wont be executed as return was encountered before
}


console.log(hello()) // for no input it will put username as undefined.....as it JS usually does by assigning undefined value to unassigned parameters or varialbles

function hello2(username){
    return "{username} just logged in" //  here {username} wont work as reuturn will take this whole as a string as it is in "" double quotes....and destructuring wont work here anyway...
}

console.log(hello2("me2"))
// arrow functin dont have functin keyword nor name....

//When working with Arrow Functions, you have a couple of "syntax shortcuts" available.

// Most importantly, you should know about the following alternatives:

// 1) Omitting parameter list parentheses

// If your arrow functions takes exactly one parameter, you may omit the wrapping parentheses.

// Instead of

// (userName) => { ... }
// you could write

// userName => { ... }
// Please note: 

// If your function takes no parameters, parentheses must not be omitted - () => { ... } is the only correct form in that case.

// If your function takes more than one parameter, you also must not omit parentheses - userName, userAge => { ... } would be invalid ((userName, userAge) => { ... } is correct)!

// 2) Omitting function body curly braces

// If your arrow function contains no other logic but a return statement, you may omit the curly braces and the return keyword.

// Instead of

// number => { 
//   return number * 3;
// }
// you could write

// number => number * 3;
// The following code would be invalid:

// number => return number * 3; // invalid because return keyword must also be omitted!
// number => if (number === 2) { return 5 }; // invalid because if statements can't be returned
// 3) Special case: Just returning an object

// If you go for the shorter alternative explained in 2) and you're trying to return a JavaScript object, you may end up with the following, invalid code:

// number => { age: number }; // trying to return an object
// This code would be invalid because JavaScript treats the curly braces as function body wrappers (not as code that creates a JS object).

// To "tell" JavaScript that an object should be created (and returned) instead, the code would need to be adjusted like this:

// number => ({ age: number }); // wrapping the object in extra parentheses
// By wrapping the object and its curly braces with an extra pair of parentheses, JavaScript understands that the curly braces are not there to define a function body but instead to create an object. Hence that object then gets returned.



// const arr = newArray.map( (item) => new*10 ).map( (data)=> data+1 )

// first each item will be * by 10 then that o.p will serve as i.p of next map then increase this by 1 and save that new array in arr....