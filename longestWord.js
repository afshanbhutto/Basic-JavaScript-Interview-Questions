// write the fuction to extract the longest word in the sentence

let inputSentence = prompt("Enter Sentence to extract longest word: ")

const findLongestWord = (inputSentence) => {
    let longestWord = ""; 
    const words = inputSentence.split(" ");
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord  = word
        }
    }
    return longestWord
}

console.log(findLongestWord(inputSentence))