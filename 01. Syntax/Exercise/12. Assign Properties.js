function assignProperties(input) {
  let obj = {
    [input[0]]: input[1],
    [input[2]]: input[3],
    [input[4]]: input[5]
  };
  console.log(obj);
}

assignProperties(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);

function assignPropertiesTwo(input) {
  let obj = {};
  obj[input[0]] = input[1];
  obj[input[2]] = input[3];
  obj[input[4]] = input[5];
  console.log(obj);
}

assignPropertiesTwo(['name', 'Pesho', 'age', '23', 'gender', 'male']);
assignPropertiesTwo(['ssid', '90127461', 'status', 'admin', 'expires', '600']);
