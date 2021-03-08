const axios = require('axios');
const cache = require('./cache');


async function conversionRate(currentCurrency, newCurrency) {
  let rate = 1;
  let info = [];
  let warning = [];
  let error = [];

  // no calculation needed as newCurrency is the same or its null
  if (!newCurrency || currentCurrency === newCurrency)
    return { rate, "current-currency": currentCurrency, info, warning, error }; // rate 1 is valid

  // check cache first
  if (cache.getExpireTime() < Date.now()) {
    const res = await axios.get("https://api.exchangeratesapi.io/latest?base=CAD");
    console.log('res.data', res.data);
    cache.setData(res.data);
  }


  // currentCurrency is same as base just look up newCurrency
  const data = cache.getData();
  console.log('cache.getData', data);
  if (data.base === currentCurrency) {
    if (data?.rates[newCurrency])
      return { rate: data.rates[newCurrency], "current-currency": newCurrency, info, warning, error };
    else
      return { rate, "current-currency": currentCurrency, info, warning, error: [`The new-currency: '${newCurrency}' is invalid`] };
  }

  // converting between two non-base currencies
  let currToBaseRate;
  let baseToNewRate;
  if (data?.rates[currentCurrency])
    currToBaseRate = data?.rates[currentCurrency];
  else
    error.push(`The current-currency: '${currentCurrency}' is invalid`);
  if (data?.rates[newCurrency])
    baseToNewRate = data?.rates[newCurrency];
  else
    error.push(`The new-currency: '${newCurrency}' is invalid`);
  // if we have errors stop here
  if (error.length > 0 || currToBaseRate == undefined || baseToNewRate === undefined)
    return { rate, "current-currency": currentCurrency, info, warning, error };

  // 1 / curr to base * base to new rate
  // console.log(`(1 / ${currToBaseRate}) * (${baseToNewRate})`);
  rate = (1 / currToBaseRate) * (baseToNewRate);
  return { rate, "current-currency": newCurrency, info, warning, error };
}

module.exports = conversionRate;
