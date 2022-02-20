import { takeLatest, all, call } from 'redux-saga/effects'

import { FavTypes } from './favourites.types'
import { triggerNotifications } from '../notifications/notifications.actions'




export function* addToFavourites() {
    yield takeLatest(FavTypes.ADD_FAVOURITE, triggerNotifications('like'))
}

export function* removeFromFavourites() {
    yield takeLatest(FavTypes.REMOVE_FAVOURITE, triggerNotifications('dislike'))
}

export function* favouritesSagas() {
    yield all([call(addToFavourites)])
}
