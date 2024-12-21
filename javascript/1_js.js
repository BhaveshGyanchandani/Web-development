console.log("hello");


// used to print the sum output to the <p> tag uding itd it
//let c=document.getElementById('one').innerHTML=any_let_identifier ...

function wow(){
    let a=document.getElementById('one').value;
    let b=document.getElementById('two').value;
    // let sum=a+b;
    //considers a and b as string
    // .value is used to get the value
    // document.getElementById('three').value=sum; 
    // this will join num1 and num2 i.e a and b as string
    let sum=parseInt(a)+parseInt(b);
    // this parseint() will set the value of a and b as integer not string
    document.getElementById('three').value=sum; 
    document.getElementById('four').innerHTML=sum;
    // .innerHTML is used because we want this sum value in HTML web page no in the input box
    console.log("hello");
    // remember the the type of box in number
    console.log(sum);
   
}


function hello(mister){

    if(mister){ // execute if the value mister is given as an argument
        console.log("value identified")
    }


    if(!mister){ // if value of mister is not ture...i.e false then execute this .....calue of mister means if the argument was not given any value then execute this
        console.log("value not identified")
    }

    if(true){ // means execute it always
        console.log("its true")
    }

    if(false){ // means never execute this .....
        console.log("its false")
    } // it wont get executed
    return mister
}

hello("me")
hello() // it means the value of parameter mister is false.....