import { createStore, combineReducers, compose, applyMiddleware } from "redux"

import jobReducer from "../reducers/jobReducer"
import favoriteReducer from "../reducers/favoriteReducer"

import thunk from "redux-thunk"

const aComposeFunction = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: [],
  jobs: [],
}

const bigReducer = combineReducers({
  favorites: favoriteReducer,
  jobs: jobReducer,
})

export const configureStore = createStore(
  bigReducer,
  initialState,
  aComposeFunction(applyMiddleware(thunk))
)
