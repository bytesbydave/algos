// You are given an array of positive integers where each integer represents the height of a vertical line on a chart. Find two lines which together with the x-axis forms a container that would hold the greatest amount of water. Return the area of water it would hold

// [1,8,6,2,9,4]
// area = L x W

// Questions:
// Does the thickness of the lines affect the area?
// No

// Do the left and right sides of the graph count as walls?
// No, the sides cannot be used to form a container

// Does a higher line inside our container affect our area?
// No, lines inside a container don't affect the area

// Area = L x W
// min(a,b) * (bi - ai)

// const mostWaterBruteForce = (arr) => {
//   let maxArea = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let p = i + 1; p < arr.length; p++) {
//       const height = Math.min(arr[i], arr[p])
//       const width = p - i
//       const area = height * width
//       maxArea = Math.max(maxArea, area)
//     }
//   }
//   return maxArea;
// };

// Time Complexity: O(N^2)
// Space Complexity: O(1)

// No additional caching that can happen

// New Technique: Shifting Pointers

// Two Pointer technique
const mostWater = (arr) => {
  let p1 = 0;
  let p2 = arr.length - 1;
  let maxArea = 0;
  while (p1 < p2) {
    const height = Math.min(arr[p1], arr[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);
    if (arr[p1] <= arr[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

module.exports = mostWater;
