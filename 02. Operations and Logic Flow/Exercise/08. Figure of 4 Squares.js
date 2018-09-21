function figureOfFourSquares(n) {
  if (n === 2) {
    console.log('+++');
  } else {
    const dashes = '-'.repeat(n - 2);
    const spaces = ' '.repeat(n - 2);
    const fillLines = ((n % 2 === 0) ? n - 4 : n - 3) / 2;
    const main = `+${dashes}+${dashes}+`;
    let filler = [...Array(fillLines)]
      .fill(`|${spaces}|${spaces}|`, 0)
      .join('\n');
    filler = filler.length ? '\n' + filler + '\n' : '\n';

    console.log(main + filler + main + filler + main);
  }
}

figureOfFourSquares(2);
figureOfFourSquares(3);
figureOfFourSquares(4);
figureOfFourSquares(5);
figureOfFourSquares(6);
figureOfFourSquares(7);
