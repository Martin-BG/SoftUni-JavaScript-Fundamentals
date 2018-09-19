function countLetter(str, letter) {
  let count = 0;
  for (let chr of str) {
    if (chr === letter) {
      count++;
    }
  }
  return count;
}

console.log(countLetter('hello', 'l'));
