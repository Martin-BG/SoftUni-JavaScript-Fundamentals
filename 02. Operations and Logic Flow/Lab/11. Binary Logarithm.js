function binaryLogarithm(numbers) {
  for (const x of numbers) {
    console.log(Math.log2(x));
  }
}

binaryLogarithm([1024, 1048576, 256, 1, 2]);