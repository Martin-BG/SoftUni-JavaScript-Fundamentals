function sumAndVat(input) {
  const sum = input.reduce((a, b) => a + b, 0);
  const vat = sum * 0.2;
  const total = sum + vat;

  console.log(`sum = ${sum}`);
  console.log(`VAT = ${vat}`);
  console.log(`total = ${total}`);
}

sumAndVat([1.20, 2.60, 3.50]);
sumAndVat([3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445]);

function sumAndVatVarArgs() {
  const calcSum = [...arguments].reduce((a, b) => a + b, 0);
  const vat = calcSum * 0.2;
  const total = calcSum + vat;

  console.log(`calcSum = ${calcSum}`);
  console.log(`VAT = ${vat}`);
  console.log(`total = ${total}`);
}

sumAndVatVarArgs(1.20, 2.60, 3.50);
sumAndVatVarArgs(3.12, 5, 18, 19.24, 1953.2262, 0.001564, 1.1445);
