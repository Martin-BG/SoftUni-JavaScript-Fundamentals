function sumByTown(arr) {
  let sums = {};
  for (let i = 0; i < arr.length; i += 2) {
    const [town, income] = [arr[i], +arr[i + 1]];
    if (sums[town] === undefined) {
      sums[town] = income;
    } else {
      sums[town] += income;
    }
  }
  return JSON.stringify(sums);
}

console.log(sumByTown([
  'Sofia', '20',
  'Varna', '3',
  'Sofia', '5',
  'Varna', '4',
]));

console.log(sumByTown([
  'Sofia', '20',
  'Varna', '3',
  'sofia', '5',
  'varna', '4',
]));
