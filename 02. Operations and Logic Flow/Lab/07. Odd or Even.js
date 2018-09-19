function oddOrEven(num) {
  if (!Number.isInteger(num)) {
    console.log('invalid');
  } else if (num % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

oddOrEven(5);
oddOrEven(8);
oddOrEven(-3);
oddOrEven(1.5);
oddOrEven(0);
oddOrEven(NaN);
oddOrEven('3');
