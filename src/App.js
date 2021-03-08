import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSageMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "./ducks/rootReducer";
import rootSaga from "./ducks/rootSaga";
import './App.css';
import Header from './components/header';
import Calculator from './components/calculator';

const sagaMiddleware = createSageMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="app">
        <Header text="Net Worth Calculator" />
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
