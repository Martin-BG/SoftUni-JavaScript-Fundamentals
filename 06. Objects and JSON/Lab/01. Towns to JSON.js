function townsToJson(towns) {
  let townsArr = [];
  for (const town of towns.slice(1)) {
    const [ignored, townName, latitude, longitude] = town.split(/\s*\|\s*/);
    const townObj = {
      Town: townName,
      Latitude: +latitude,
      Longitude: +longitude,
    };
    townsArr.push(townObj);
  }
  return JSON.stringify(townsArr);
}

console.log(townsToJson([
  '| Town | Latitude | Longitude |',
  '| Sofia | 42.696552 | 23.32601 |',
  '| Beijing | 39.913818 | 116.363625 |',
]));

console.log(townsToJson([
  '| Town | Latitude | Longitude |',
  '| Veliko Turnovo | 43.0757 | 25.6172 |',
  '| Monatevideo | 34.50 | 56.11 |',
]));
