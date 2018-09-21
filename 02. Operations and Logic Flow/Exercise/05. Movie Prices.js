function moviePrices(movie) {
  const days = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
  const movies = {
    'the godfather': [12, 10, 15, 12.50, 15, 25, 30],
    'schindler\'s list': [8.50, 8.50, 8.50, 8.50, 8.50, 15, 15],
    'casablanca': [8, 8, 8, 8, 8, 10, 10],
    'the wizard of oz': [10, 10, 10, 10, 10, 15, 15],
  };

  const title = movie[0].toLowerCase();
  const day = movie[1].toLowerCase();
  const dayIndex = days.indexOf(day);

  if (dayIndex !== -1 && movies[title]) {
    console.log(movies[title][dayIndex]);
  } else {
    console.log('error');
  }
}

moviePrices(['The Godfather', 'Friday']);
moviePrices(['casablanca', 'sunday']);
moviePrices(['Schindler\'s LIST', 'monday']);
moviePrices(['casablanca', 'Nineday']);
moviePrices(['SoftUni', 'monDAY']);
