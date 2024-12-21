const user = { // its like a key : value pair
    name: "harry",
    age : 43,
    study:10,
    // we can create METHOD in object " user " without using funcitn keyword
    greet(name , age){
        console.log(name);// will give underfined without parameter
        console.log(age);// will give underfined without parameter
        console.log(this.name);
        console.log(this.age); // this is used to define as current object i.e user here
        return name + " is of age " + age ;
    }
    // we can create method greet also without arguments....

}

console.log(" what is the name of user " + user.name);
user.greet();
user.greet("mark",34);

// for class name it should start with capital_case charactet

// class User{

// }

class User{

    constructor(name , age ){ // use constructor to take parameters
        this.name=name;
        this.age=age;
    }

    greet(){
        console.log("hello");
    }
}

// now crearte a new object based on User class blueprint...remember class is a bluprint or a template

const user1 = new User("mark",35);
console.log(user1); // it will now give us the object we created using classs as key value pair...
user1.greet();


const array = [1,2,3,4,5,6,7,8,9];
// console.log(array.filter()); wont work alone...

console.log(array.filter((num) => num > 5)); 


// console.log(user['name'+'hello'])

const {name,age ,...props}=user

console.log(name,age,props.study)

const a = 0 ?? 'jonas';
const b = " " ?? 'jonas';

console.log(a,typeof b) 

console.log(user['name']?.mid)