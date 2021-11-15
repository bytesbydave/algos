// Given two strings S and T, return if they equal when both are typed out. Any '#' that appears in the string counts as a backspace

// "cb#d" -> "cd"

// Step 1: Verify the constraints
// What happends when two #'s appear beside each other?
//  Delete the two values before the first #
//  "ab##" -> ""

// What happens to # when there is no characters to remove?
//  It deletes nothing, just like backspace would
// "a###b" -> "b"

// Are two empty strings equal to each other?
//  Yes, consider two empty strings as equal
//  "x#y#z#" === "a#"

// Does case sensitivity matter?
//  Yes it does, "a" does not equal "A"

// const typedOutStrings = (string1, string2) => {
//   return buildString(string1) === buildString(string2);
// };

// // Time complexity: O(a+b)
// // Space complexity: O(a+b)

// const buildString = (string) => {
//   const builtArray = [];
//   for (let p = 0; p < string.length; p++) {
//     if (string[p] !== '#') {
//       builtArray.push(string[p]);
//     } else {
//       builtArray.pop();
//     }
//   }
//   return builtArray.join('');
// };

// Use 2 pointer technique instead

const typedOutStrings = (string1, string2) => {
  let p1 = string1.length - 1;
  let p2 = string2.length - 1;
  while (p1 >= 0 || p2 >= 0) {
    if (string1[p1] === '#' || string2[p2] === '#') {
      if (string1[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;
          if (string1[p1] === '#') {
            backCount = backCount + 2;
          }
        }
      }
      if (string2[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (string1[p2] === '#') {
            backCount = backCount + 2;
          }
        }
      }
    } else {
      if (string1[p1] !== string2[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

// Time Complexity: O(a+b)
// Space Complexity: O(1)

module.exports = typedOutStrings;
