console.log("this is module.js");

// function avergae(a,b,c){
//      d=(a+b+c)/2;
//     return d;
// }

function average(arr){
    let sum=0;
    arr.forEach(element => {
        sum=sum+element;
    });
    return sum/arr.length;
}

module.exports={
    avg : average,
    name: "haarry",
    repo: "github",
}

