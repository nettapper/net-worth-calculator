import { useState } from "react";

function NetWorth({ total, currencies }) {
  const [curr, changeCurr] = useState(
    currencies.length > 0 ? currencies[0] : "No Currencies Found"
  );
  const handleChange = (e) => {
    if (e?.target?.value && e.target.target !== curr) {
      changeCurr(e.target.value);
    }
  };

  return (
    <div className="calculator__networthcontainer">
      <div>
        <span className="calculator__networthtotal">Net Worth: </span>
        <span className="calculator__total">{total}</span>
      </div>
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

export default NetWorth;
