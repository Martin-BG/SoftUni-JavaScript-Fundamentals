function cityMarkets(sales) {
  let citiesWithSales = new Map();
  for (const sale of sales) {
    const [town, product, quantityPrice] = sale.split(/\s*->\s*/);
    const [quantity, price] = quantityPrice.split(/\s*:\s*/);
    if (!citiesWithSales.has(town)) {
      citiesWithSales.set(town, new Map());
    }
    let income = +quantity * +price;
    let oldIncome = citiesWithSales.get(town).get(product);
    if (oldIncome) {
      income += oldIncome;
    }
    citiesWithSales.get(town).set(product, income);
  }

  citiesWithSales.forEach((sales, city) => {
    console.log(`Town - ${city}`);
    sales.forEach((income, product) => {
      console.log(`$$$${product} : ${income}`);
    });
  });
}

cityMarkets([
  'Sofia -> Laptops HP -> 200 : 2000',
  'Sofia -> Raspberry -> 200000 : 1500',
  'Sofia -> Audi Q7 -> 200 : 100000',
  'Montana -> Portokals -> 200000 : 1',
  'Montana -> Qgodas -> 20000 : 0.2',
  'Montana -> Chereshas -> 1000 : 0.3',
]);
