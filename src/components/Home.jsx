import { useEffect } from "react"
import { Alert, Spinner } from "react-bootstrap"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { getJobsAction } from "../redux/actions"

import JobList from "./JobList"

const mapStateToProps = (state) => ({
  jobs: state.jobs,
})

const mapDispatchToProps = (dispatch) => ({
  getJobs: (search) => {
    console.log("in mapDispatchToProps")
    dispatch(getJobsAction(search))
  },
})

const Home = ({ getJobs, jobs }) => {
  const params = useParams()

  useEffect(() => {
    getJobs(params.search)
  }, [getJobs, params.search])

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
export default connect(mapStateToProps, mapDispatchToProps)(Home)
