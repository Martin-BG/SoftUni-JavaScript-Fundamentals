function printArrayWithGivenDelimiter(arr) {
  console.log(arr
    .slice(0, arr.length - 1)
    .join(arr[arr.length - 1])
  );
}

printArrayWithGivenDelimiter([
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  '-'
]);

printArrayWithGivenDelimiter([
  'How about no?',
  'I',
  'will',
  'not',
  'do',
  'it!',
  '_'
]);
