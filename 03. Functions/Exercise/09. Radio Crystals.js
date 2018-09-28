function radioCrystals([targetThickness, ...chunks]) {
  const transportingAndWashing = (value) => {
    console.log('Transporting and washing');
    return Math.floor(value);
  };

  const operations = [
    {name: 'Cut', worker: (chunk) => chunk / 4},
    {name: 'Lap', worker: (chunk) => chunk * 0.8},
    {name: 'Grind', worker: (chunk) => chunk - 20},
    {name: 'Etch', worker: (chunk) => chunk - 2},
    {name: 'X-ray', worker: (chunk) => chunk + 1},
  ];

  const process = (target, chunk, operation) => {
    let used = 0;

    if (operation.name !== 'X-ray') {
      while (operation.worker(chunk) >= target - 1) {
        ++used;
        chunk = operation.worker(chunk);
      }
    } else {
      if (operation.worker(chunk) === target) {
        ++used;
        chunk = operation.worker(chunk);
      }
    }

    if (used) {
      console.log(`${operation.name} x${used}`);
      if (operation.name !== 'X-ray') {
        chunk = transportingAndWashing(chunk);
      }
    }

    return chunk;
  };

  const processChunk = (target, chunk) => {
    console.log(`Processing chunk ${chunk} microns`);
    operations.forEach((operation) => chunk = process(targetThickness, chunk, operation));
    console.log(`Finished crystal ${chunk} microns`);
  };

  chunks.forEach((chunk) => processChunk(targetThickness, chunk));
}

radioCrystals([1375, 50000]);
radioCrystals([1000, 4000, 8100]);
