import { SearchActionTypes } from "./search.types"


export const setSearchField = searchText => ({
    type: SearchActionTypes.SET_SEARCH,
    payload: searchText
})

export const setSearchedBeers = beers => ({
    type: SearchActionTypes.SET_BEERS,
    payload: beers
})