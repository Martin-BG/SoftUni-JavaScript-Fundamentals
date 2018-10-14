function ticketsScan(text, command) {
  const namePattern = / ([A-Z][a-zA-Z]*)-(([A-Z][a-zA-Z]*.)-)?([A-Z][a-zA-Z]*)/g;
  const airportPattern = / ([A-Z]{3})\/([A-Z]{3})/g;
  const companyNamePattern = /- ([A-Z][a-zA-Z]*)\*([A-Z][a-zA-Z]*) /g;
  const flightNumberPattern = / ([A-Z]{1,3}[0-9]{1,5}) /g;

  const name = namePattern.exec(text);
  const airport = airportPattern.exec(text);
  const companyName = companyNamePattern.exec(text);
  const flightNumber = flightNumberPattern.exec(text);

  let fullName = name[1] + ' ';
  if (name[3]) {
    fullName += name[3] + ' ';
  }
  fullName += name[4];

  if (command === 'name') {
    console.log(`Mr/Ms, ${fullName}, have a nice flight!`);
  } else if (command === 'flight') {
    console.log(`Your flight number ${flightNumber[1]} is from ${airport[1]} to ${airport[2]}.`);
  } else if (command === 'company') {
    console.log(`Have a nice flight with ${companyName[1] + ' ' + companyName[2]}.`);
  } else if (command === 'all') {
    console.log(`Mr/Ms, ${fullName}, your flight number ${flightNumber[1]} is from ${airport[1]} to ${airport[2]}. Have a nice flight with ${companyName[1] + ' ' + companyName[2]}.`);
  }
}

ticketsScan(
  'ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
  'all'
);

ticketsScan(
  'ahah TEST-T.-TESTOV )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
  'name'
);

ticketsScan(
  'ahah TEST-T.-TESTOV )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
  'flight'
);

ticketsScan(
  'ahah TEST-T.-TESTOV )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ',
  'company'
);

ticketsScan(
  ' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ',
  'flight'
);
