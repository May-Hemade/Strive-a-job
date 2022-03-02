import { createStore } from "redux"
import mainReducer from "../reducers"

export const initialState = {
  favorites: [],
}

export const configureStore = createStore(
  mainReducer,
  initialState,
  process.env.REACT_APP_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)
