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

  const currentCurrencySelector = state["new-currency"] ? state["new-currency"] : state["current-currency"];
  // only update the currencySymbol once the http response has resolved (aka redux state has changed)
  // this way the currency selector & currencySymbol are independent
  const currentCurrency = reduxState["new-currency"] ? reduxState["new-currency"] : reduxState["current-currency"];
  const currencySymbol = getCurrencySymbol(currentCurrency);

  // update the local state if the ruduxState changes
  useEffect(() => {
    setState(reduxState);
  }, [reduxState]);


  // handle children component updates
  const handleChange = (prefix, update) => {
    // prefix is used to index into the state object
    const newState = { ...state, [prefix]: update };
    setState(newState);
    dispatch(networthRequest(newState));
  };

  return (
    <div className="calculator">
      <NetWorth
        currentCurrency={currentCurrencySelector}
        currencies={currencies}
        total={formatCurrency(reduxState["total-net-worth"], currentCurrency)}
        handleChange={(update) => handleChange("new-currency", update)}
      />
      <Assets
        assets={state.assets}
        currencySymbol={currencySymbol}
        total={formatCurrency(reduxState["total-assets"], currentCurrency)}
        handleChange={(update) => handleChange("assets", update)}
      />
      <Liabilities
        liabilities={state.liabilities}
        currencySymbol={currencySymbol}
        total={formatCurrency(reduxState["total-liabilities"], currentCurrency)}
        handleChange={(update) => handleChange("liabilities", update)}
      />
    </div>
  );
}

export default Calculator;
