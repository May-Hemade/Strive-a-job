import { ADD_FAVORITE, REMOVE_FROM_FAVORITE } from "../actions"
import { initialState } from "../store"

const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        listing: [...state.listing, action.payload],
      }

    case REMOVE_FROM_FAVORITE:
      return {
        ...state,

        listing: [
          ...state.listing.slice(0, action.payload),
          ...state.listing.slice(action.payload + 1),
        ],
      }
    default:
      return state
  }
}

export default favoriteReducer
