function validateEmail(email) {
  const pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]+)+$/g;
  console.log(pattern.test(email) ? 'Valid' : 'Invalid');
}

validateEmail('valid@email.bg');
validateEmail('invalid@emai1.bg');
