function populationInTowns(dataRows) {
  let total = new Map();
  for (const dataRow of dataRows) {
    const [town, population] = dataRow.split(/\s*<->\s*/);
    if (total.has(town)) {
      total.set(town, +population + total.get(town));
    } else {
      total.set(town, +population);
    }
  }
  for (const [town, sum] of total) {
    console.log(town + ' : ' + sum);
  }
}

populationInTowns([
  'Sofia <-> 1200000',
  'Montana <-> 20000',
  'New York <-> 10000000',
  'Washington <-> 2345000',
  'Las Vegas <-> 1000000',
]);

populationInTowns([
  'Istanbul <-> 100000',
  'Honk Kong <-> 2100004',
  'Jerusalem <-> 2352344',
  'Mexico City <-> 23401925',
  'Istanbul <-> 1000',
]);
