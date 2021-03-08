import { combineReducers } from "redux";

import { reducer as networth } from "./networth";

const rootReducer = combineReducers({
  networth
});

export default rootReducer;
