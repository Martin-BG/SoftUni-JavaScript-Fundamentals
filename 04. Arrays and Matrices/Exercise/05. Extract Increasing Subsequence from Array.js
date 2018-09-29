function extractIncreasingNumbers(input) {
  let biggest = +input[0];
  console.log(input
    .map(x => +x)
    .filter(n => {
      if (n >= biggest) {
        biggest = n;
        return true;
      }
      return false;
    })
    .join('\n')
  );
}

extractIncreasingNumbers([1, 3, 8, 4, 10, 12, 3, 2, 24]);
extractIncreasingNumbers([1, 2, 3, 4]);
extractIncreasingNumbers([20, 3, 2, 15, 6, 1]);
