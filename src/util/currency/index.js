export function getCurrencySymbol(currency) {
  // if a valid currency is not provided, return the default value below
  let currencySymbol = "?";
  try {
    new Intl.NumberFormat("en-US", { style: "currency", currency: currency })
      .formatToParts(1)
      .forEach((obj) => {
        if (obj?.type === "currency" && obj?.value) {
          currencySymbol = obj.value;
        }
      });
  } catch(e) {
    if (!(e instanceof RangeError)) throw e;
  }
  return currencySymbol;
}

export function formatCurrency(number, currency) {
  // if a valid currency is not provided, return the number
  try {
    return Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currency,
    }).format(number);
  } catch(e) {
    if (!(e instanceof RangeError)) throw e;
  }
  return number;
}

