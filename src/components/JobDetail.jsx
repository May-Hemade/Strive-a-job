import React from "react"
import { Card } from "react-bootstrap"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function JobDetail() {
  const job = useSelector((state) => state.jobs.selectedJob)

  return (
    <div>
      {job && (
        <Card className="mt-4">
          <Card.Body>
            <Card.Title>{job.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {job.category}
            </Card.Subtitle>
            <div dangerouslySetInnerHTML={{ __html: job.description }}></div>
            <Link to={`/companies/${job.company_name}`}>
              {job.company_name}
            </Link>

            {!isEmpty(job.salary) && <Card.Text>{job.salary}</Card.Text>}
          </Card.Body>
        </Card>
      )}
    </div>
  )
}
function isEmpty(str) {
  return !str || str.length === 0
}

export default JobDetail
