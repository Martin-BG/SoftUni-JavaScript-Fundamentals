function firstAndLastKNumbers(arr) {
  console.log(arr.slice(1, +arr[0] + 1).join(' '));
  console.log(arr.slice(arr.length - +arr[0], arr.length).join(' '));
}

firstAndLastKNumbers([2, 7, 8, 9]);
firstAndLastKNumbers([3, 6, 7, 8, 9]);
firstAndLastKNumbers([1, 5]);
