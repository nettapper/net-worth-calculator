function Assets({ assets, currencySymbol, total, handleChange }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    const num = Number(value); // convert str to num
    if (!isNaN(num)) handleChange({ ...assets, [name]: num });
  };

  return (
    <div className="calculator__formcontainer">
      <h2 className="calculator__formheading">Assets</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Cash and Investments</h3>
        <div className="calculator__formelement">
          <label htmlFor="calculator-chequing">Chequing:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-chequing"
              name="chequing"
              type="number"
              value={assets["chequing"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-savings-for-taxes">
            Savings for Taxes:
          </label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-savings-for-taxes"
              name="savings-for-taxes"
              type="number"
              value={assets["savings-for-taxes"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-rainy-day-fund">Rainy Day Fund:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-rainy-day-fund"
              name="rainy-day-fund"
              type="number"
              value={assets["rainy-day-fund"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-savings-for-fun">Savings for Fun:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-savings-for-fun"
              name="savings-for-fun"
              type="number"
              value={assets["savings-for-fun"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-savings-for-travel">
            Savings for Travel:
          </label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-savings-for-travel"
              name="savings-for-travel"
              type="number"
              value={assets["savings-for-travel"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-savings-for-personal-development">
            Savings for Personal Development:
          </label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-savings-for-personal-development"
              name="savings-for-personal-development"
              type="number"
              value={assets["savings-for-personal-development"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-investment-1">Investment 1:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-investment-1"
              name="investment-1"
              type="number"
              value={assets["investment-1"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-investment-2">Investment 2:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-investment-2"
              name="investment-2"
              type="number"
              value={assets["investment-2"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-investment-3">Investment 3:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-investment-3"
              name="investment-3"
              type="number"
              value={assets["investment-3"]}
              onChange={onChange}
            />
          </div>
        </div>
        <h3 className="calculator__formgrouping">Long Term Assets</h3>
        <div className="calculator__formelement">
          <label htmlFor="calculator-primary-home">Primary Home:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-primary-home"
              name="primary-home"
              type="number"
              value={assets["primary-home"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-second-home">Second Home:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-second-home"
              name="second-home"
              type="number"
              value={assets["second-home"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label htmlFor="calculator-other">Other:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-other"
              name="other"
              type="number"
              value={assets["other"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Assets:</label>
          <span className="calculator__total">{total}</span>
        </div>
      </form>
    </div>
  );
}

export default Assets;
