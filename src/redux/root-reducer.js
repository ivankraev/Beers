import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import searchReducer from "./search/search.reducer"
import favReducer from "./favourites/favourites.reducer"
import notificationsReducer from "./notifications/notifications.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites']
}

const rootReducer = combineReducers({
    search: searchReducer,
    favourites: favReducer,
    notifications: notificationsReducer
})

export default persistReducer(persistConfig, rootReducer)