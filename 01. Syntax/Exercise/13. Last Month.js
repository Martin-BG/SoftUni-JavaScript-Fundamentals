function lastMonth([day, month, year]) {
  const date = new Date(year, month - 1, 0);
  console.log(date.getDate());
}

lastMonth([17, 3, 2002]);
lastMonth([13, 12, 2004]);
