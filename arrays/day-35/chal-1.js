function filterData(data, keysArray) {
    // Implement this function

    const keys = Object.keys(data);
    const values = Object.values(data);

    let filteredObj = {};

    for(let i = 0; i < keysArray.length; i++) {
        for(let j = 0; j < keys.length; j++) {
            // console.log(keysArray[i] + ": " + keys[j])
            if ( keysArray[i] === keys[j] ) {
                let currKey = keys[j];
                filteredObj = {
                    ...filteredObj,
                    [currKey]: values[j]
                }
            }
        }
    }

    return filteredObj;
}

function sumValues(data, keysArray) {
    // Implement this function

    const keys = Object.keys(data);
    const values = Object.values(data);

    let sum = 0;

    for(let i = 0; i < keysArray.length; i++) {
        for(let j = 0; j < keys.length; j++) {
            if ( keysArray[i] === keys[j]) {
                sum += values[j];
            }
        }
    }

    return sum;

}

// Test Case
const data = {
    apple: 5,
    banana: 10,
    cherry: 15,
    date: 20,
};

const keysArray = ['banana', 'date', 'apple', 'kiwi'];

const filteredResult = filterData(data, keysArray);
const sumResult = sumValues(data, keysArray);

console.log("Filtered Data:", filteredResult);
console.log("Sum of Values:", sumResult);
