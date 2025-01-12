const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
//node control_flow/truthly.js
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined if null?? smt print smt or smt1??smt2 print smt1

let val1;
val1 = 5 ?? 10
let val2;
val2 = null ?? 10
let val3;
val3 = undefined ?? 15
let val;
val = null ?? 10 ?? 20
console.log(val1);
console.log(val2);
console.log(val3);
console.log(val);




// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("less than 80") : console.log("more than 80")