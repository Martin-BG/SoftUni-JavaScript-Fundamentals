function rotateArray(input) {
  let arr = [].concat(input);
  const rotations = +arr.pop() % (input.length - 1);
  const rotated = arr.splice(arr.length - rotations);
  let result = rotated.concat(arr);
  console.log(result.join(' '));
}

rotateArray([
  '1',
  '2',
  '3',
  '4',
  '2',
]);

rotateArray([
  'Banana',
  'Orange',
  'Coconut',
  'Apple',
  '15',
]);
