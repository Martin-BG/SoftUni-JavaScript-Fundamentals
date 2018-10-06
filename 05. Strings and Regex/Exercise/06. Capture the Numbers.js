function captureNumbersRegex(input) {
  console.log(input
    .join('')
    .match(/\d+/g)
    .join(' ')
  );
}

function captureNumbers(input) {
  console.log(input
    .join(' ')
    .split(/\D+/)
    .filter(x => x !== '')
    .join(' ')
  );
}

captureNumbersRegex([
  'The300',
  'What is that?',
  'I think it’s the 3rd movie.',
  'Lets watch it at 22:45',
]);

captureNumbersRegex([
  '123a456',
  '789b987',
  '654c321',
  '0',
]);

captureNumbersRegex([
  'Let’s go11!!!11!',
  'Okey!1!',
]);
