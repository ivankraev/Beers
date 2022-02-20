import { chooseMessage } from "./notifications.utils"
const INITIAL_STATE = {
    open: false,
    message: ''
}
const notificationsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'TRIGGER_NOTIFICATIONS':
            return {
                message: chooseMessage(action),
                open: true
            }
        case 'TRIGGER_NOTIFICATIONSOFF':
            return {
                ...state,
                open: false
            }
        default:
            return state
    }
}
export default notificationsReducer

