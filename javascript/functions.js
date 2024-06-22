//functions
console.log("this is the fuunctions");

function greet(name){
    console.log(name + " is a boy");
}//to use code again and again

 OR


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