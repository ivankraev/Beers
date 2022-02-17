import { FavTypes } from "./favourites.types"


export const addToFavourites = beer => ({
    type: FavTypes.ADD_FAVOURITE,
    payload: beer
})

export const removeFromFavourites = beers => ({
    type: FavTypes.REMOVE_FAVOURITE,
    payload: beers
})