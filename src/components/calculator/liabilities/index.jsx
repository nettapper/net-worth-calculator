function Liabilities({ liabilities, currencySymbol, total, handleChange }) {
  const onChange = (e) => {
    const { name, value } = e.target;
    handleChange({ ...liabilities, [name]: value });
  };

  return (
    <div className="calculator__formcontainer">
      <h2 className="calculator__formheading">Liabilities</h2>
      <form className="calculator__form">
        <h3 className="calculator__formgrouping">Short Term Liabilities</h3>
        <div className="calculator__formelement">
          <label for="calculator-credit-card-1">Credit Card 1:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-credit-card-1"
              name="credit-card-1"
              type="number"
              value={liabilities["credit-card-1"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label for="calculator-credit-card-2">Credit Card :2</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-credit-card-2"
              name="credit-card-2"
              type="number"
              value={liabilities["credit-card-2"]}
              onChange={onChange}
            />
          </div>
        </div>
        <h3 className="calculator__formgrouping">Long Term Debt</h3>
        <div className="calculator__formelement">
          <label for="calculator-mortgage-1">Mortgage 1:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-mortgage-1"
              name="mortgage-1"
              type="number"
              value={liabilities["mortgage-1"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label for="calculator-mortgage-2">Mortgage 2:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-mortgage-2"
              name="mortgage-2"
              type="number"
              value={liabilities["mortgage-2"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label for="calculator-line-of-credit">Line of Credit:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-line-of-credit"
              name="line-of-credit"
              type="number"
              value={liabilities["line-of-credit"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement">
          <label for="calculator-investment-loan">Investment Loan:</label>
          <div>
            <span className="calculator__formelementsymbol">
              {currencySymbol}
            </span>
            <input
              id="calculator-investment-loan"
              name="investment-loan"
              type="number"
              value={liabilities["investment-loan"]}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="calculator__formelement calculator__formelement--total">
          <label>Total Liabilities:</label>
          <span className="calculator__total">{total}</span>
        </div>
      </form>
    </div>
  );
}

export default Liabilities;
