import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import JobCard from "./JobCard"

export default function JobList({ jobs }) {
  return (
    <Container>
      <Row>
        {jobs.map((job) => (
          <Col md={6} key={job._id}>
            <JobCard job={job}></JobCard>
          </Col>
        ))}
      </Row>
    </Container>
  )
}
