const expenses = {
    rent: 10000,
    food: 2000,
    movies: 1500
}

let total = 0;
for (const key in expenses) {
    total += expenses[key];
}

console.log(total);