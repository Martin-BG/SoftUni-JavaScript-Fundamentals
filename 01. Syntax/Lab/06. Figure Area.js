function figureArea(wA, hA, wB, hB) {
  const [areaA, areaB, intersectionArea] = [
    wA * hA,
    wB * hB,
    Math.min(wA, wB) * Math.min(hA, hB)];
  return areaA + areaB - intersectionArea;
}

console.log(figureArea(2, 4, 5, 3));
