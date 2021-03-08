import { all } from "redux-saga/effects";

import { saga as networth } from "./networth";

function* rootSaga() {
  yield all([
    networth()
  ]);
}

export default rootSaga;
