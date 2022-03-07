import React from "react"

import JobCard from "./JobCard"

export default function JobList({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <div key={job._id}>
          <JobCard job={job}></JobCard>
        </div>
      ))}
    </div>
  )
}
