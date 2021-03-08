const axios = require('axios');

async function conversionRate(currentCurrency, newCurrency) {
  let rate = 1;
  let info = [];
  let warning = [];
  let error = [];

  // same / null
  if (!newCurrency || currentCurrency === newCurrency)
    return { rate, info, warning, error }; // rate 1 is valid

  // TODO cache

  // TODO try catch
  const res = await axios.get("https://api.exchangeratesapi.io/latest?base=CAD");
  // console.log(res.data);

  // currentCurrency is same as base
  const { base } = res.data;
  if (base === currentCurrency) {
    if (res?.data?.rates[newCurrency])
      return { rate: res.data.rates[newCurrency], info, warning, error };
    else
      return { rate, info, warning, error: [`The new-currency: '${newCurrency}' is invalid`] };
  }

  // converting between two non-base currencies
  let currToBaseRate;
  let baseToNewRate;
  if (res?.data?.rates[currentCurrency])
    currToBaseRate = res?.data?.rates[currentCurrency];
  else
    error.push(`The current-currency: '${currentCurrency}' is invalid`);
  if (res?.data?.rates[newCurrency])
    baseToNewRate = res?.data?.rates[newCurrency];
  else
    error.push(`The new-currency: '${newCurrency}' is invalid`);
  // if we have errors stop here
  if (error.length > 0)
    return { rate, info, warning, error };

  // 1 / curr to base * base to new rate
  // console.log(`(1 / ${currToBaseRate}) * (${baseToNewRate})`);
  rate = (1 / currToBaseRate) * (baseToNewRate);
  return { rate, info, warning, error };
}

module.exports = conversionRate;
