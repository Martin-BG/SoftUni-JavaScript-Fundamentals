function matchAllWords(text) {
  // console.log(text.split(/\W+/).filter((x) => x !== '').join('|'));
  console.log(text.match(/\w+/g).join('|'));
}

matchAllWords('A Regular Expression needs to have the global flag in order to match all occurrences in the text');
matchAllWords('_(Underscores) are also word characters');
matchAllWords('Some random words and letters and other things. In a sentence, also there are some signs like + or ? Sentences can also have semicolons; or dots. and !');
