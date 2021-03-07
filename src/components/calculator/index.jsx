import "./styles.css";
import NetWorth from "./networth";
import Assets from "./assets";
import Liabilities from "./liabilities";
import { getCurrencySymbol, formatCurrency } from "../../util/currency";

function Calculator() {
  let state = {
    "current-currency": "USD",
    "new-currency": null,
    assets: {
      chequing: 1950,
      "savings-for-taxes": 0,
      "rainy-day-fund": 1560,
      "savings-for-fun": 1.56,
      "savings-for-travel": 3120,
      "savings-for-personal-development": 2340,
      "investment-1": 3900,
      "investment-2": 17160,
      "investment-3": 0,
      "primary-home": 117000,
      "second-home": 0,
      other: 0,
    },
    liabilities: {
      "credit-card-1": 0,
      "credit-card-2": 0,
      "mortgage-1": 78000,
      "mortgage-2": 0,
      "line-of-credit": 0,
      "investment-loan": 0,
    },
    "total-assets": 139031.56,
    "total-liabilities": 78000,
    "total-net-worth": 61031.56,
    info: ["Normal operations, server messages (eg. Using 1 CAD = 0.78 USD)"],
    warning: [
      "Could not get exchange rate from exchangeratesapi.io, using cached value.",
    ],
    error: "null or list of errors (eg. unsupported currency value)",
  };

  let currencies = [
    "CAD",
    "CHF",
    "GBP",
    "INR",
    "ISK",
    "JPY",
    "NZD",
    "RUB",
    "SGD",
    "USD",
  ];

  // TODO this will come from redux
  const currCurrency = "CAD";
  const currencySymbol = getCurrencySymbol(currCurrency);

  return (
    <div className="calculator">
      <NetWorth
        currencies={currencies}
        total={formatCurrency(state["total-net-worth"], currCurrency)}
      />
      <Assets
        assets={state.assets}
        currencySymbol={currencySymbol}
        total={formatCurrency(state["total-assets"], currCurrency)}
      />
      <Liabilities
        liabilities={state.liabilities}
        currencySymbol={currencySymbol}
        total={formatCurrency(state["total-liabilities"], currCurrency)}
      />
    </div>
  );
}

export default Calculator;
