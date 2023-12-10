/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let s = str.toLowerCase();
  let ans = 0;
  for (let char of s) {
    if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
      ans += 1;
  }
  return ans;
}

module.exports = countVowels;
