

const INITIAL_STATE = {
    favouritesSet: []
}


const favReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_FAVOURITE':
            return {
                favouritesSet: [...state.favouritesSet, action.payload]

            }
        case 'REMOVE_FAVOURITE':
            return {
                favouritesSet: state.favouritesSet.filter(beer => beer.id !== action.payload.id)
            }
        default:
            return state
    }
}

export default favReducer