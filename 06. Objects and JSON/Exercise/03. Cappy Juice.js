function cappyJuice(input) {
  const bottleVolume = 1000;
  let juices = new Map();
  let bottles = new Set();
  input.forEach(income => {
    const [juice, quantity] = income.split(/\s+=>\s+/);
    if (juices.has(juice)) {
      juices.set(juice, +quantity + juices.get(juice));
    } else {
      juices.set(juice, +quantity);
    }
    if (!bottles.has(juice) && juices.get(juice) >= bottleVolume) {
      bottles.add(juice);
    }
  });
  bottles.forEach(juice => {
    console.log(`${juice} => ${Math.floor(juices.get(juice) / bottleVolume)}`);
  });
}

cappyJuice([
  'Orange => 2000',
  'Peach => 1432',
  'Banana => 450',
  'Peach => 600',
  'Strawberry => 549',
]);

cappyJuice([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);
