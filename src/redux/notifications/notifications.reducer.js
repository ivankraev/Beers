const INITIAL_STATE = {
    open: false,
    message: ''
}
const notificationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TRIGGER_NOTIFICATIONS':
            return {
                ...state,
                open: true
            }
        case 'TRIGGER_NOTIFICATIONSOFF':
            return {
                ...state,
                open: false
            }
        case 'SET_MESSAGE':
            return {
                ...state,
                message: action.payload
            }

        default:
            return state
    }
}
export default notificationsReducer

