function capitalizeWords(text) {
  console.log(text
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.substr(1))
    .join(' ')
  );
}

capitalizeWords('Capitalize these words');

capitalizeWords('Was that Easy? tRY thIs onE for SiZe!');

function capitalizeWordsRegex(str) {
  console.log(str
    .toLowerCase()
    .replace(/^\w|\s\w/g, (letter) => letter.toUpperCase())
  );
}

capitalizeWordsRegex('Capitalize these words');

capitalizeWordsRegex('Was that Easy? tRY thIs onE for SiZe!');
