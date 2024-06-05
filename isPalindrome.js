let inputString = prompt("Enter String to check ")

// using for loop
const isPalindrome = (str) => {
    let reveresedString = ""
    for(let i=str.length-1; i>=0; i--){
        reveresedString += str[i];
    }
    return str === reveresedString
}

console.log(isPalindrome(inputString))


// using builtin methods
const checkPalindrome = ( str) =>{
    let reversedString = str.split("").reverse().join("")
    return str === reversedString
}
console.log(checkPalindrome(inputString))