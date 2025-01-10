const name = "hitesh"
const repoCount = 50

console.log(`My name is ${name} and my repoCount is ${repoCount}`);

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]); //h
console.log(gameName[6]); //-
console.log(gameName.__proto__); //{} means object


console.log(gameName.length); //13
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));  //t
console.log(gameName.indexOf('t')); //2

const newString = gameName.substring(0, 4)
console.log(newString); //hite

const anotherString = gameName.slice(-8, 8)
console.log(anotherString); //h-h

const newStringOne = "   hitesh    "
console.log(newStringOne); //   hitesh    
console.log(newStringOne.trim()); //hitesh

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar')) //false
console.log(url.includes('hitesh')); //true


console.log(gameName.split('-')); // [ 'hitesh', 'hc', 'com' ] split forms an array by splitting
