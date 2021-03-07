function Assets({ assets, currencySymbol, total }) {
  return (
    <div className="calculator__formcontainer">
      <h2 className="calculator__formheading">Assets</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Cash and Investments</h3>
        <div className="calculator__formelement">
          <label>Chequing:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input name="chequing" type="number" value={assets["chequing"]} />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Savings for Taxes:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="savings-for-taxes"
              type="number"
              value={assets["savings-for-taxes"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Rainy Day Fund:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="rainy-day-fund"
              type="number"
              value={assets["rainy-day-fund"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Savings for Fun:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="saving-for-fun"
              type="number"
              value={assets["savings-for-fun"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Savings for Travel:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="savings-for-travel"
              type="number"
              value={assets["savings-for-travel"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Savings for Personal Development:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="savings-for-personal-development"
              type="number"
              value={assets["savings-for-personal-development"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Investment 1:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="investment-1"
              type="number"
              value={assets["investment-1"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Investment 2:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="investment-2"
              type="number"
              value={assets["investment-2"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Investment 3:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="investment-3"
              type="number"
              value={assets["investment-3"]}
            />
          </div>
        </div>
        <h3 className="calculator__formgrouping">Long Term Assets</h3>
        <div className="calculator__formelement">
          <label>Primary Home:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="primary-home"
              type="number"
              value={assets["primary-home"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Second Home:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              name="second-home"
              type="number"
              value={assets["second-home"]}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label>Other:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input name="other" type="number" value={assets["other"]} />
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
