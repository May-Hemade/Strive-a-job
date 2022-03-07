import { createStore, combineReducers, compose, applyMiddleware } from "redux"

import jobReducer from "../reducers/jobReducer"
import favoriteReducer from "../reducers/favoriteReducer"

import thunk from "redux-thunk"

import { persistReducer, persistStore } from "redux-persist"
import { encryptTransform } from "redux-persist-transform-encrypt"
import sessionStorage from "redux-persist/es/storage/session"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: {
    listing: [],
  },

  jobs: {
    listing: [],
    isError: false,
    isLoading: true,
    selectedJob: {},
  },
}

const persistConfig = {
  key: "root",
  storage: sessionStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_PERSIST_KEY,
    }),
  ],
}

const bigReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobReducer,
})

const persistedReducer = persistReducer(persistConfig, bigReducer)

const configureStore = createStore(
  persistedReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
)

const persistor = persistStore(configureStore)

export { configureStore, persistor }
