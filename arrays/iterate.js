// iterate over elements of array

const cars = ["totota", "vw", "bmw", "fiat", "ferrari"];

for (let i = 0; i < cars.length; i++) {
    console.log(i, ": ", cars[i])
}

cars.forEach((car, index) => {
    console.log(index, ": ", car)
})