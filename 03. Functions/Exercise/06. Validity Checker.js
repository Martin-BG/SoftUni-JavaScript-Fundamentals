function validityChecker([xA, yA, xB, yB]) {
  const o = {x: 0, y: 0};
  const a = {x: +xA, y: +yA};
  const b = {x: +xB, y: +yB};

  const getDistance = (pointA, pointB) => {
    return Math.sqrt(
      Math.pow(pointB.x - pointA.x, 2) +
      Math.pow(pointB.y - pointA.y, 2)
    );
  };

  const isDistanceValid = (pointA, pointB) => {
    return Number.isInteger(getDistance(pointA, pointB));
  };

  const pointToString = (point) => {
    return `{${point.x}, ${point.y}}`;
  };

  const validatePoints = (pointA, pointB) => {
    const isValid = isDistanceValid(pointA, pointB) ? 'valid' : 'invalid';
    console.log(`${pointToString(pointA)} to ${pointToString(pointB)} is ${isValid}`);
  };

  validatePoints(a, o);
  validatePoints(b, o);
  validatePoints(a, b);
}

validityChecker([3, 0, 0, 4]);
validityChecker([2, 1, 1, 1]);
