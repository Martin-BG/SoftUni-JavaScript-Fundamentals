function aggregateTable(lines) {
  let sum = 0;
  let list = [];
  for (let line of lines) {
    let townData = line.split('|');
    list.push(townData[1].trim());
    sum += Number(townData[2].trim());
  }
  console.log(list.join(', ') + '\n' + sum);
}

aggregateTable([
  '| Sofia           | 300',
  '| Veliko Tarnovo  | 500',
  '| Yambol          | 275'
]);
