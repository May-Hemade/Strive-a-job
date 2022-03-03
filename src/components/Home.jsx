import { Component } from "react"
import { connect } from "react-redux"

import { getJobsAction } from "../redux/actions"

import JobList from "./JobList"

const mapStateToProps = (state) => ({
  jobs: state.jobs.listing,
})

const mapDispatchToProps = (dispatch) => ({
  getJobs: () => {
    console.log("in mapDispatchToProps")
    dispatch(getJobsAction())
  },
})

class Home extends Component {
  componentDidMount = async () => {
    console.log("this.props", this.props)
    this.props.getJobs()
  }

  // const loadJobs = async () => {
  //   try {
  //     const searchQuery = params.search ? `&search=${params.search}` : ""

  //     let resp = await fetch(
  //       "https://strive-jobs-api.herokuapp.com/jobs?limit=20" + searchQuery
  //     )
  //     if (resp.ok) {
  //       let result = await resp.json()
  //       setJobs(result.data)
  //     } else {
  //       console.log("error")
  //     }
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  render() {
    return (
      <div>
        <JobList jobs={this.props.jobs}></JobList>
      </div>
    )
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
