function printName(firstName, lastName) {
  let name = firstName;
  if (lastName !== undefined) {
    name += ' ' + lastName;
  }
  console.log(name);
}

printName('Maria');
printName('Maria', 'Nikolova');

console.log('###############################');

function sum() {
  console.log('args count: ' + arguments.length);
  console.log(arguments);
  let sum = 0;
  for (let x of arguments) {
    sum += x;
  }
  console.log('sum = ' + sum);
}

sum(); // 0 [] 0
sum(5, 3); // 2 [5, 3] 8
sum(4, 2, 3); // 3 [4, 2, 3] 9

console.log('###############################');

function check(a) {
  if (a > 0) {
    return 'positive';
  }
  if (a < 0) {
    return 'negative';
  }
}

console.log(check(5)); // positive
console.log(check(-5)); // negative
console.log(check(0)); // undefined
console.log(check()); // undefined
console.log(check('hello')); // undefined

console.log('###############################');

let f = function (x) { return x * x; };
console.log(f(3)); // 9
console.log(f(5)); // 25
f = function (x) { return 2 * x; };
console.log(f(3)); // 6
console.log(f(5)); // 10
f = undefined;
// console.log(f(3)); // TypeError: f is not a function(…)

console.log('###############################');

function repeatIt(count, func) {
  for (let i = 1; i <= count; i++) {
    func(i);
  }
}

let starsFunc = function (i) {
  console.log('**'.repeat(i));
};
repeatIt(3, starsFunc);
repeatIt(3, function (x) { console.log(2 * x); });

console.log('###############################');

(function (count) {
  for (let i = 1; i <= count; i++) {
    console.log('+'.repeat(i));
  }
})(4);

console.log('###############################');

f = (function () {
  let x = 0;
  return function () {
    console.log(++x);
  };
})();
f();
f();
f();
f();

console.log('###############################');

let increment = x => x + 1;
console.log(increment(5));

console.log('###############################');

let summing = (a, b) => a + b;
console.log(summing(5, 6)); // 11

console.log('###############################');
