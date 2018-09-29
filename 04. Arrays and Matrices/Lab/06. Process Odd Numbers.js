function processOddNumbers(arr) {
  const result = arr
    .filter((num, i) => i % 2 === 1)
    .map(x => 2 * x)
    .reverse();
  console.log(result.join(' '));
}

processOddNumbers([10, 15, 20, 25]);
processOddNumbers([3, 0, 10, 4, 7, 3]);
