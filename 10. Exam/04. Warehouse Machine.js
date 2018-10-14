function warehouseMachine(input) {

  let warehouse = new Map();

  const printCoffee = (coffeeObj) => {
    console.log(`-> ${coffeeObj.name} -> ${coffeeObj.expireDate} -> ${coffeeObj.quantity}.`);
  };

  const processIn = (warehouse, tokens) => {
    const brand = tokens[1];
    const name = tokens[2];
    const expireDate = tokens[3];
    const quantity = +tokens[4];
    if (!warehouse.get(brand)) {
      warehouse.set(brand, new Map());
    }

    if (!warehouse.get(brand).get(name)) {
      warehouse.get(brand).set(name, {name, expireDate, quantity: 0});
    }

    if (warehouse.get(brand).get(name).expireDate < expireDate) {
      warehouse.get(brand).set(name, {name, expireDate, quantity});
    } else if (warehouse.get(brand).get(name).expireDate === expireDate) {
      warehouse.get(brand).get(name).quantity += quantity;
    }
  };

  const processOut = (warehouse, tokens) => {
    const brand = tokens[1];
    const name = tokens[2];
    const expireDate = tokens[3];
    const quantity = +tokens[4];
    const br = warehouse.get(brand);
    let coffee = br ? br.get(name) : undefined;
    if (coffee && coffee.expireDate > expireDate && coffee.quantity >= quantity) {
      coffee.quantity -= quantity;
    }
  };

  const report = (warehouse) => {
    console.log('>>>>> REPORT! <<<<<');
    warehouse.forEach((coffees, brandName) => {
      console.log(`Brand: ${brandName}:`);
      coffees.forEach(printCoffee);
    });
  };

  const inspection = (warehouse) => {
    console.log('>>>>> INSPECTION! <<<<<');
    const sortedByBrand = Array.from(warehouse.keys()).sort();
    for (let brandName of sortedByBrand) {
      console.log(`Brand: ${brandName}:`);
      const brand = warehouse.get(brandName);
      const sortedByQuantity = Array.from(brand.values()).sort((a, b) => b.quantity - a.quantity);
      sortedByQuantity.forEach(printCoffee);
    }
  };

  for (let line of input) {
    let tokens = line.split(', ');
    if (tokens[0] === 'IN') {
      processIn(warehouse, tokens);
    } else if (tokens[0] === 'OUT') {
      processOut(warehouse, tokens);
    } else if (tokens[0] === 'REPORT') {
      report(warehouse);
    } else if (tokens[0] === 'INSPECTION') {
      inspection(warehouse);
    }
  }
}

warehouseMachine([
  'IN, Batdorf & Bronson, Espresso, 2025-05-25, 20',
  'IN, Folgers, Black Silk, 2023-03-01, 14',
  'IN, Lavazza, Crema e Gusto, 2023-05-01, 5',
  'IN, Lavazza, Crema e Gusto, 2023-05-02, 5',
  'IN, Folgers, Black Silk, 2022-01-01, 10',
  'IN, Lavazza, Intenso, 2022-07-19, 20',
  'OUT, Dallmayr, Espresso, 2022-07-19, 5',
  'OUT, Dallmayr, Crema, 2022-07-19, 5',
  'OUT, Lavazza, Crema e Gusto, 2020-01-28, 2',
  'REPORT',
  'INSPECTION',
]);
