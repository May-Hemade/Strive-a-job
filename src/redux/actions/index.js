export const ADD_FAVORITE = "ADD_FAVORITE"
export const REMOVE_FROM_FAVORITE = "REMOVE_FROM_FAVORITE"
export const addToFavoriteAction = (addToFavorite) => ({
  type: ADD_FAVORITE,

  payload: addToFavorite,
})

export const removeFromFavoriteAction = (indexToRemove) => ({
  type: REMOVE_FROM_FAVORITE,
  payload: indexToRemove,
})
