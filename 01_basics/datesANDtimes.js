// Dates and Times

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString()); //everything in detail
console.log(myDate.toDateString()); //only date part
console.log(myDate.toTimeString()); //only time part

console.log(myDate.toLocaleString()); //mm/dd/yyyy time
console.log(typeof myDate); //object

//let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("02-19-2004") //mostly used as MM/DD/YYYY
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toTimeString());



let myTimeStamp = Date.now()

console.log(myTimeStamp); 
console.log(myCreatedDate.getTime()); //millisecs
console.log(Math.floor(Date.now()/1000)); //in secs

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month as jan=1
console.log(newDate.getDay()); //5 as friday
console.log(newDate.getDate());

// `${newDate.getDay()} and the time `

const day1=newDate.toLocaleString('default', {
    weekday: "long", //Friday
})
const day2=newDate.toLocaleString('default', {
    weekday: "narrow", //F
})
const day3=newDate.toLocaleString('default', {
    weekday: "short", //Fri
})
console.log(day1)
console.log(day2)
console.log(day3)

const year1=new Date("01/01/2022")
const year2=new Date("01/001/2024")

const diffinmillisec=year2-year1
const diffinyear=diffinmillisec/(1000*60*60*24*365)

console.log(diffinyear);

//node 01_basics/datesANDtimes.js