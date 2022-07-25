// Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.

// Step 1: Verify the constraints
// Do we consider a palindrome as almost a palindrome?
// Yes

const almostAPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  console.log(str);
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

// 2 Pointers from the outside
const isPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// // 2 Pointers from the center
// const isValidPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

//   // initialize left/right pointers to point at the middle index of the string. Remember, indexes start at 0 meaning that we have to floor() the value from dividing length by 2 in order to get the index of the center.
//   let left = Math.floor(s.length / 2), right = left;

//   // if the string is even, move left pointer back by 1 so left/right are pointing at the 2 middle values respectively.
//   if(s.length % 2 === 0) {
//       left--;
//   }

//   // loop through the string while expanding pointers outwards comparing the characters.
//   while(left >= 0 && right < s.length) {
//       if(s[left] !== s[right]) {
//           return false
//       }

//       left--;
//       right++;
//   }

//   return true;
// };

// // Reverse string and check
// const isPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
//   let rev = "";

//   // generate a reverse string using a reverse for loop.
//   for(let i = s.length - 1; i >= 0; i--) {
//       rev += s[i];
//   }

//   return rev === s;
// };

// Time Complexity: O(N)
// Space Complexity: O(1)

module.exports = almostAPalindrome;
