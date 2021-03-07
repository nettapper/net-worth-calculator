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
      <h2>Assets</h2>
      <form className="calculator__assetsform">
        <label>
          chequing:
          <input name="chequing" type="number" />
        </label>
        <label>
          savings for taxes
          <input name="savings-for-taxes" type="number" />
        </label>
        <label>
          rainy day fund
          <input name="rainy-day-fund" type="number" />
        </label>
        <label>
          savings for fun
          <input name="saving-for-fun" type="number" />
        </label>
        <label>
          savings for travel
          <input name="savings-for-travel" type="number" />
        </label>
        <label>
          savings for personal development
          <input name="savings-for-personal-development" type="number" />
        </label>
        <label>
          investment 1<input name="investment-1" type="number" />
        </label>
        <label>
          investment 2<input name="investment-2" type="number" />
        </label>
        <label>
          investment 3<input name="investment-3" type="number" />
        </label>
        <label>
          primary home
          <input name="primary-home" type="number" />
        </label>
        <label>
          second home
          <input name="second-home" type="number" />
        </label>
        <label>
          other
          <input name="other" type="number" />
        </label>
      </form>
    </div>
  );
}

function Liabilities() {
  return (
    <div className="calculator__liabilities">
      <h2>Liabilities</h2>
      <form className="calculator__liabilitiesform">
        <label>
          credit card 1<input name="credit-card-1" type="number" />
        </label>
        <label>
          credit card 2<input name="credit-card-2" type="number" />
        </label>
        <label>
          mortgage 1<input name="mortgage-1" type="number" />
        </label>
        <label>
          mortgage 2<input name="mortgage-2" type="number" />
        </label>
        <label>
          line of credit
          <input name="line-of-credit" type="number" />
        </label>
        <label>
          investment loan
          <input name="investment-loan" type="number" />
        </label>
      </form>
    </div>
  );
}

export default Calculator;
