import React from "react"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { removeFromFavoriteAction } from "../redux/actions"
import { FaTrash } from "react-icons/fa"
import { Button } from "react-bootstrap"

const mapStateToProps = (state) => ({
  favorites: state.favorites.listing,
})

const mapDispatchToProps = (dispatch) => ({
  removeFromFavorite: (index) => {
    dispatch(removeFromFavoriteAction(index))
  },
})

function Favorites({ favorites, removeFromFavorite }) {
  console.log(favorites)

  return (
    <ul>
      {favorites.map((company, i) => (
        <li key={company} className="list">
          <div className="m-4 list">
            <Link className="list" to={`/companies/${company}`}>
              {company}
            </Link>
            <Button
              variant="danger"
              className=" ml-5"
              onClick={() => removeFromFavorite(i)}
            >
              <FaTrash />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)
