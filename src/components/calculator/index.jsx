import { useState } from "react";
import "./styles.css";

function Calculator() {
  let state = {
    "current-currency": "USD",
    "new-currency": null,
    "assets": {
      "chequing": 1950,
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
      "other": 0
    },
    "liabilities": {
      "credit-card-1": 0,
      "credit-card-2": 0,
      "mortgage-1": 78000,
      "mortgage-2": 0,
      "line-of-credit": 0,
      "investment-loan": 0
    },
    "total-assets": 139031.56,
    "total-liabilities": 78000,
    "total-net-worth": 61031.56,
    "info": ["Normal operations, server messages (eg. Using 1 CAD = 0.78 USD)"],
    "warning": ["Could not get exchange rate from exchangeratesapi.io, using cached value."],
    "error": "null or list of errors (eg. unsupported currency value)"
  };

  return (
    <div className="calculator">
      <NetWorth total={state["total-net-worth"]} />
      <Assets assets={state.assets} total={state["total-assets"]} />
      <Liabilities liabilities={state.liabilities} total={state["total-liabilities"]} />
    </div>
  );
}

function NetWorth({ total }) {
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

  const [curr, changeCurr] = useState(
    currencies.length > 0 ? currencies[0] : "No Currencies Found"
  );
  const handleChange = (e) => {
    if (e?.target?.value && e.target.target !== curr) {
      changeCurr(e.target.value);
    }
  };

  return (
    <div className="calculator__networth">
      <p>You're worth {total}</p>
      <form>
        <label>
          Select Currency:
          <select
            className="calculator__currencyselect"
            value={curr}
            onChange={handleChange}
          >
            {currencies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
}

function Assets({ assets, total }) {
  return (
    <div className="calculator__assets">
      <h2 className="calculator__formheading">Assets</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Cash and Investments</h3>
        <div className="calculator__formelement">
          <label>Chequing:</label>
          <input name="chequing" type="number" value={assets["chequing"]} />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Taxes:</label>
          <input name="savings-for-taxes" type="number" value={assets["savings-for-taxes"]} />
        </div>
        <div className="calculator__formelement">
          <label>Rainy Day Fund:</label>
          <input name="rainy-day-fund" type="number" value={assets["rainy-day-fund"]} />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Fun:</label>
          <input name="saving-for-fun" type="number" value={assets["savings-for-fun"]} />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Travel:</label>
          <input name="savings-for-travel" type="number" value={assets["savings-for-travel"]} />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Personal Development:</label>
          <input name="savings-for-personal-development" type="number" value={assets["savings-for-personal-development"]} />
        </div>
        <div className="calculator__formelement">
          <label>Investment 1:</label>
          <input name="investment-1" type="number" value={assets["investment-1"]} />
        </div>
        <div className="calculator__formelement">
          <label>Investment 2:</label>
          <input name="investment-2" type="number" value={assets["investment-2"]} />
        </div>
        <div className="calculator__formelement">
          <label>Investment 3:</label>
          <input name="investment-3" type="number" value={assets["investment-3"]} />
        </div>
        <h3 className="calculator__formgrouping">Long Term Assets</h3>
        <div className="calculator__formelement">
          <label>Primary Home:</label>
          <input name="primary-home" type="number" value={assets["primary-home"]} />
        </div>
        <div className="calculator__formelement">
          <label>Second Home:</label>
          <input name="second-home" type="number" value={assets["second-home"]} />
        </div>
        <div className="calculator__formelement">
          <label>Other:</label>
          <input name="other" type="number" value={assets["other"]} />
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Assets:</label>
          <input name="total-assets" type="number" disabled value={total} />
        </div>
      </form>
    </div>
  );
}

function Liabilities({ liabilities, total }) {
  return (
    <div className="calculator__liabilities">
      <h2 className="calculator__formheading">Liabilities</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Short Term Liabilities</h3>
        <div className="calculator__formelement">
          <label>Credit Card 1:</label>
          <input name="credit-card-1" type="number" value={liabilities["credit-card-1"]} />
        </div>
        <div className="calculator__formelement">
          <label>Credit Card :2</label>
          <input name="credit-card-2" type="number" value={liabilities["credit-card-2"]} />
        </div>
        <h3 className="calculator__formgrouping">Long Term Debt</h3>
        <div className="calculator__formelement">
          <label>Mortgage 1:</label>
          <input name="mortgage-1" type="number" value={liabilities["mortgage-1"]} />
        </div>
        <div className="calculator__formelement">
          <label>Mortgage 2:</label>
          <input name="mortgage-2" type="number" value={liabilities["mortgage-2"]} />
        </div>
        <div className="calculator__formelement">
          <label>Line of Credit:</label>
          <input name="line-of-credit" type="number" value={liabilities["line-of-credit"]} />
        </div>
        <div className="calculator__formelement">
          <label>Investment Loan:</label>
          <input name="investment-loan" type="number" value={liabilities["investment-loan"]} />
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Liabilities:</label>
          <input name="total-liabilities" type="number" disabled value={total} />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
