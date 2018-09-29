let capitals = ['Sofia', 'Washington', 'London', 'Paris'];

console.log('########################');
for (let capital of capitals) {
  console.log(capital);
}
console.log('########################');
for (let i in capitals) {
  console.log(i + ' ' + capitals[i]);
}
console.log('########################');
for (let i = 0; i < capitals.length; i++) {
  console.log(capitals[i]);
}
console.log('########################');
capitals.forEach(capital => console.log(capital));

console.log('########################');
capitals.forEach((capital, i) =>
  console.log(i + ' -> ' + capital)
);
console.log('########################');
console.log(capitals.join(', '));

console.log('########################');
console.log(JSON.stringify(capitals));

console.log('########################');
let nums = [10, 20, 30];
nums[4] = 50; // Will resize the array
console.log(nums); // [10, 20, 30, ,50]
console.log(nums.length); // 5
console.log(nums[3]); // undefined
console.log(nums[-5]); // undefined
nums[-5] = -5; // Will not resize the array (invalid index)!
console.log([nums[-5], nums.length]); // [-5, 5]
console.log(nums[100]); // undefined
nums[100] = 100; // Will resize the array
console.log([nums[100], nums.length]); // [100, 101]

console.log('########################');
nums = [10, 20, 30];
console.log(nums.join('|')); // 10|20|30
nums.push(40);
console.log(nums.join('|')); // 10|20|30|40
let tail = nums.pop(); // tail = 40
console.log(nums.join('|')); // 10|20|30
nums.unshift(0);
console.log(nums.join('|')); // 0|10|20|30
let head = nums.shift(); // head = 0
console.log(nums.join('|')); // 10|20|30

console.log('########################');
nums = ['one', 'two', 'three', 'four'];
console.log(nums.join('|')); // one|two|three|four
let firstNums = nums.slice(0, 2); // start, end+1
console.log(firstNums.join('|')); // one|two
let lastNums = nums.slice(2, 4); // start, end+1
console.log(lastNums.join('|')); // three|four
let midNums = nums.slice(1, 3); // start, end+1
console.log(midNums.join('|')); // two|three

console.log('########################');
nums = [5, 10, 15, 20, 25, 30];
console.log(nums.join('|')); // 5|10|15|20|25|30
let mid = nums.splice(2, 3); // start, delete-count
console.log(mid.join('|')); // 15|20|25
console.log(nums.join('|')); // 5|10|30
nums = [5, 10, 15, 20, 25, 30];
nums.splice(3, 2, 'twenty', 'twenty-five');
console.log(nums.join('|')); // 5|10|15|twenty|twenty-five|30

console.log('########################');
nums = ['one', 'two', 'three', 'four'];
console.log(nums.join('|')); // one|two|three|four
let filteredNums = nums.filter(x => x.startsWith('t'));
console.log(filteredNums.join('|')); // two|three
let lengths = nums.map(x => x.length);
console.log(lengths.join('|')); // 3|3|5|4
lengths = nums.map(x => [x.length, x[0]]);
console.log(lengths.join('|')); // 3,o|3,t|5,t|4,f

console.log('########################');
nums = [1, 2, 3, 4];
let numsSum = nums.reduce((a, b) => a + b);
console.log(numsSum); // 10
let reversedNums = nums.reverse();
console.log(reversedNums); // [4, 3, 2, 1]
let allNums = nums.concat(reversedNums);
console.log(allNums); // [4, 3, 2, 1, 4, 3, 2, 1]
let includes = allNums.includes(4);
let index = allNums.indexOf(4);
console.log(includes, index); // true 0

console.log('########################');
nums = [20, 40, 10, 30, 100, 5];
console.log(nums.join('|')); // 20|40|10|30|100|5
nums.sort(); // Works incorrectly on arrays of numbers!!!
console.log(nums.join('|')); // 10|100|20|30|40|5
nums.sort((a, b) => a - b); // Compare elements as numbers
console.log(nums.join('|')); // 5|10|20|30|40|100

console.log('########################');
let matrix = [
  ['0,0', '0,1', '0,2'],
  ['1,0', '1,1', '1,2'],
  ['2,0', '2,1', '2,2']
];
console.log(matrix.map(row => row.join(' ')).join('\n'));

console.log('########################');
