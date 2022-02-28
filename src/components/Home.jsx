import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import JobList from "./JobList"

export default function Home() {
  const [jobs, setJobs] = useState([])

  const params = useParams()

  useEffect(() => {
    loadJobs()
  })

  const loadJobs = async () => {
    try {
      const searchQuery = params.search ? `&search=${params.search}` : ""

      let resp = await fetch(
        "https://strive-jobs-api.herokuapp.com/jobs?limit=20" + searchQuery
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

  return (
    <div>
      <JobList jobs={jobs}></JobList>
    </div>
  )
}
