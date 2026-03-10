// Day 31

const fruits = ["apple", "banana", 
    "oranges", "watermelon", "pear"];

// get the index of a specific value, and print to console 
const watermelonIndex = fruits.indexOf("watermelon");
console.log(fruits[watermelonIndex]);

// access the LAST element of the array
console.log(fruits[fruits.length - 1]);

// edit an existing element of an array
fruits[watermelonIndex] = "dragon fruit";
console.log(fruits);

// check if an element exist in an array
const watermelonExists = fruits.includes("watermelon");
console.log(watermelonExists);

const appleExists = fruits.includes("apple");
console.log(appleExists);

// remove a specific value
const orangesIndex = fruits.indexOf("oranges");
fruits.splice(orangesIndex, 1);
console.log(fruits);