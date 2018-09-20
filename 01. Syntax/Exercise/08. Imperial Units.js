function toImperialUnits(input) {
  let feet = Math.floor(input / 12);
  let inches = input % 12;
  console.log(`${feet}'-${inches}"`);
}

toImperialUnits(36);
toImperialUnits(55);
toImperialUnits(11);
