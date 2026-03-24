function myMap(arr, callback) {
    // Your code here

    if(arr.length === 0) {
        return [];
    }

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const change = callback(arr[i]);
        newArr.push(change)
    };

    return newArr;
}


// Output
const originalArray = [1, 2, 3, 4, 5];
const mappedArray = myMap(originalArray, (item) => item * 2);
console.log(mappedArray); 
