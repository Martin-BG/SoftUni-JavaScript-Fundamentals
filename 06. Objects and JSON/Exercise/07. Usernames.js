function usernames(input) {
  let names = new Set();
  input.forEach(name => names.add(name));
  console.log([...names]
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .join('\n')
  );
}

usernames([
  'Ashton',
  'Kutcher',
  'Ariel',
  'Lilly',
  'Keyden',
  'Aizen',
  'Billy',
  'Braston',
]);

usernames([
  'Denise',
  'Ignatius',
  'Iris',
  'Isacc',
  'Indie',
  'Dean',
  'Donatello',
  'Enfuego',
  'Benjamin',
  'Biser',
  'Bounty',
  'Renard',
  'Rot',
]);
