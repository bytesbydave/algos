// Given a string, find the length of the longest substring without repeating characters

// "abccabb" -> "abc", "cab" two substrings of length 3

// Step 1: Verify the constraints

// Is the substring CONTIGUOUS?
//  Yes, look for a substring and not a subsequence

// Does case sensitivity matter?
//  No, assume all characters in the string are lowercase

// const longestSubstring = (str) => {
//   if (str.length <= 1) return str.length;
//   let longest = 0;
//   for (let left = 0; left < str.length; left++) {
//     let seenChars = {},
//       currentLength = 0;
//     for (let right = left; right < str.length; right++) {
//       const currentChar = str[right];
//       if (!seenChars[currentChar]) {
//         currentLength++;
//         seenChars[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return longest;
// };

// Time Complexity: Nested for loops O(N^2)
// Space Complexity: O(N)

// Use Sliding Window Technique
// Form a window over some PORTION of SEQUENTIAL data, then move that window throughout the data to capture different parts of it.

// "abcdefg" or [1,3,7,9,2,4]

// Hint: Use a sliding window to represent the current substring
// Hint: The size of the window will change based on new characters, and characters we've already seen before
// Hint: Our seen characters hashmap keeps track of what characters we've seen and the index we saw them at

// const longestSubstring = (str) => {
//   let longest = 0;
//   let left = 0;
//   let right = 0;
//   let long = 0;
//   const charMap = {};
//   while (right < str.length) {
//     if (charMap[str[right]] >= 0) {
//       charMap[str[left]] = -1;
//       left++;
//     } else {
//       charMap[str[right]] = right;
//       right++;
//     }
//     long = right - left;
//     longest = Math.max(longest, long);
//   }
//   return longest;
// };

// const longestSubstring = (str) => {
//   let longest = 0;
//   let left = 0;
//   let right = 0;
//   let long = 0;
//   const charMap = {};
//   while (right < str.length) {
//     if (charMap[str[right]] >= left) {
//       left = charMap[str[right]] + 1;
//     } else {
//       charMap[str[right]] = right;
//       right++;
//     }
//     long = right - left;
//     longest = Math.max(longest, long);
//   }
//   return longest;
// };

const longestSubstring = (str) => {
  if (str.length <= 1) return str.length;
  const seenChars = {};
  let left = 0;
  let longest = 0;
  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    const prevSeenChar = seenChars[currentChar];
    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChars[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
};

// New Time Complexity: O(N)
// New Space Complexity: O(N)

module.exports = longestSubstring;
