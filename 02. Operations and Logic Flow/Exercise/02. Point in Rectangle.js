function pointInRectangle(input) {
  const [x, y, xMin, xMax, yMin, yMax] = input;
  const isInside = x >= xMin && x <= xMax && y >= yMin && y <= yMax;
  console.log(isInside ? 'inside' : 'outside');
}

pointInRectangle([8, -1, 2, 12, -3, 3]);
pointInRectangle([12.5, -1, 2, 12, -3, 3]);
