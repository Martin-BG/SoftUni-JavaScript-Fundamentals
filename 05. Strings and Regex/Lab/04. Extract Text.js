function extractTextFromParenthesis(text) {
  let result = [];
  let startIndex = text.indexOf('(');
  let endIndex = text.indexOf(')', startIndex);
  while (startIndex > -1 && endIndex > -1) {
    const snippet = text.substring(startIndex + 1, endIndex);
    result.push(snippet);
    startIndex = text.indexOf('(', endIndex);
    endIndex = text.indexOf(')', startIndex);
  }
  console.log(result.join(', '));
}

extractTextFromParenthesis('Rakiya (Bulgarian brandy) is self-made liquor (alcoholic drink)');
