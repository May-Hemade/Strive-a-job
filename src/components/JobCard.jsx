import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { addToFavoriteAction } from "../redux/actions"

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  addToFavorite: (favoriteToAdd) => {
    dispatch(addToFavoriteAction(favoriteToAdd))
  },
})

function JobCard({ job, addToFavorite }) {
  return (
    <div>
      <Card className="mt-4">
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
              onClick={() => {
                addToFavorite(job.company_name)
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

export default connect(mapStateToProps, mapDispatchToProps)(JobCard)
