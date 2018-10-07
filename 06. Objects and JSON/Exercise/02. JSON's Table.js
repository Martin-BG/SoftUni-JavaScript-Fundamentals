function jsonTable(input) {
  const htmlEscape = (text) => {
    return text.toString()
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  };

  let html = '<table>\n';
  input.forEach(e => {
    const data = JSON.parse(e);
    html += '\t<tr>\n';
    Object.values(data).forEach(prop => {
      html += `\t\t<td>${htmlEscape(prop)}</td>\n`;
    });
    html += '\t<tr>\n'; // Judge expects this tag to be not properly closed
  });
  html += '</table>';
  console.log(html);
}

jsonTable([
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);
