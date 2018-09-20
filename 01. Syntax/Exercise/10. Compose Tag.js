function composeTag([fileLocation, text]) {
  console.log(`<img src="${fileLocation}" alt="${text}">`);
}

composeTag(['smiley.gif', 'Smiley Face']);
