function circleArea(r) {
  const area = Math.PI * r * r;
  const areaRounded = Math.round(area * 100) / 100;
  console.log(area);
  console.log(areaRounded);
}

circleArea(5);
