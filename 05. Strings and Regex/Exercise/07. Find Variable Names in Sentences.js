function findVariableNames(text) {
  console.log(text
    .match(/\b_([A-Za-z0-9]+)\b/g)
    .map((match) => match.substr(1))
    .join(',')
  );
}

function findVariableNamesRegexOnly(text) {
  const regex = /\b_([A-Za-z0-9]+)\b/g;
  let matches = [];
  for (let match = regex.exec(text); match; match = regex.exec(text)) {
    matches.push(match[1]);
  }
  console.log(matches.join(','));
}

findVariableNames('The _id and _age variables are both integers.');

findVariableNames('Calculate the _area of the _perfectRectangle object.');

findVariableNames('__invalidVariable _evenMoreInvalidVariable_ _validVariable');

