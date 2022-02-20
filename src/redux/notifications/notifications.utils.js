export function chooseMessage({ payload }) {
  return payload === 'like' ? 'Added to favourites' : 'Removed from favourites'
}
