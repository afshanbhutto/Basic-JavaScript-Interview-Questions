// wrtie a function to reverse String

// 1. using for loop
let inputString = prompt("Enter String to reverse it: ")
const reverseString = ( str ) => {
 let reversedString = "";
 for( let i = str.length-1; i >=0; i--){
    reversedString += str[i]
 }
 return reversedString
}
console.log(reverseString(inputString))


// 1. using inbuilt functions

const reverseStringUsingMethods = ( str ) => {
    return str.split("").reverse().join("")
   }
console.log(reverseStringUsingMethods(inputString))