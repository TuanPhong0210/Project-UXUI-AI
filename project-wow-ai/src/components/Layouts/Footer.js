import { CardMedia, Container, Typography } from '@mui/material'

import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)", color: "var(--primary-text)" }}>
      <hr />
      <Container style={{width: "1330px"}}>
        <Row>
          <Col>
            <Link to="/">
              <CardMedia
                component="img"
                height="100%"
                image='/Frame.png'
              />
            </Link>
            <Typography style={{ textAlign: "justify" }}>
              A trusted partner that provides high-quality data solutions for AI training at a large scale.
            </Typography>
          </Col>
          <Col>
            <Typography>Company</Typography>
          </Col>
          <Col>
            <Typography>Data Collection</Typography>
          </Col>
          <Col>
            <Typography>Data Annotation</Typography>
          </Col>
          <Col>
            <Typography>Data Transcription</Typography>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer