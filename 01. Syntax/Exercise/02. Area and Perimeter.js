function calcAreaAndPerimeter(a, b) {
  const area = a * b;
  const perimeter = (a + b) * 2;
  console.log(Math.floor(area * 100) / 100);
  console.log(Math.floor(perimeter * 100) / 100);
}

calcAreaAndPerimeter(2, 2);
calcAreaAndPerimeter(1, 3);
calcAreaAndPerimeter(2.5, 3.14);
