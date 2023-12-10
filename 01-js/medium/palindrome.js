/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let s = str.toLowerCase().replace(/[^a-zA-Z0-9 ]/g, "");
  let st = s.split(" ").join("");
  let i = 0,
    j = st.length - 1;
  while (i < j) {
    if (st.charAt(i) != st.charAt(j)) return false;
    i += 1;
    j -= 1;
  }
  return true;
}

module.exports = isPalindrome;
