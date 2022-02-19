import { takeLatest, put, all, call } from 'redux-saga/effects'
import { axios } from '../../utils/api-client';
import { endpoints } from '../../utils/api-endpoints';
import FetchBeersTypes from './beers.types'
import { fetchBeersSuccess, fetchBeersFailure } from './beers.actions';
export function* fetchBeers() {
    try {
        const { data } = yield axios
            .get(endpoints.beersList)
        yield put(fetchBeersSuccess(data))
    } catch (error) {
        yield put(fetchBeersFailure(error))
    }
}


export function* fetchBeersStart() {
    yield takeLatest(FetchBeersTypes.FETCH_BEERS_START, fetchBeers)
}

export function* fetchBeersSagas() {
    yield all([call(fetchBeersStart)])
}
