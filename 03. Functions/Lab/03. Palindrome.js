function isPalindrome(str) {
  if (str === undefined) {
    return undefined;
  }

  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome('a'));
console.log(isPalindrome('abba'));
console.log(isPalindrome('abcba'));
console.log(isPalindrome('xyz'));
console.log(isPalindrome(''));
console.log(isPalindrome());

function isPalindromeWithReverse(str) {
  return str === str.toString().split('').reverse().join();
}

console.log(isPalindromeWithReverse('a'));
console.log(isPalindromeWithReverse('abba'));
console.log(isPalindromeWithReverse('abcba'));
console.log(isPalindromeWithReverse('xyz'));
console.log(isPalindromeWithReverse(''));
