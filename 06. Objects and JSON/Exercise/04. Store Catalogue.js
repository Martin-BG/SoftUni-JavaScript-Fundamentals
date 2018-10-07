function storeCatalogueMap(input) {
  let catalogue = new Map();
  input.forEach(product => {
    const [name, price] = product.split(' : ') || [];
    catalogue.set(name, +price);
  });

  let index = null;
  [...catalogue]
    .sort((a, b) => a[0].localeCompare(b[0]))
    .forEach(product => {
      if (product[0][0] !== index) {
        index = product[0][0];
        console.log(index);
      }
      console.log(` ${product[0]}: ${product[1]}`);
    });
}

function storeCatalogueObject(input) {
  let catalogue = [];
  input.forEach(product => {
    const [name, price] = product.split(' : ') || [];
    catalogue.push({name, price: +price});
  });

  let index = null;
  catalogue
    .sort((a, b) => a.name.localeCompare(b.name))
    .forEach(product => {
      if (product.name[0] !== index) {
        index = product.name[0];
        console.log(index);
      }
      console.log(` ${product.name}: ${product.price}`);
    });
}

storeCatalogueMap([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);

storeCatalogueMap([
  'Banana : 2',
  'Rubic\'s Cube : 5',
  'Raspberry P : 4999',
  'Rolex : 100000',
  'Rollon : 10',
  'Rali Car : 2000000',
  'Pesho : 0.000001',
  'Barrel : 10',
]);
