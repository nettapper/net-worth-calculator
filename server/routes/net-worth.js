var express = require('express')
var conversionRate = require('../service/conversion-rate');
var calculate = require('../service/accountant');

var router = express.Router()

router.post('/', async function (req, res) {
  // TODO error handling
  console.log(req.body);
  const rateObj = await conversionRate(req.body["current-currency"], req.body["new-currency"]);
  const convertedObj = calculate(req.body.assets, req.body.liabilities, rateObj.rate);
  const resJson = {
    ...convertedObj,
    info: [...rateObj.info, ...convertedObj.info],
    warning: [...rateObj.warning, ...convertedObj.warning],
    error: [...rateObj.error, ...convertedObj.error],
    "new-currency": null
  };
  res.json(resJson);
})

module.exports = router;
