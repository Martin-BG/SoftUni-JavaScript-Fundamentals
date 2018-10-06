function countWords(inputLines) {
  const words = inputLines
    .join(' ')
    .split(/\W+/)
    .filter(w => w !== '');
  let wordsCount = {};
  for (const w of words) {
    // wordsCount[w] ? wordsCount[w]++ : wordsCount[w] = 1;
    if (wordsCount[w] === undefined) {
      wordsCount[w] = 1;
    } else {
      wordsCount[w]++;
    }
  }
  return JSON.stringify(wordsCount);
}

console.log(countWords([
  'JS and Node.js',
  'JS again and again',
  'Oh, JS?',
]));

console.log(countWords([
  'Far too slow, you\'re far too slow.'
]));

console.log(countWords([
  'JS devs use Node.js for server-side JS.-- JS for devs'
]));
