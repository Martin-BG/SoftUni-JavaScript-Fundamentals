function cookingByNumbers([initialValue, ...orders]) {
  let value = +initialValue;

  const chop = () => value /= 2;
  const dice = () => value = Math.sqrt(value);
  const spice = () => value += 1;
  const bake = () => value *= 3;
  const fillet = () => value *= 0.8;

  const evaluate = (order) => {
    switch (order) {
      case 'chop':
        chop();
        break;
      case 'dice':
        dice();
        break;
      case 'spice':
        spice();
        break;
      case 'bake':
        bake();
        break;
      case 'fillet':
        fillet();
        break;
      default:
        break;
    }
  };

  for (let i = 0; i < orders.length; i++) {
    evaluate(orders[i]);
    console.log(value);
  }
}

cookingByNumbers(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
cookingByNumbers(['9', 'dice', 'spice', 'chop', 'bake', 'fillet']);
