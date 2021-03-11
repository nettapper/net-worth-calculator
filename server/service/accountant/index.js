function calculate(assets, liabilities, exchangeRate) {
  let info = [];
  let warning = [];
  let error = [];
  let rate = 1;

  // check if we have a valid exchangeRate
  if (exchangeRate)
    rate = exchangeRate;
  else
    warning.push(`Invalid exchange rate: ${exchangeRate}, using default rate: ${rate}`);

  let totalAssets = 0;
  let totalLiabilities = 0;

  // modify the assets and liabilities objs
  Object.keys(assets).map(function(key) {
    assets[key] *= rate;
    totalAssets += assets[key];
  });
  Object.keys(liabilities).map(function(key) {
    liabilities[key] *= rate;
    totalLiabilities += liabilities[key];
  });

  return {
    assets: { ...assets},
    liabilities: { ...liabilities},
    "total-assets": totalAssets,
    "total-liabilities": totalLiabilities,
    "total-net-worth": totalAssets - totalLiabilities,
    info,
    warning,
    error
  };
};

module.exports = calculate;
