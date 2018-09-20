function compoundInterest(input) {
  const principalSum = input[0];
  const interestRate = input[1] / 100;
  const compoundingFrequency = 12 / input[2];
  const duration = input[3];
  const compoundInterest = principalSum *
    Math.pow((1 + interestRate / compoundingFrequency), compoundingFrequency * duration);

  console.log(compoundInterest.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);
compoundInterest([100000, 5, 12, 25]);
