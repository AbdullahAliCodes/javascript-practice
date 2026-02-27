// Your code here 

function countPrimes(start, end) {
    let isPrime = true;
    let primeCount = 0;
    for (let i = start; i < end; i++){
        console.log(`i = ${i}`)
        for (let k = 2; k < Math.sqrt(i); k++){
            console.log(`k = ${k}`)
            if (i % k === 0) {
                isPrime = false;
                console.log(`i%k = ${i%k}`);
                break;
            }
            else {
                isPrime = true;
            }
        }
        if (isPrime) {
            primeCount++;
        }
    }
    return primeCount;
}

// Test Case 1:
// console.log(countPrimes(1, 10));

// Test Case 2:
console.log(countPrimes(20, 50));

// Test Case 3:
// console.log(countPrimes(15, 15));

// // Test Case 4:
// console.log(countPrimes(1, 2));

// // Test Case 5:
// console.log(countPrimes(100, 200));



