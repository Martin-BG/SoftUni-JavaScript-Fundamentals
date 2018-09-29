function evenPositions(arr) {
  console.log(arr
    .filter(((value, index) => index % 2 === 0))
    .join(' ')
  );
}

evenPositions(['20', '30', '40']);
evenPositions(['5', '10']);
