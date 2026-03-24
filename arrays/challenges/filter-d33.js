function customFilter(array, filterFunction) {
    // Your code here

    let filteredArray = [];

    array.forEach( (word, index) => {
        if(filterFunction(word)) {
            filteredArray.push(word);
        }
    })

    return filteredArray;
}



// Test Case
const words = ["apple", "banana", "grape", "kiwi", "pear"];
function isLongWord(word) {
    return word.length > 3;
}

const result = customFilter(words, isLongWord);
console.log(result);
