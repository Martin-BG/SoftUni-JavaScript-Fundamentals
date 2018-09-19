function triangleArea(a, b, c) {
  const sp = (a + b + c) / 2;
  return Math.sqrt(sp * (sp - a) * (sp - b) * (sp - c));
}

console.log(triangleArea(2, 3.5, 4));
