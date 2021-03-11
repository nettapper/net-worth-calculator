var express = require("express");
const { checkSchema, validationResult } = require("express-validator");

var conversionRate = require("../service/conversion-rate");
var calculate = require("../service/accountant");

var router = express.Router();

router.post(
  "/",
  checkSchema({
    "current-currency": {
      isAlpha: {
        errorMessage:
          "current currency is required and should contain only alpha chars",
      },
    },
    "new-currency": {
      optional: true,
      isAlpha: {
        errorMessage:
          "new currency should contain only alpha chars when present",
      },
    },
    assets: {
      notEmpty: true,
      errorMessage:
        "assets is required and should be an object of key-value pairs",
      custom: {
        options: (value, _) => {
          if (value === null || typeof value !== "object")
            throw new Error(
              "assets is required to be an object of key-value pairs"
            );
          if (Object.keys(value).length === 0)
            throw new Error(
              "assets is required to be an object of non-zero length"
            );
          // ensure that all elements are numeric
          Object.keys(value).forEach((key) => {
            if (typeof value[key] !== "number")
              throw new Error(`assets[${key}] must be numeric`);
          });
          // true as the custom validator succeeded
          return true;
        },
      },
    },
    liabilities: {
      notEmpty: true,
      errorMessage:
        "liabilities is required and should be an object of key-value pairs",
      custom: {
        options: (value, _) => {
          if (value === null || typeof value !== "object")
            throw new Error(
              "liabilities is required to be an object of key-value pairs"
            );
          if (Object.keys(value).length === 0)
            throw new Error(
              "liabilities is required to be an object of non-zero length"
            );
          // ensure that all elements are numeric
          Object.keys(value).forEach((key) => {
            if (typeof value[key] !== "number")
              throw new Error(`liabilities[${key}] must be numeric`);
          });
          // true as the custom validator succeeded
          return true;
        },
      },
    },
  }),
  async function (req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    // console.log(req.body);
    const rateObj = await conversionRate(
      req.body["current-currency"],
      req.body["new-currency"]
    );

    const convertedObj = calculate(
      req.body.assets,
      req.body.liabilities,
      rateObj.rate
    );

    const resJson = {
      ...convertedObj,
      info: [...rateObj.info, ...convertedObj.info],
      warning: [...rateObj.warning, ...convertedObj.warning],
      error: [...rateObj.error, ...convertedObj.error],
      "current-currency": rateObj["current-currency"],
      "new-currency": null,
    };

    res.json(resJson);
  }
);

module.exports = router;
