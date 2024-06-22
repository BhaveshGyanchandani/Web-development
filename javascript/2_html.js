

document.getElementById('msg').innerHTML="Hello World";
function ctof(){
    let farhenhit=((document.getElementById('ctf').value)*(9/5))+32;
    console.log(farhenhit)
    document.getElementById('Rctf').value=parseInt(farhenhit);
    // .value is used to get or set the value of this thing at the place of Id mentioned
    // .innerHTML will set it at WEB PAGE ID of that part not in the box
}

function ftoc(){
    let celcius=((document.getElementById('ftc').value-32)*(5/9));
    console.log(celcius)
    document.getElementById('Rftc').value=parseInt(celcius);      
}

function swap(){
    let a=document.getElementById('num1').value;
    let b=document.getElementById('num2').value;
    let c;
    console.log("swapping");
    c=a;
    a=b;
    b=c;
    document.getElementById('num1').value=a;
    document.getElementById('num2').value=b;
    console.log("a is "+a);
    console.log("b is "+b);

    // sirs method is---->
    //let c= [a,b]
    // [a,b]=[b,a] i.e assigning the value of a as b and assigning the value of b as a
    // console.log(c[0]);
    // this is called object array

    // we have 2 types of reference here  i.e pointing to a point and pointing toa a value
    // let a=2; is called pointig to a value
    // let b=a is called pointing to a reference or point
   
}

function maxMIN(){
    let a=document.getElementById('a').value;
    let b=document.getElementById('b').value;
    if(a>b){
        document.getElementById('max').value=a;
        console.log(a);
    }
    else if(b>a){
        document.getElementById('max').value=b;   
        console.log(b);
    }
    else{
        document.getElementById('max').value="equal value i.e " +a;
        console.log(a);
    }

    
}

let arr=[2,5,3,7,9,6,8,1];
let sot=arr.sort(); // its a sort function which is in built in javascript
console.log(sot);
let max;
console.log(sot.length)
for(let i=0;i<sot.length;i++){
    if(sot[i]>sot[i+1]){
        max=sot[i+1];
    }
    else{
        max=sot[i];
    }
}
console.log(max);

