function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()

function addTwoNumbers(number1, number2){

     console.log(number1 + number2);
}
addTwoNumbers(2,6) 

function addTwoNumbers2(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers2(3, 5)
console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `A ${username} just logged in`
}
console.log(loginUserMessage("hitesh"))

function loginUserMessage1(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `B ${username} just logged in`
}
console.log(loginUserMessage1())

function loginUserMessage2(username ){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `C ${username} just logged in`
}
console.log(loginUserMessage2())


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))

function calculateCartPrice1( ...num1){
    return num1
}

console.log(calculateCartPrice1(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
handleObject({
   username: "sam",
   price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));
//node 03_basics/functions.js