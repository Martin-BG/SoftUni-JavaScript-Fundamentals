function rounding(input) {
  const number = input[0];
  let precision = input[1];
  if (precision > 15) {
    precision = 15;
  }
  console.log(+number.toFixed(precision)); // remove trailing zeros
}

rounding([3.1415926535897932384626433832795, 2]);
rounding([10.5, 3]);
