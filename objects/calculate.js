
// Your code here
function calculate(operation, ...args) {
    if (operation === "add") {
        let sum = args[0];
        for (let i = 1; i < args.length; i++){
            sum += args[i];
        }
        return sum;
    } else if (operation === "subtract") {
        let diff = args[0];
        for (let i = 1; i < args.length; i++){
            diff -= args[i];
        }
        return diff;
    } else if (operation === "multiply") {
        let product = args[0];
        for (let i = 1; i < args.length; i++){
            product *= args[i];
        }
        return product;
    } else if (operation === "divide") {
        let quot = args[0];
        for (let i = 1; i < args.length; i++){
            if (args[i] === 0) {
                return "Cannot divide by zero"
            }
            else {
                quot /= args[i];
            }    
        }
        return quot;
    } else {

    }
};


// Output
console.log(calculate("add", 1, 2, 3, 4)); // Output: 10
console.log(calculate("subtract", 10, 3, 2, 1)); // Output: 4
console.log(calculate("multiply", 2, 3, 4, 5)); // Output: 120
console.log(calculate("divide", 20, 5, 2, 1)); // Output: 2