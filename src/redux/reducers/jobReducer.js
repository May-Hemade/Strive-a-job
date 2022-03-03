import { GET_JOBS, GET_JOBS_ERROR, GET_JOBS_LOADING } from "../actions"
import { initialState } from "../store"

const jobReducer = (state = initialState.jobs, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        listing: action.payload,
      }

    case GET_JOBS_ERROR:
      return {
        ...state,
        isError: true,
      }

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: false,
      }

    default:
      return state
  }
}

export default jobReducer
