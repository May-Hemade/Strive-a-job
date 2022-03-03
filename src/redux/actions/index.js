export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"
export const GET_JOBS = "GET_JOBS"
export const GET_JOBS_ERROR = "GET_JOBS_ERROR"
export const GET_JOBS_LOADING = "GET_JOBS_LOADING"

export const addToFavoriteAction = (addToFavorite) => ({
  type: ADD_FAVORITE,

  payload: addToFavorite,
})

export const removeFromFavoriteAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
})

export const getJobsAction = (search) => {
  console.log("get action jobs")
  return (dispatch) => {
    setTimeout(async () => {
      try {
        const searchQuery = search ? `&search=${search}` : ""
        let response = await fetch(
          "https://strive-jobs-api.herokuapp.com/jobs?limit=20" + searchQuery
        )
        if (response.ok) {
          let result = await response.json()
          console.log("JOBS IN ACTION CREATOR", result)

          dispatch({
            type: GET_JOBS,
            payload: result.data,
          })
          dispatch({
            type: GET_JOBS_LOADING,
          })
        } else {
          console.log("error happened fetching the jobs")

          dispatch({
            type: GET_JOBS_ERROR,
          })
          dispatch({
            type: GET_JOBS_LOADING,
          })
        }
      } catch (error) {
        console.log(error)

        dispatch({
          type: GET_JOBS_ERROR,
        })
        dispatch({
          type: GET_JOBS_LOADING,
        })
      }
    }, 1000)
  }
}
