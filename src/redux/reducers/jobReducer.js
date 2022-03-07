import {
  GET_JOBS,
  GET_JOBS_ERROR,
  GET_JOBS_LOADING,
  SELECT_JOB,
} from "../actions"
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

    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      }

    default:
      return state
  }
}

export default jobReducer
