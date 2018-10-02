function performMultiplications(text) {
  console.log(text.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
    (match, num1, num2) => num1 * num2));
}

performMultiplications('My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).');
