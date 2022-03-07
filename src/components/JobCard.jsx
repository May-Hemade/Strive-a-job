import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addToFavoriteAction, selectJobAction } from "../redux/actions"

// const mapStateToProps = (state) => ({
//   favorites: state.favorites.listing,
// })

// const mapDispatchToProps = (dispatch) => ({
//   addToFavorite: (favoriteToAdd) => {
//     dispatch(addToFavoriteAction(favoriteToAdd))
//   },
// })

function JobCard({ job }) {
  const favorites = useSelector((state) => state.favorites.listing)

  const dispatch = useDispatch()
  return (
    <div>
      <Card
        className="mt-4"
        onClick={() => {
          dispatch(selectJobAction(job))
        }}
      >
        <Card.Body>
          <Card.Title>{job.title}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {job.category}
          </Card.Subtitle>
          {/* <div dangerouslySetInnerHTML={{ __html: job.description }}></div> */}
          <Link to={`/companies/${job.company_name}`}>{job.company_name}</Link>

          {!isEmpty(job.salary) && <Card.Text>{job.salary}</Card.Text>}
          <div>
            <Button
              className="mt-3"
              color="primary"
              disabled={favorites.includes(job.company_name)}
              onClick={() => {
                dispatch(addToFavoriteAction(job.company_name))
              }}
            >
              Favorite
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}

function isEmpty(str) {
  return !str || str.length === 0
}

export default JobCard
