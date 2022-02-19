import { FetchBeersTypes } from "./beers.types";

export const setBeers = beers => ({
    type: FetchBeersTypes.SET_BEERS,
    payload: beers
})

export const fetchBeersStart = () => ({
    type: FetchBeersTypes.FETCH_BEERS_START
})

export const fetchBeersSuccess = (beers) => ({
    type: FetchBeersTypes.FETCH_BEERS_SUCCESS,
    payload: beers
})
export const fetchBeersFailure = (err) => ({
    type: FetchBeersTypes.FETCH_BEERS_FAILURE,
    payload: err
})