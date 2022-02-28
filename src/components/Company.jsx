import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import JobList from "./JobList"

export default function Company() {
  const [jobs, setJobs] = useState([])
  const { company } = useParams()

  const loadJobs = async () => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?company=${company}`
      )

      if (resp.ok) {
        let result = await resp.json()
        setJobs(result.data)
      } else {
        console.log("error")
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadJobs()
  })
  return (
    <div>
      <JobList jobs={jobs}></JobList>
    </div>
  )
}
