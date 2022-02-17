import { combineReducers } from "redux"
import { persistReducer } from "redux-persist"
import searchReducer from "./search/search.reducer"
import storage from "redux-persist/lib/storage"
import favReducer from "./favourites/favourites.reducer"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['favourites']

}

const rootReducer = combineReducers({ search: searchReducer, favourites: favReducer })

export default persistReducer(persistConfig, rootReducer)