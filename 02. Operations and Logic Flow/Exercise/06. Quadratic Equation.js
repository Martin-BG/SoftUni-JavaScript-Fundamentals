function quadraticEquation(a, b, c) {
  const d = b * b - 4 * a * c;
  if (d > 0) {
    const xA = (-b + Math.sqrt(d)) / (2 * a);
    const xB = (-b - Math.sqrt(d)) / (2 * a);
    console.log([xA, xB].sort((a, b) => a - b).join(`\n`));
  } else if (d === 0) {
    const x = -b / (2 * a);
    console.log(x);
  } else {
    console.log('No');
  }
}

quadraticEquation(6, 11, -35);
quadraticEquation(1, -12, 36);
quadraticEquation(5, 2, 1);
