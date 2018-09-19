function filterByAge(minAge, nameA, ageA, nameB, ageB) {
  const personA = {name: nameA, age: ageA};
  const personB = {name: nameB, age: ageB};

  function validateAndLog(person) {
    if (person.age >= minAge) {
      console.log(person);
    }
  }

  validateAndLog(personA);
  validateAndLog(personB);
}

filterByAge(12, 'Ivan', 15, 'Asen', 9);
filterByAge(3, 'Ivan', 15, 'Asen', 9);
