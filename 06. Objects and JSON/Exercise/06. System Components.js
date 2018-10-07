function systemComponents(input) {
  let systems = new Map();

  input.forEach(entry => {
    const [system, component, subComponent] = entry.split(/\s*\|\s*/);
    if (!systems.has(system)) {
      systems.set(system, new Map());
    }
    if (!systems.get(system).has(component)) {
      systems.get(system).set(component, []);
    }
    systems.get(system).get(component).push(subComponent);
  });

  [...systems]
    .sort((a, b) => b[1].size - a[1].size || a[0].toLowerCase().localeCompare(b[0].toLowerCase()))
    .forEach(system => { // Sorted systems
      console.log(system[0]);
      [...system[1]]
        .sort((a, b) => b[1].length - a[1].length)
        .forEach(component => { // Sorted components
          console.log(`|||${component[0]}`);
          component[1].forEach(subComponent => {
            console.log(`||||||${subComponent}`);
          });
        });
    });
}

systemComponents([
  'SULS | Main Site | Home Page',
  'SULS | Main Site | Login Page',
  'SULS | Main Site | Register Page',
  'SULS | Judge Site | Login Page',
  'SULS | Judge Site | Submittion Page',
  'Lambda | CoreA | A23',
  'SULS | Digital Site | Login Page',
  'Lambda | CoreB | B24',
  'Lambda | CoreA | A24',
  'Lambda | CoreA | A25',
  'Lambda | CoreC | C4',
  'Indice | Session | Default Storage',
  'Indice | Session | Default Security',
]);
