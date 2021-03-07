import { useState } from "react";
import "./styles.css";

function Calculator() {
  return (
    <div className="calculator">
      <NetWorth />
      <Assets />
      <Liabilities />
    </div>
  );
}

function NetWorth() {
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
      <p>You're worth 0</p>
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

function Assets() {
  return (
    <div className="calculator__assets">
      <h2 className="calculator__formheading">Assets</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Cash and Investments</h3>
        <div className="calculator__formelement">
          <label>Chequing:</label>
          <input name="chequing" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Taxes:</label>
          <input name="savings-for-taxes" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Rainy Day Fund:</label>
          <input name="rainy-day-fund" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Fun:</label>
          <input name="saving-for-fun" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Travel:</label>
          <input name="savings-for-travel" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Savings for Personal Development:</label>
          <input name="savings-for-personal-development" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Investment 1:</label>
          <input name="investment-1" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Investment 2:</label>
          <input name="investment-2" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Investment 3:</label>
          <input name="investment-3" type="number" />
        </div>
        <h3 className="calculator__formgrouping">Long Term Assets</h3>
        <div className="calculator__formelement">
          <label>Primary Home:</label>
          <input name="primary-home" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Second Home:</label>
          <input name="second-home" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Other:</label>
          <input name="other" type="number" />
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Assets:</label>
          <input name="total-assets" type="number" disabled />
        </div>
      </form>
    </div>
  );
}

function Liabilities() {
  return (
    <div className="calculator__liabilities">
      <h2 className="calculator__formheading">Liabilities</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Short Term Liabilities</h3>
        <div className="calculator__formelement">
          <label>Credit Card 1:</label>
          <input name="credit-card-1" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Credit Card :2</label>
          <input name="credit-card-2" type="number" />
        </div>
        <h3 className="calculator__formgrouping">Long Term Debt</h3>
        <div className="calculator__formelement">
          <label>Mortgage 1:</label>
          <input name="mortgage-1" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Mortgage 2:</label>
          <input name="mortgage-2" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Line of Credit:</label>
          <input name="line-of-credit" type="number" />
        </div>
        <div className="calculator__formelement">
          <label>Investment Loan:</label>
          <input name="investment-loan" type="number" />
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Liabilities:</label>
          <input name="total-liabilities" type="number" disabled />
        </div>
      </form>
    </div>
  );
}

export default Calculator;
