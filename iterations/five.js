//forEach
const coding = ["js", "ruby", "java", "python", "cpp"]

console.log("a");

coding.forEach( function (val){
    console.log(val);
} )

console.log("b");

coding.forEach( (item) => {
     console.log(item);
} )

console.log("c");

 function printMe(item){
     console.log(item);
 }
coding.forEach(printMe)

 coding.forEach( (item, index, arr)=> {
     console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
      console.log(item.languageName);
      console.log(item.languageFileName);
      
} )
//node iterations/five.js