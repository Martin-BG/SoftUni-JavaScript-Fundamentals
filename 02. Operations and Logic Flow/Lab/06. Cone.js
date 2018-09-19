function cone(r, h) {
  const volume = Math.PI * r * r * h / 3;
  const area = Math.PI * r * (r + Math.sqrt(r * r + h * h));
  console.log('volume = ' + volume);
  console.log('area = ' + area);
}

cone(3, 5);
cone(3.3, 7.8);
