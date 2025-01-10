//2 types of datatypes- primitive and non-primitive

// Primitive
// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

console.table([score,scoreValue,isLoggedIn,outsideTemp,userEmail]);


const id = Symbol('123')
const anotherId = Symbol('123')
//symbol stores unique random values 
console.log(id === anotherId);
console.log(id);
console.log(anotherId);



const bigNumber = 3456543576654356754n
console.log(bigNumber);



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(myObj);
console.log(heros);



const myFunction = function(){
   console.log("Hello world");
}
console.log(myFunction); //[Function: myFunction]
myFunction(); //Hello World

console.log(typeof anotherId); //symbol

// https://262.ecma-international.org/5.1/#sec-11.4.3
//node 01_basics/datatypes2.js