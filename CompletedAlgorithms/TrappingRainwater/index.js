// Given an array of integers representing an elevation map where the width of each bar is 1, return how much rainwater can be trapped

// [0,1,0,2,1,0,3,1,0,1,2]
// => 8

// Step 1: Verify the Constraints
// Do the left and right sides of the graph count as walls?
// No, the sides are not walls

// Will there be negative integers?
// No, assume all integers are positive

// Step 2: Write out test cases
// [0,1,0,2,1,0,3,1,0,1,2] => 0
// [] => 0
// [3] => 0
// [3,4,3] => 0

// Step 3: Figure out a solution without code

// currentWater = min(maxLeft, maxRight) - currentHeight

// Loop through an array and calculate the max value from p to the left and the max value from p to the right and subtract the current height
// Go all the way up until you reach the current height

const trappingRainwaterBruteForce = (heights) => {
  const maxHeight = Math.max(...heights);
  let totalWater = 0;
  for (let i = 0; i < heights.length; i++) {
    let pLeft = i;
    let pRight = i;
    let maxLeft = 0;
    let maxRight = 0;
    while (pLeft >= 0) {
      maxLeft = Math.max(maxLeft, heights[pLeft]);
      pLeft--;
    }
    while (pRight < heights.length) {
      maxRight = Math.max(maxRight, heights[pRight]);
      pRight++;
    }
    const currentWater = Math.min(maxLeft, maxRight) - heights[i];
    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }
  return totalWater;
};

// Time Complexity is O(N^2) becuase of whiles inside of a for loop
// Space Complexity is O(1)

const trappingRainwater = (heights) => {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = 0;
  let pLeft = 0;
  let pRight = heights.length - 1;
  while (pLeft <= pRight) {
    
  }
  return totalWater;
};

module.exports = trappingRainwater;
