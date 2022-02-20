import { takeLatest, all, call, put } from 'redux-saga/effects'

import { FavTypes } from './favourites.types'
import { triggerNotifications } from '../notifications/notifications.actions'

export function* notificationsOn() {
    yield put(triggerNotifications('like'))
}
export function* notificationsOff() {
    yield put(triggerNotifications('dislike'))
}

export function* addToFavourites() {
    yield takeLatest(FavTypes.ADD_FAVOURITE, notificationsOn)
}
export function* removeFromFavourites() {
    yield takeLatest(FavTypes.REMOVE_FAVOURITE, notificationsOff)
}


export function* favouritesSagas() {
    yield all([call(addToFavourites), call(removeFromFavourites)])
}
