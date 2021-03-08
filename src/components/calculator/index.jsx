import { useState, useEffect } from "react";
import { useSelector, useDispatch }  from "react-redux";
import { networthRequest } from "../../ducks/networth";
import "./styles.css";
import NetWorth from "./networth";
import Assets from "./assets";
import Liabilities from "./liabilities";
import { getCurrencySymbol, formatCurrency } from "../../util/currency";

function Calculator() {
  const reduxState = useSelector(state => state.networth);
  const [ state, setState ] = useState(reduxState);

  // update the loacal state if the ruduxState changes
  useEffect(() => {
    setState(reduxState);
  }, [reduxState]);

  const dispatch = useDispatch();

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

  const currentCurrency = state["new-currency"] ? state["new-currency"] : state["current-currency"];
  const currencySymbol = getCurrencySymbol(currentCurrency);

  const handleChange = (prefix, update) => {
    // prefix is used to index into the state object
    const newState = { ...state, [prefix]: update };
    setState(newState);
    dispatch(networthRequest(newState));
  };

  return (
    <div className="calculator">
      <NetWorth
        currentCurrency={currentCurrency}
        currencies={currencies}
        total={formatCurrency(state["total-net-worth"], currentCurrency)}
        handleChange={(update) => handleChange("new-currency", update)}
      />
      <Assets
        assets={state.assets}
        currencySymbol={currencySymbol}
        total={formatCurrency(state["total-assets"], currentCurrency)}
        handleChange={(update) => handleChange("assets", update)}
      />
      <Liabilities
        liabilities={state.liabilities}
        currencySymbol={currencySymbol}
        total={formatCurrency(state["total-liabilities"], currentCurrency)}
        handleChange={(update) => handleChange("liabilities", update)}
      />
    </div>
  );
}

export default Calculator;
