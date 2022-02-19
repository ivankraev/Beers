const INITIAL_STATE = {
    isLoading: false,
    beers: null,
    errorMessage: null
}
const fetchBeersReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_BEERS_START':
            return {
                ...state,
                isLoading: true
            }
        case 'FETCH_BEERS_SUCCESS':
            return {
                ...state,
                isLoading: false,
                beers: action.payload,
                errorMessage: null
            }
        case 'FETCH_BEERS_FAILURE':
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }

        default:
            return state
    }
}
export default fetchBeersReducer
