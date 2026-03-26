
const expenses = {
    rent: 1200,
    electricity: 100,
    water: 50,
    gas: 80,
    internet: 60,
    groceries: 300,
    home: 50,
    health: 150,
    car: 100,
};

// Calculate the total expenses


// with for ... in 
let sum = 0;
for(exp in expenses) {
    sum += expenses[exp];
}
// console.log(sum);

// without for ... in
let values = Object.values(expenses);
// console.log(values);

let summed = values.reduce( (acc, item) => acc += item);
console.log(summed)