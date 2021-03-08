const axios = require("axios");
const conversionRate = require("./index");

jest.mock('axios');
axios.get.mockResolvedValue({
  data: {
    base: "CAD",
    date: "2021-03-05",
    rates: {
      AUD: 1.02,
      CAD: 1.0,
      EUR: 0.65,
      GBP: 0.56,
      JPY: 85.2,
      NZD: 1.10,
      USD: 0.78,
    },
  }
});

test("same currency should have conversion of 1", async () => {
  expect((await conversionRate("CAD", "CAD")).rate).toBe(1);
  expect((await conversionRate("USD", "USD")).rate).toBe(1);
});

test("null new currency should have conversion of 1", async () => {
  expect((await conversionRate("CAD", null)).rate).toBe(1);
  expect((await conversionRate("MXN", undefined)).rate).toBe(1);
});

test("object should have rate/info/warning/error", async () => {
  const obj = await conversionRate("CAD", "USD");
  console.log(obj);
  expect(obj.rate).toBeDefined();
  expect(obj.info).toBeDefined();
  expect(obj.warning).toBeDefined();
  expect(obj.error).toBeDefined();
});

it("can convert from base to new currency", async () => {
  const obj = await conversionRate("CAD", "USD");
  expect(obj.rate).toEqual(0.78);

  const obj2 = await conversionRate("CAD", "EUR");
  expect(obj2.rate).toEqual(0.65);
});

it("can convert between two non-base currencies", async () => {
  /* 1 CAD / .65 EUR
   * 1 CAD / .78 USD
   *
   * 1 EUR = ? USD
   * 1 EUR * (1 CAD / .65 EUR) = x CAD
   * x CAD * (.78 USD / 1 CAD) = y USD
   * aka 1 EUR / .65 * .78 = 1.2
   */
  const obj = await conversionRate("EUR", "USD");
  expect(obj.rate).toEqual(1.2);

  // 1 EUR / .65 * 85.2 = 0.018057
  const obj2 = await conversionRate("EUR", "JPY");
  expect(obj2.rate).toBeGreaterThan(131.07);
  expect(obj2.rate).toBeLessThan(131.08);
});
