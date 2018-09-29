function sumLastKNumbersSequence(n, k) {
  let seq = [1];
  for (let current = 1; current < n; current++) {
    const start = Math.max(0, current - k);
    const numbers = seq.slice(start, current);
    seq[current] = numbers.reduce((a, b) => a + b, 0);
  }
  console.log(seq.join(' '));
}

sumLastKNumbersSequence(6, 3);
sumLastKNumbersSequence(8, 2);
sumLastKNumbersSequence(9, 5);
