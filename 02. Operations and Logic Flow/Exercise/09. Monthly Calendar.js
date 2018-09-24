function calendar([day, month, year]) {
  let date = new Date(year, month - 1, 1);
  const today = new Date(year, month - 1, day);
  const daysInMonth = new Date(year, month, 0).getDate();

  while (date.getDay() !== 0) {
    date.setDate(date.getDate() - 1);
  }

  let html = '<table>\n' +
    '<tr><th>Sun</th><th>Mon</th><th>Tue</th><th>Wed</th><th>Thu</th><th>Fri</th><th>Sat</th></tr>\n';

  date.setDate(date.getDate() - 1);
  for (; ;) {
    date.setDate(date.getDate() + 1);
    if (date.getDay() === 0) {
      html += '<tr>';
    }

    let dateClass = '';
    if (date.getTime() === today.getTime()) {
      dateClass = ' class="today"';
    } else if (date.getMonth() !== today.getMonth()) {
      if (date.getTime() < today.getTime()) {
        dateClass = ' class="prev-month"';
      } else {
        dateClass = ' class="next-month"';
      }
    }

    html += `<td${dateClass}>${date.getDate()}</td>`;

    if (date.getDay() === 6) {
      html += '</tr>\n';
      if (date.getDate() === daysInMonth || (date.getMonth() !== today.getMonth() && date.getTime() > today.getTime())) {
        break;
      }
    }
  }

  html += '</table>';
  return html;
}

console.log(calendar([4, 9, 2016]));
console.log(calendar([24, 12, 2012]));
