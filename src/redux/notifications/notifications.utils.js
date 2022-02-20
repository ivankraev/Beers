export function chooseMessage(action) {
    if (action.payload === 'like') {
        return 'Added to favourites'
    }
    else {
        return 'Removed from favourites'
    }
}