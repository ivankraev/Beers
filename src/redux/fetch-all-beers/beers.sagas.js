import { takeLatest, put, all, call } from 'redux-saga/effects'
import { axios } from '../../utils/api-client';
import { endpoints } from '../../utils/api-endpoints';
import FetchBeersTypes from './beers.types'

export function* fetchBeers() {
    try {
        console.log('sadasdas')
        const beersRef = yield axios
            .get(endpoints.beersList)


    } catch (error) {
        console.log(error);
    }
}


export function* fetchBeersStart() {
    yield takeLatest(FetchBeersTypes.FETCH_BEERS_START)

}

export function* fetchBeersSagas() {
    yield all([call(fetchBeersStart)])
}
