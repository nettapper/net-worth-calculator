import { takeEvery, put, call } from "redux-saga/effects";
import axios from "axios";

// Actions
const NETWORTH_REQUEST = "NETWORTH_REQUEST";
const NETWORTH_RESPONSE = "NETWORTH_RESPONSE";

// Action Creators
export function networthRequest(payload) {
  return {
    type: NETWORTH_REQUEST,
    payload
  }
}

function networthResponse(payload) {
  return {
    type: NETWORTH_RESPONSE,
    payload
  }
}

// Initial State
const initState = {
  "current-currency": "CAD",
  "assets": {
    "chequing": 0,
    "savings-for-taxes": 0,
    "rainy-day-fund": 0,
    "savings-for-fun": 0,
    "savings-for-travel": 0,
    "savings-for-personal-development": 0,
    "investment-1": 0,
    "investment-2": 0,
    "investment-3": 0,
    "primary-home": 0,
    "second-home": 0,
    "other": 0,
  },
  "liabilities": {
    "credit-card-1": 0,
    "credit-card-2": 0,
    "mortgage-1": 0,
    "mortgage-2": 0,
    "line-of-credit": 0,
    "investment-loan": 0,
  },
  "total-assets": 0,
  "total-liabilities": 0,
  "total-net-worth": 0,
  "info": [],
  "warning": [],
  "error": []
};

// Reducers
export function reducer(state = initState, action) {
  const payload = action.payload;
  switch (action.type) {
    case NETWORTH_RESPONSE:
      // returning a copy of state with spread operators
      return { ...state, payload };
    default:
      return state;
  }
}

// Axios API
async function postNetworth(payload) {
  const res = await axios.post('/api/v1/net-worth', payload);
  return res;
}


// Sagas
function* requestSaga(action) {
  try {
    const res = yield call(postNetworth(action.payload));
    // todo validations
    yield put(networthResponse(res.data));
  } catch(e) {
    console.log(e);
    put(networthResponse({ error: ["Could not complete API call successfully"] }));
  }
}

export function* saga() {
  console.log("saga capturing NETWORTH_REQUEST");
  yield takeEvery(NETWORTH_REQUEST, requestSaga);
}

