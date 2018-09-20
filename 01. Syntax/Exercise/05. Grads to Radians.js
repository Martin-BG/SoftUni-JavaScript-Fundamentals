function gradsToDegrees(grads) {
  let degrees = grads / 400 * 360;
  degrees %= 360;
  if (degrees < 0) {
    degrees += 360;
  }
  console.log(degrees);
}

gradsToDegrees(100);
gradsToDegrees(400);
gradsToDegrees(850);
gradsToDegrees(-50);
