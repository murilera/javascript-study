// assuming receiving a string
const palindrome = (value) => {
  const v = String(value)
  for (let i = 0; i < (v.length / 2); i++){
    if (value[i] !== value.at(-i-1)) return false
  }
  return true
}

const isPalindrome = (str) => {
  str = str.replace(/[\W_]/g, '').toLowerCase();
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
      if (str[left] !== str[right]) {
          return false;
      }
      left++;
      right--;
  }
  return true;
}

console.log('abcd', palindrome('abcd'))
console.log('abba', palindrome('abba'))
console.log('abcba', palindrome('abcba'))
console.log('abccba', palindrome('abccba'))

console.log('abcd', palindrome('abcd'))
console.log('abba', isPalindrome('abba'))
console.log('abcba', isPalindrome('abcba'))