

const INITIAL_STATE = {
    search: '',
}


const searchReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_SEARCH':
            return {
                ...state,
                search: action.payload
            }

        default:
            return state
    }
}

export default searchReducer