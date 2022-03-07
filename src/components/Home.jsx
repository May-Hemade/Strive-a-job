import { useEffect } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import { getJobsAction } from "../redux/actions"

import JobList from "./JobList"

// const mapStateToProps = (state) => ({
//   jobs: state.jobs,
// })

// const mapDispatchToProps = (dispatch) => ({
//   getJobs: (search) => {
//     console.log("in mapDispatchToProps")
//     dispatch(getJobsAction(search))
//   },
// })

const Home = () => {
  const params = useParams()

  const jobs = useSelector((state) => state.jobs)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobsAction(params.search))
  }, [dispatch, params.search])

  return (
    <div>
      {jobs.isLoading && (
        <div className="d-flex justify-content-center m-4">
          <Spinner variant="primary" animation="border" />
        </div>
      )}

      {jobs.isError && (
        <div className="d-flex justify-content-center m-4">
          <Alert variant="danger">Could not load Jobs, try again</Alert>
        </div>
      )}

      <JobList jobs={jobs.listing}></JobList>
    </div>
  )
}
export default Home
