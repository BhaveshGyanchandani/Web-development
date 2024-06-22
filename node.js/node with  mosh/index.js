//node js is a runtime environment to run js code 
//it neither a programming language or a framewrok its just a runtime environment for js to run on
// module.export.(name or method)=(any element mentioned we want to export or use in another files);
//module.export.()=(); is used to export the mentioned element so that it can be used on another files or folder
// the require function is used to load a module
//the require('path or name of module we want to load'); load that module
// when 2 or more folder are in same module{ like app.js or mod.js or index.js} are in same folder so we use "./(module name)" as its path 
//like require('./index.js) ./app.js inplace of app.js to show that the file module app.js is in same folder as index.js(or current module)
// ./ also indictaes that it is in same folder
// if app.js was in an subfolder named as manyMOD so the path can be written as ./manyMOD/app.js to indicate its path
// if app.js was in parent forlder the path can be indicated as ../app.js
// we can also write ./app.js asa ./app as the computer will recognize it as an js 
//


// first we export a module and we need it in an another module we call require function
// it is better to term or funciton form var to const as we donot our functionn to be changed accedently

//we can run  jshint app.js to find the error in terminal
//npm is used to install packages in nodejs
//packages are something like someone has already written a js code so will use his package to get his code to facilitate your work

