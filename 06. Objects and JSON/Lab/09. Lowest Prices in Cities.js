function lowestPricesInCities(samples) {
  let products = new Map();
  samples.forEach((sample) => {
    const [city, product, price] = sample.split(/\s*\|\s*/);
    if (!products.has(product)) {
      products.set(product, new Map());
    }
    products.get(product).set(city, +price);
  });
  products.forEach((cities, product) => {
    let bestCity = '';
    let bestPrice = Number.MAX_VALUE;
    cities.forEach((price, city) => {
      if (price < bestPrice) {
        bestPrice = price;
        bestCity = city;
      }
    });
    console.log(`${product} -> ${bestPrice} (${bestCity})`);
  });
}

lowestPricesInCities([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);

lowestPricesInCities([
  'Sofia City | Audi | 100000',
  'Sofia City | BMW | 100000',
  'Sofia City | Mitsubishi | 10000',
  'Sofia City | Mercedes | 10000',
  'Sofia City | NoOffenseToCarLovers | 0',
  'Mexico City | Audi | 1000',
  'Mexico City | BMW | 99999',
  'New York City | Mitsubishi | 10000',
  'New York City | Mitsubishi | 1000',
  'Mexico City | Audi | 100000',
  'Washington City | Mercedes | 1000',
]);
