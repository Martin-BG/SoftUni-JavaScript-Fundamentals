function fruitOrVegetable(food) {
  switch (food) {
    case 'banana':
    case 'apple':
    case 'kiwi':
    case 'cherry':
    case 'lemon':
    case 'grapes':
    case 'peach':
      console.log('fruit');
      break;
    case 'tomato':
    case 'cucumber':
    case 'pepper':
    case 'onion':
    case 'parsley':
    case 'garlic':
      console.log('vegetable');
      break;
    default:
      console.log('unknown');
  }
}

fruitOrVegetable('lemon');
fruitOrVegetable('peach');
fruitOrVegetable('onion');
fruitOrVegetable('pizza');

function fruitOrVegetableWithArrays(food) {
  const fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
  const vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'parsley', 'garlic'];

  if (fruits.indexOf(food) > -1) {
    console.log('fruit');
  } else if (vegetables.indexOf(food) > -1) {
    console.log('vegetable');
  } else {
    console.log('unknown');
  }
}

fruitOrVegetableWithArrays('lemon');
fruitOrVegetableWithArrays('peach');
fruitOrVegetableWithArrays('onion');
fruitOrVegetableWithArrays('pizza');
