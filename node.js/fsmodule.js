const fs=require('fs');
// fs.readFile('path name','encoding',(callback fuction))
// fs.readFile('file.txt','utf-8',(error,data)=>{//agr koi error aa jata hai toh errro print hoga nhi toh data print hoga
// console.log(error,data);
// });

// const a=fs.readFileSync('file.txt');
//     console.log(a.toString());
    
const b=fs.writeFile('file2.txt','thisnis the data',()=>{
    console.log("wriiten to thr file")
})
console.log('naruto');