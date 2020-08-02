// Return true if the given string is a palindrome. Otherwise, return false.
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

function palindrome(str) {
  let cleanStr = cleanString(str);
  return cleanStr == cleanStr.split("").reverse().join("");
}

function cleanString(str) {
  let newStr = "";

  let alphaNum = "abcdefghijklmnopqrstuvwxyz1234567890";
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();

    if (alphaNum.includes(char)) newStr += char;
  }

  return newStr;
}



palindrome("eye") // true

palindrome("_eye") // true

palindrome("race car") // true

palindrome("not a palindrome") // false

palindrome("A man, a plan, a canal. Panama") // true

palindrome("never odd or even") // true

palindrome("nope") // false

palindrome("almostomla") // false

palindrome("My age is 0, 0 si ega ym.") // true

palindrome("1 eye for of 1 eye.") // false

palindrome("0_0 (: /-\ :) 0-0") // true

palindrome("five|\_/|four") // false
