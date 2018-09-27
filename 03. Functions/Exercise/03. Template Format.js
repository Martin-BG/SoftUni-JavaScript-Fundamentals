function templateFormat(input) {
  let lines = ['<?xml version="1.0" encoding="UTF-8"?>', '<quiz>'];
  for (let i = 0; i < input.length; i += 2) {
    lines.push('  <question>');
    lines.push(`    ${input[i]}`);
    lines.push('  </question>');
    lines.push('  <answer>');
    lines.push(`    ${input[i + 1]}`);
    lines.push('  </answer>');
  }
  lines.push('</quiz>');
  return lines.join('\n');
}

console.log(templateFormat([
  'Who was the forty-second president of the U.S.A.?',
  'William Jefferson Clinton',
]));

console.log(templateFormat([
  'Dry ice is a frozen form of which gas?',
  'Carbon Dioxide',
  'What is the brightest star in the night sky?',
  'Sirius',
]));
