// Your code should print an output according to the test cases.

function findLongestConsecutiveSequence(nums) {
    if (nums.length === 0) {
        let count = 0;
        return count;
    }
    else{
        nums.sort((a, b) => a - b);
        let count = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i]+1 === nums[i + 1]) {
                count++;
            }
        }
        return count;
    }
}

// Output
const arr1 = [4, 8, 7, 10, 12, 15];
console.log(findLongestConsecutiveSequence(arr1));

const arr2 = [];
console.log(findLongestConsecutiveSequence(arr2)); 

const arr3 = [1];
console.log(findLongestConsecutiveSequence(arr3));

const arr4 = [1, 3, 5, 7, 9];
console.log(findLongestConsecutiveSequence(arr4)); 


