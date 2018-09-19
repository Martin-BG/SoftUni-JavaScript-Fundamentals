function isPrime(num) {
  let prime = true;
  for (let d = 2; d <= Math.sqrt(num); d++) {
    if (num % d === 0) {
      prime = false;
      break;
    }
  }
  return prime && (num > 1);
}

console.log('7: ' + isPrime(7));
console.log('9: ' + isPrime(9));
console.log('3: ' + isPrime(3));
console.log('4: ' + isPrime(4));
console.log('23: ' + isPrime(23));
console.log('81: ' + isPrime(81));
console.log('1: ' + isPrime(1));
console.log('0: ' + isPrime(0));
