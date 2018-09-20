function distanceOverTime(input) {
  const speedA = input[0] * 1000;
  const speedB = input[1] * 1000;
  const time = input[2] / 3600;
  const distance = Math.abs((speedA - speedB) * time);
  console.log(distance);
}

distanceOverTime([0, 60, 3600]);
distanceOverTime([11, 10, 120]);
distanceOverTime([5, -5, 40]);
