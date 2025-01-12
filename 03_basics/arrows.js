const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       // console.log(this);
    }

}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

console.log(this); //{}

function chai1(){
    let username = "hitesh"
    console.log(username);
    
}
chai1() //hitesh

const chai2 = function () {
         let username = "hitesh"
        console.log(this.username);
}
chai2() //undefined

const chai =  () => {
    let username = "hitesh"
    console.log(this);
    console.log(this.username)
    console.log(username);
    
}
chai() // {}  undefined  hitesh

const addTwo1 = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo1(2,5));

const addTwo2 = (num1, num2) => ( num1 + num2 )
console.log(addTwo2(10,10));


const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(2,5));
console.log(addTwo(""));

