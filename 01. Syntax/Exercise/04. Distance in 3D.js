function distanceInThreeD([xA, yA, zA, xB, yB, zB]) {
  const distance = Math.sqrt(
    Math.pow((xA - xB), 2) +
    Math.pow((yA - yB), 2) +
    Math.pow((zA - zB), 2)
  );
  console.log(distance);
}

distanceInThreeD([1, 1, 0, 5, 4, 0]);
distanceInThreeD([3.5, 0, 1, 0, 2, -1]);
