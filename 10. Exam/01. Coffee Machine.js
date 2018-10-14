function coffeeMachine(input) {

  const processOrder = (order) => {
    let details = order.split(', ');
    const money = +details[0];

    let totalCost = 0.8;
    if (details.includes('decaf')) {
      totalCost = 0.9;
    }

    if (details.includes('milk')) {
      totalCost += +((totalCost * 0.1).toFixed(1));
    }

    if (details[details.length - 1] !== '0') {
      totalCost += 0.1;
    }

    if (money >= totalCost) {
      console.log(`You ordered ${details[1]}. Price: ${totalCost.toFixed(2)}$ Change: ${(money - totalCost).toFixed(2)}$`);
      return totalCost;
    } else {
      console.log(`Not enough money for ${details[1]}. Need ${(totalCost - money).toFixed(2)}$ more.`);
      return 0;
    }
  };

  let totalIncome = 0;
  for (let inp of input) {
    totalIncome += processOrder(inp);
  }
  console.log(`Income Report: ${totalIncome.toFixed(2)}$`);
}

coffeeMachine([
  '1.00, coffee, caffeine, milk, 4',
  '0.40, tea, milk, 2',
  '1.00, coffee, decaf, 0',
]);

coffeeMachine([
  '8.00, coffee, decaf, 4',
  '1.00, tea, 2',
]);
