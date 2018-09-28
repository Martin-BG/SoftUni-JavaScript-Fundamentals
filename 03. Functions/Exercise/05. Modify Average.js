function modifyAverage(input) {
  let numbers = input
    .toString()
    .split('')
    .map((n) => +n);

  const sumArray = (arr) => {
    return arr.reduce((acc, num) => {
      return acc + num;
    }, 0);
  };

  const getArrayAverageValue = (arr) => {
    return sumArray(arr) / arr.length;
  };

  while (getArrayAverageValue(numbers) <= 5) {
    numbers.push(9);
  }

  console.log(numbers.join(''));
}

modifyAverage(101);
modifyAverage(5838);
