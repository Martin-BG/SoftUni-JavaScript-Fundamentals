function countWords(inputLines) {
  const words = inputLines
    .join(' ')
    .split(/\W+/)
    .filter(w => w !== '')
    .map(w => w.toLowerCase());
  let wordsCount = new Map();
  for (const w of words) {
    if (wordsCount.has(w)) {
      wordsCount.set(w, wordsCount.get(w) + 1);
    } else {
      wordsCount.set(w, 1);
    }
  }
  const sortedWords = Array.from(wordsCount.keys()).sort();
  sortedWords.forEach(w =>
    console.log(`'${w}' -> ${wordsCount.get(w)} times`)
  );
}

countWords([
  'Far too slow, you\'re far too slow.',
]);

countWords([
  'JS devs use Node.js for server-side JS. JS devs use JS. -- JS for devs --',
]);
