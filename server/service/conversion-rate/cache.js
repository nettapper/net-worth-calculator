const data = {
  "base": "CAD",
  "date": "2021-03-05",
  "rates": {
    "AUD": 1.0267150396,
    "BGN": 1.2901055409,
    "BRL": 4.4841029024,
    "CAD": 1.0,
    "CHF": 0.7299472296,
    "CNY": 5.1114116095,
    "CZK": 17.3502638522,
    "DKK": 4.9052110818,
    "EUR": 0.6596306069,
    "GBP": 0.5692612137,
    "HKD": 6.1144459103,
    "HRK": 4.9963720317,
    "HUF": 241.6160949868,
    "IDR": 11335.1517150396,
    "ILS": 2.6125329815,
    "INR": 57.5399076517,
    "ISK": 100.8575197889,
    "JPY": 85.290237467,
    "KRW": 888.5949868074,
    "MXN": 16.7021108179,
    "MYR": 3.2081134565,
    "NOK": 6.7354881266,
    "NZD": 1.1040237467,
    "PHP": 38.290237467,
    "PLN": 3.0176781003,
    "RON": 3.2198548813,
    "RUB": 58.6284300792,
    "SEK": 6.7191952507,
    "SGD": 1.0559366755,
    "THB": 24.0250659631,
    "TRY": 5.9038258575,
    "USD": 0.7874670185,
    "ZAR": 12.0461081794
  }
};

const CACHE_KEEP = 5 * 1000 * 60;  // x * 1000 ms * 60 s = x in min

// in memory cache (aka a js object)
class Cache {
  constructor() {
    this.data = data;
    this.lastFetch = 1615186800000;  // Mon March 8, 2021 00:00 (MST GMT-7)
  }

  getData() {
    return this.data;
  }

  getExpireTime() {
    return this.lastFetch + CACHE_KEEP;
  }

  getLastFetch() {
    return this.lastFetch;
  }

  setData(data) {
    this.data = data;
    this.lastFetch = Date.now();
  }
}

// nodejs only loads the file once
// regardless of the number of imports
// per: https://medium.com/@maheshkumawat_83392/node-js-design-patterns-singleton-pattern-series-1-1e0ab71e3edf
module.exports = new Cache();
