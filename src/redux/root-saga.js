import { all, call } from "redux-saga/effects";

import { fetchBeersSagas } from "./fetch-all-beers/beers.sagas";
export default function* rootSaga() {
    yield all([call(fetchBeersSagas)])
}