const INITIAL_STATE = {
    search: '',
    beers: [],
}

const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload
            }
        case 'SET_BEERS':
            return {
                ...state,
                beers: action.payload
            }

        default:
            return state
    }
}

export default searchReducer