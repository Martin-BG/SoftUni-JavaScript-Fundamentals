function dnaHelix(length) {
  const pairs = [
    ['A', 'T'],
    ['C', 'G'],
    ['T', 'T'],
    ['A', 'G'],
    ['G', 'G'],
  ];
  const stars = ['**', '*', '', '*'];
  const hyphens = ['', '--', '----', '--'];

  for (let line = 0; line < length; line++) {
    const pair = pairs[line % pairs.length];
    const starsStr = stars[line % stars.length];
    const hyphensStr = hyphens[line % hyphens.length];
    console.log(starsStr + pair[0] + hyphensStr + pair[1] + starsStr);
  }
}

dnaHelix(4);
dnaHelix(10);
