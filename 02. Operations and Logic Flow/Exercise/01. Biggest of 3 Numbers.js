function getBiggest(input) {
  console.log(Math.max(...input));
}

getBiggest([5, -2, 7]);
getBiggest([130, 5, 99]);
getBiggest([43, 43.2, 43.1]);
getBiggest([5, 5, 5]);
getBiggest([-10, -20, -30]);

const arrow = (numbers) => Math.max(...numbers);
console.log(arrow([5, -2, 7]));
