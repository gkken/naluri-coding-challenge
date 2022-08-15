const { generateDigitsOfPi } = require("./pi");
let piValue, circumString;

function calculateCircumference() {
  const SUN_RADIUS = 696_340n;
  const CIRCUM_CONST = 2n;
  let piDigitGenerator = generateDigitsOfPi();
  let piFirstDigit = piDigitGenerator.next().value;
  let piFractional = "";

  // Calculates one digit of Pi every 500ms
  setInterval(() => {
    let piWholeNum = piFirstDigit + piFractional;
    let circumBigInt = CIRCUM_CONST * BigInt(piWholeNum) * SUN_RADIUS;
    circumString = circumBigInt.toString();

    piValue =
      piWholeNum.length > 1 ? piFirstDigit + "." + piFractional : piFirstDigit;

    piFractional += piDigitGenerator.next().value;

    if (circumString.length > 7) {
      circumString = circumString.replace(/0+$/, ""); // Removes trailing zeros

      if (circumString.length > 7) {
        circumString = circumString.slice(0, 7) + "." + circumString.slice(7); // Adds decimal point
      }
    }
  }, 500);
}

function getCircumference() {
  return circumString;
}

function getPiValue() {
  return piValue;
}

module.exports = { calculateCircumference, getPiValue, getCircumference };
