import { useEffect } from "react"
import { connect } from "react-redux"
import { useParams } from "react-router-dom"

import { getJobsAction } from "../redux/actions"

import JobList from "./JobList"

const mapStateToProps = (state) => ({
  jobs: state.jobs.listing,
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
      <JobList jobs={jobs}></JobList>
    </div>
  )
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
