function addAndRemoveElements(commands) {
  let elements = [];
  let step = 0;
  commands.forEach((command) => {
    ++step;
    if (command === 'add') {
      elements.push(step);
    } else if (command === 'remove' && elements.length > 0) {
      elements.pop();
    }
  });
  console.log(elements.length > 0 ? elements.join('\n') : 'Empty');
}

addAndRemoveElements([
  'add',
  'add',
  'add',
  'add',
]);

addAndRemoveElements([
  'add',
  'add',
  'remove',
  'add',
  'add',
]);

addAndRemoveElements([
  'remove',
  'remove',
  'remove',
]);
