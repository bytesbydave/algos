// Given an array of integers, return the indices of the two numbers that add up to a given target
// [1,3,7,9,2] -> 11
// => [3,4]

// Step 1: Verify the constraints

// Are all the numbers positive or can there be negatives? (good question when working with integers) All positive
// Are there duplicate numbers in the array? No
// Will there always be a solution available? No
// What do we return if there's no solution? Return Null
// Can there be multiple pairs that add up to the target? No

// Step 2: Write out some test cases

// [1,3,7,9,2] t = 11 => [3,4]
// [1,3,7,9,2] t = 25 => null
// [] t = 1 => null
// [5] t = 5 => null
// [1,6] t = 7 => [0,1]

// Step 3: Figure out a solution without code

// Two pointer technique:
// Two pointers and move them based on a specific logic
// Number to find = target - nums[P1]

// Step 4: Write out our solution in code

const twoSumBruteForce = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    const numberToFind = target - arr[i];
    for (let r = 1; r < arr.length; r++) {
      if (numberToFind === arr[r]) {
        return [i, r];
      }
    }
  }
  return null;
};

// Step 5: Doublecheck for errors

// Step 6: Test our code with test cases

// Step 7: Space and Time Complexity

// Polynomial
// O(LogN) - Logarithmic
// O(N) - Linear
// O(NLogN) - Linearithmic
// O(N^2) - Quadratic
// O(N^3) - Cubic

// Expnential
// O(2^N) - Exponential
// O(!N) - Factorial
// O(N^N) - Exponential

// Step 8: Optimize our Solution

const twoSum = (arr, target) => {
  const hashMap = {};
  for (let i = 0; i < arr.length; i++) {
    const currentMapVal = hashMap[arr[i]];
    if (currentMapVal) {
      return [currentMapVal, i];
    }
    const numberToFind = target - arr[i];
    hashMap[numberToFind] = i;
  }
  return null;
};

module.exports = twoSum;
