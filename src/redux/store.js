import { createStore, applyMiddleware } from "redux";
import { persistStore } from 'redux-persist'
import createSagaMiddleware from "redux-saga";
import logger from 'redux-logger'
import rootSaga from "./root-saga";
import rootReducer from "./root-reducer";
const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]
export const store = createStore(rootReducer, applyMiddleware(...middlewares))
export const persistor = persistStore(store)

const configuratedStore = { store, persistor }

sagaMiddleware.run(rootSaga)

export default configuratedStore