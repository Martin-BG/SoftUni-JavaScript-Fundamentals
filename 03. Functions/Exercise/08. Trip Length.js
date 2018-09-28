function tripLength([xA, yA, xB, yB, xC, yC]) {
  const a = {x: +xA, y: +yA};
  const b = {x: +xB, y: +yB};
  const c = {x: +xC, y: +yC};

  const getDistance = (pointA, pointB) => {
    return Math.sqrt(
      Math.pow(pointB.x - pointA.x, 2) +
      Math.pow(pointB.y - pointA.y, 2)
    );
  };

  const distAtoB = getDistance(a, b);
  const distAtoC = getDistance(a, c);
  const distBtoC = getDistance(b, c);

  const routes = [
    {path: '1->2->3', distance: distAtoB + distBtoC},
    {path: '1->3->2', distance: distAtoC + distBtoC},
    {path: '2->1->3', distance: distAtoB + distAtoC},
  ];

  const bestRoute = routes
    .sort((routeA, routeB) => routeA.distance - routeB.distance)
    [0];

  console.log(`${bestRoute.path}: ${bestRoute.distance}`);
}

tripLength([0, 0, 2, 0, 4, 0]);
tripLength([5, 1, 1, 1, 5, 4]);
tripLength([-1, -2, 3.5, 0, 0, 2]);
