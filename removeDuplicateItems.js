// using for loop
const removeDuplicateItems = (arr) =>{
    let uniqueElements = [];
    for(let i=0; i<=arr.length-1; i++){
        if(uniqueElements.indexOf(arr[i]) === -1){
            uniqueElements.push(arr[i])
        }
    }
    return uniqueElements;
}
console.log(removeDuplicateItems([1,2,2,3,4,3,5,6,7,7]))



// Using Sets
const removeDuplicates = (arr) =>{
    return [...new Set(arr)]
}

console.log(removeDuplicateItems([1,2,2,3,4,3,5,6,7,7,8,8,6,9]))