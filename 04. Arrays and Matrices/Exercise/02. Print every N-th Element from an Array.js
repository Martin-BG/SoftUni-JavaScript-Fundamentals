function printEveryNthElementFromArray(input) {
  const step = +input[input.length - 1];
  console.log(input
    .filter(((value, index) => index % step === 0 && index < input.length - 1))
    .join('\n')
  );
}

printEveryNthElementFromArray([
  '5',
  '20',
  '31',
  '4',
  '20',
  '2',
]);

printEveryNthElementFromArray([
  'dsa',
  'asd',
  'test',
  'tset',
  '2',
]);

printEveryNthElementFromArray([
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
]);
