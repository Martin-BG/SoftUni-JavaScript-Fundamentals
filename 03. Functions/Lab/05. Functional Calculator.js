function calculate(a, b, op) {
  const calc = (a, b, op) => { return op(a, b); };
  const add = (a, b) => { return a + b; };
  const subtract = (a, b) => { return a - b; };
  const multiply = (a, b) => { return a * b; };
  const divide = (a, b) => { return a / b; };

  switch (op) {
    case '+':
      return calc(a, b, add);
    case '-':
      return calc(a, b, subtract);
    case '*':
      return calc(a, b, multiply);
    case '/':
      return calc(a, b, divide);
  }
}

console.log(calculate(2, 4, '+'));
console.log(calculate(9, 2, '/'));
console.log(calculate(18, -1, '*'));
console.log(calculate(18, 10, '-'));

///////////
function calc(a, b, operator) {
  return eval(a + operator + b);
}

console.log(calc(4, 5, '*'));
