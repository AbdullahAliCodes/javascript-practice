const expenses = {
    rent: 10000,
    food: 2000,
    movies: 1500
}

console.log(Object.keys(expenses), Object.values(expenses));

const total = Object.values(expenses).reduce( (acc, exp) => acc += exp, 0)

console.log(total);

const keys = Object.keys(expenses);
const values = Object.values(expenses);

for (let i = 0; i < keys.length; i++) {
    console.log(keys[i], values[i])
}

