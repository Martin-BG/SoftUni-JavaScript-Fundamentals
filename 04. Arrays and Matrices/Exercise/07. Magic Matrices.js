function magicMatrices(input) {
  const sum = input[0].reduce((a, b) => a + b);

  for (let i = 1; i < input.length; i++) {
    if (sum !== input[i].reduce((a, b) => a + b)) {
      return false;
    }
  }

  for (let col = 0; col < input[0].length; col++) {
    let currentSum = 0;
    for (let row = 0; row < input.length; row++) {
      currentSum += input[row][col];
    }
    if (sum !== currentSum) {
      return false;
    }
  }

  return true;
}

console.log(magicMatrices([
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]));

console.log(magicMatrices([
  [11, 32, 45],
  [21, 0, 1],
  [21, 1, 1],
]));

console.log(magicMatrices([
  [1, 0, 0],
  [0, 0, 1],
  [0, 1, 0],
]));
