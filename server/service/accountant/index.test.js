const calculate = require("./index");

test("object should have totals & info/warning/error", async () => {
  const obj = calculate({}, {}, 1);
  expect(obj["total-assets"]).toBeDefined();
  expect(obj["total-liabilities"]).toBeDefined();
  expect(obj["total-net-worth"]).toBeDefined();
  expect(obj.info).toBeDefined();
  expect(obj.warning).toBeDefined();
  expect(obj.error).toBeDefined();
});

test("assets/liabilities don't change for rate of 1 (or null)", async () => {
  const assets = {
    'a': 10,
    'b': 298.38
  };
  const liabilities = {
    'c': 338.382,
    'd': -389
  };

  const obj = calculate(assets, liabilities, 1);
  expect(obj.assets).toStrictEqual(assets);
  expect(obj.liabilities).toStrictEqual(liabilities);

  const obj2 = calculate(assets, liabilities, null);
  expect(obj2.assets).toStrictEqual(assets);
  expect(obj2.liabilities).toStrictEqual(liabilities);

  const obj3 = calculate(assets, liabilities, undefined);
  expect(obj3.assets).toStrictEqual(assets);
  expect(obj3.liabilities).toStrictEqual(liabilities);
});

test("the exchangeRate is applied to assets & liabilities", async () => {
  const b1 = {  // before 1
    'a': 10,
    'b': 12.1
  };
  const a1 = {  // after 1
    'a': 20,
    'b': 24.2
  };

  const b2 = {  // before 2
    'a': -2,
    'z': 24
  };
  const a2 = {  // after 2
    'a': -4,
    'z': 48
  };

  const obj = calculate(b1, b2, 2);
  expect(obj.assets).toStrictEqual(a1);
  expect(obj.liabilities).toStrictEqual(a2);
});

test("totals are calculated correctly", async () => {
  const beforeAssets = {
    'a': 10,
    'b': 12.1
  };
  const beforeLiabilities = {
    'a': 5,
    'c': 5,
    'x': 6,
    'y': 6.1
  };
  const obj = calculate(beforeAssets, beforeLiabilities, 2);
  expect(obj["total-assets"]).toStrictEqual(44.2);
  expect(obj["total-liabilities"]).toStrictEqual(44.2);
  expect(obj["total-net-worth"]).toStrictEqual(0);

  const beforeLiabilities2 = {
    'a': 5,
    'c': 5,
    'x': 6,
    'y': 6.1
  };
  const obj2 = calculate({}, beforeLiabilities2, 2);
  expect(obj2["total-assets"]).toStrictEqual(0);
  expect(obj2["total-liabilities"]).toStrictEqual(44.2);
  expect(obj2["total-net-worth"]).toStrictEqual(-44.2);
});
