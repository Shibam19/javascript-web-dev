const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); //1

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()
console.log(myArr);
//[0, 1, 2, 3, 4, 5, 6]

myArr.unshift(9)
myArr.shift()
console.log(myArr);


console.log(myArr.includes(9)); //false
console.log(myArr.indexOf(3)); //3

const newArr = myArr.join()
console.log(myArr);
console.log( newArr);
const newlyarr=myArr.join("-")
console.log(newlyarr);


// slice, splice

console.log("A ", myArr); // 0 1 2 3 4 5 6

const myn1 = myArr.slice(1, 3)

console.log(myn1); // 1 2
console.log("B ", myArr);// 0 1 2 3 4 5 6

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr); // 0 4 5 6
console.log(myn2); // 1 2 3

//node 02_basics/arrays1.js