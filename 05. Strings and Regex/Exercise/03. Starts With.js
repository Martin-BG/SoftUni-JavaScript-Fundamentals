function textStartsWith(text, value) {
  console.log(text.startsWith(value));
}

textStartsWith('How have you been?', 'how');

textStartsWith('The quick brown fox…', 'The quick brown fox…');

textStartsWith(
  'Marketing Fundamentals, starting 19/10/2016',
  'Marketing Fundamentals, sta');
