function distanceBetweenPoints(xA, yA, xB, yB) {
  const pointA = {x: xA, y: yA};
  const pointB = {x: xB, y: yB};
  const distanceX = Math.pow(pointA.x - pointB.x, 2);
  const distanceY = Math.pow(pointA.y - pointB.y, 2);
  return Math.sqrt(distanceX + distanceY);
}

console.log(distanceBetweenPoints(2, 4, 5, 0));
