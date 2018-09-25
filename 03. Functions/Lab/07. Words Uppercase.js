function wordsUppercase(str) {
  const words = extractWords();
  return words.join(', ');

  function extractWords() {
    return str
      .toUpperCase()
      .split(/\W+/)
      .filter(w => w !== '');
  }
}

console.log(wordsUppercase('Hi, how are you?'));
console.log(wordsUppercase('hello'));
console.log(wordsUppercase(''));
