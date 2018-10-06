function wordOccurences(text, word) {
  const matches = text.match(new RegExp(`\\b${word}\\b`, 'gi')) || [];
  console.log(matches.length);
}

wordOccurences('The waterfall was so high, that the child couldn’t see its peak.', 'the');

wordOccurences('How do you plan on achieving that? How? How can you even think of that?', 'how');

wordOccurences('There was one. Therefore I bought it. I wouldn’t buy it otherwise.', 'there');
