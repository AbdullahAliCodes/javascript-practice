const fruits = ["apple", "banana", 
    "oranges", "watermelon", "pear"];

// remove a specific value
const orangesIndex = fruits.indexOf("oranges");
fruits.splice(orangesIndex, 1);
console.log(fruits);