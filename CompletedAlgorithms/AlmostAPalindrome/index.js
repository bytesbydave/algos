// Given a string, determine if it is almost a palindrome. A string is almost a palindrome if it becomes a palindrome by removing 1 letter. Consider only alphanumeric characters and ignore case sensitivity.

// Step 1: Verify the constraints
// Do we consider a palindrome as almost a palindrome?
// Yes

const almostAPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
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

// Time Complexity: O(N)
// Space Complexity: O(1)

module.exports = almostAPalindrome;
