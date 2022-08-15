const { generateDigitsOfPi } = require("../server/models/pi");
const { digits100K } = require("./piDigit100K");
const axios = require("axios");

test("Produces first digit of Pi", () => {
  let generator = generateDigitsOfPi();
  let actual = generator.next().value;
  let expected = "3";

  expect(actual).toBe(expected);
});

test("Accurate up to 10 digits of Pi", async () => {
  let generator = generateDigitsOfPi();
  let digits = "";

  for (let counter = 0; counter < 10; counter++) {
    digits += generator.next().value;
  }

  const response = await axios.get(
    `https://uploadbeta.com/api/pi/?cached&n=11`
  );

  let expected = response.data.slice(1);
  let actual = digits;

  expect(actual).toBe(expected);
});

test("Accurate up to 100 digits of Pi", async () => {
  let generator = generateDigitsOfPi();
  let digits = "";

  for (let counter = 0; counter < 100; counter++) {
    digits += generator.next().value;
  }

  const response = await axios.get(
    `https://uploadbeta.com/api/pi/?cached&n=101`
  );

  let expected = response.data.slice(1);
  let actual = digits;

  expect(actual).toBe(expected);
});

test("Accurate up to 1,000 digits of Pi", async () => {
  let generator = generateDigitsOfPi();
  let digits = "";

  for (let counter = 0; counter < 1000; counter++) {
    digits += generator.next().value;
  }

  const response = await axios.get(
    `https://uploadbeta.com/api/pi/?cached&n=1001`
  );

  let expected = response.data.slice(1);
  let actual = digits;

  expect(actual).toBe(expected);
});

test("Accurate up to 10,000 digits of Pi", async () => {
  let generator = generateDigitsOfPi();
  let digits = "";

  for (let counter = 0; counter < 10000; counter++) {
    digits += generator.next().value;
  }

  const response = await axios.get(
    `https://uploadbeta.com/api/pi/?cached&n=10001`
  );

  let expected = response.data.slice(1);
  let actual = digits;

  expect(actual).toBe(expected);
});

test("Accurate up to 100,000 digits of Pi", () => {
  let generator = generateDigitsOfPi();
  let actual = "";

  for (let counter = 0; counter < 100000; counter++) {
    actual += generator.next().value;
  }

  let expected = digits100K;

  expect(actual).toBe(expected);
}, 50000);
