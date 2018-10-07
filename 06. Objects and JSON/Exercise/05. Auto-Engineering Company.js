function autoEngineeringCompany(input) {
  let cars = new Map();
  input.forEach(entry => {
    const [brand, model, count] = entry.split(' | ');
    if (!cars.has(brand)) {
      cars.set(brand, new Map());
    }
    const previous = cars.get(brand).get(model);
    const totalProduced = previous ? +count + previous : +count;
    cars.get(brand).set(model, totalProduced);
  });
  cars.forEach((models, brand) => {
    console.log(brand);
    models.forEach((produced, model) => {
      console.log(`###${model} -> ${produced}`);
    });
  });
}

autoEngineeringCompany([
  'Audi | Q7 | 1000',
  'Audi | Q6 | 100',
  'BMW | X5 | 1000',
  'BMW | X6 | 100',
  'Citroen | C4 | 123',
  'Volga | GAZ-24 | 1000000',
  'Lada | Niva | 1000000',
  'Lada | Jigula | 1000000',
  'Citroen | C4 | 22',
  'Citroen | C5 | 10',
]);
