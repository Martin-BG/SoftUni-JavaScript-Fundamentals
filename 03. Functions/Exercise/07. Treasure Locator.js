function treasureLocator(coordinates) {
  const islands = [
    {name: 'Tokelau', xA: 8, yA: 0, xB: 9, yB: 1},
    {name: 'Tuvalu', xA: 1, yA: 1, xB: 3, yB: 3},
    {name: 'Samoa', xA: 5, yA: 3, xB: 7, yB: 6},
    {name: 'Tonga', xA: 0, yA: 6, xB: 2, yB: 8},
    {name: 'Cook', xA: 4, yA: 7, xB: 9, yB: 8},
  ];

  const treasures = coordinates.reduce((points, value, index) => {
    if (index % 2 === 0) {
      points.push({x: value});
    } else {
      points[points.length - 1].y = value;
    }
    return points;
  }, []);

  const isBetween = (start, end, val) => {
    return start <= val && val <= end;
  };

  const isWithin = (island, treasure) => {
    return isBetween(island.xA, island.xB, treasure.x) && isBetween(island.yA, island.yB, treasure.y);
  };

  treasures.forEach((treasure) => {
    let result = 'On the bottom of the ocean';
    for (const island of islands) {
      if (isWithin(island, treasure)) {
        result = island.name;
        break;
      }
    }
    console.log(result);
  });
}

treasureLocator([4, 2, 1.5, 6.5, 1, 3]);
treasureLocator([6, 4]);
