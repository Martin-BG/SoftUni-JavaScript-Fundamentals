function sortArray(input) {
  console.log([].concat(input)
    .sort((a, b) => a.length - b.length || a > b)
    .join('\n')
  );
}

sortArray([
  'alpha',
  'beta',
  'gamma',
]);

sortArray([
  'Isacc',
  'Theodor',
  'Jack',
  'Harrison',
  'George',
]);

sortArray([
  'test',
  'Deny',
  'omen',
  'Default',
]);
