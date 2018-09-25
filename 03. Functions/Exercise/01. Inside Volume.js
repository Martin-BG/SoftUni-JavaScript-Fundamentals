function insideVolume(input) {
  const inVolume = ([x, y, z]) => {
    const [xA, xB, yA, yB, zA, zB] = [10, 50, 20, 80, 15, 50];
    const isWithin = (a, b, x) => {return a <= x && x <= b;};
    return isWithin(xA, xB, x) && isWithin(yA, yB, y) && isWithin(zA, zB, z);
  };

  for (let i = 0; i < input.length; i += 3) {
    console.log(inVolume(input.slice(i, i + 3)) ? 'inside' : 'outside');
  }
}

insideVolume([8, 20, 22]);
insideVolume([
  13.1, 50, 31.5,
  50, 80, 50,
  -5, 18, 43]);
