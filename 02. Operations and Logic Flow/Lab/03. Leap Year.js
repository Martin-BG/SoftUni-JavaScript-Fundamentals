function leapYear(year) {
  const leap = (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
  console.log(leap ? 'yes' : 'no');
}

leapYear(1980);
leapYear(1900);
leapYear(2000);
leapYear(2001);
