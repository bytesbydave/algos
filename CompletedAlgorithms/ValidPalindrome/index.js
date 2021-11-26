// A subproblem is a problem we have to solve along the way to solving the main problem

// Given a string, find the length of the longest substring without repeating characters

// Main Problem: find length of longest unique substring

// Sub Problem: Pattern matching - unique substring

// Palindrome is a very common sub problem
// A palindrome is a string that reads the same forwards and backwards

// ie. "aba", "a", "race car", "A man, a plan, a canal: Panama"

// example: "A man, a plan, a canal: Panama"
// convert to "amanaplanacanalpanama"

// Three methods:
// Compare characters from the outside in (Two pointers from the outside)
// Compare characters from the middle out (Two pointers from the center)
// Reverse the string and compare the two strings (Compare against reverse)

// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring case sensitivity.

// "A man, a plan, a canal: Panama"

// Two pointers from the outside
// const validPalindrome = (str) => {
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let left = 0;
//   let right = str.length - 1;
//   while (left < right) {
//     if (str[left] !== str[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// };

// Two pointers from the inside
const validPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = Math.floor(str.length / 2);
  let right = left;
  if (str.length % 2 === 0) {
    left--;
  }
  while (left >= 0 && right < str.length) {
    if (str[left] !== str[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
};

// Reverse the string and compare the two strings
// const validPalindrome = (str) => {
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   // return str === str.split('').reverse().join('');
// };

// const validPalindrome = (str) => {
//   str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let rev = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
//   }
//   return rev === str;
// };

module.exports = validPalindrome;
