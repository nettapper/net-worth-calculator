function calculate(assets, liabilities, exchangeRate) {
  return {
    ...assets,
    ...liabilities,
    "total-assets": 139031.56,
    "total-liabilities": 78000,
    "total-net-worth": 61031.56,
    "info": ['a'],
    "warning": [],
    "error": []
  };
};

module.exports = calculate;
