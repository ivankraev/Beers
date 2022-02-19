import { all, call } from "redux-saga/effects";

import { fetchBeersStart } from "./fetch-all-beers/beers.sagas";

export default function* rootSaga() {
    yield all([call(fetchBeersStart)])
}