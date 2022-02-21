import { FavTypes } from './favourites.types'

export const addToFavourites = (beer) => ({
  type: FavTypes.ADD_FAVOURITE,
  payload: beer,
})

export const removeFromFavourites = (beer) => ({
  type: FavTypes.REMOVE_FAVOURITE,
  payload: beer,
})
