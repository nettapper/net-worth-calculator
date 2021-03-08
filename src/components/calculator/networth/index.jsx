function NetWorth({ total, currentCurrency, currencies, handleChange }) {
  const onChange = (e) => {
    if (e?.target?.value && e.target.target !== currentCurrency) {
      handleChange(e.target.value);
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
            value={currentCurrency}
            onChange={onChange}
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
