

let arr1 = [1, 7, 4, 3, 8, 2, 9];
console.log(arr1.reverse());

let str = 'javascript';
let spl = str.split("")
let spl2 = str.split("", 5) // 0 to 5 index in str
console.log(spl2);
console.log(spl);

let join=spl.join("");
console.log(join);
console.log(str.toUpperCase());

document.getElementById("scr").innerHTML=20;
document.getElementById("text").value=20;

try{
    ss;
    
}
catch(error){
    console.log("eror handeled");
}

setTimeout( function() {
    console.log("123");
}, 5000)
setTimeout(function(){
    console.log("456")
},10000);

function valid(n){
    let regex=/^\d{3}-\d{3}-\d{4}$/;
    if(regex.test(n)){
        console.log(true);

    }
    else{
        console.log(false);
    }
}

valid('123');
valid('123-123-1234');
valid('123-123-123');

let arr3=[1,2,3];
let arr4=[4,5,6];
console.log(arr3.concat(arr4));

arr3.push(5);
console.log(arr3);
arr3.pop(5);
console.log(arr3);