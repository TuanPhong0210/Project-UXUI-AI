import { CardMedia, Container, Typography } from '@mui/material'

import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)" }}>
      <Container>
        <div>
          <Link to="/">
            <CardMedia
              component="img"
              height="100%"
              image='/Frame.png'
            />
          </Link>
          <Typography style={{textAlign: "justify", color: "var(--primary-text)"}}>
          A trusted partner that provides high-quality data solutions for AI training at a large scale.
          </Typography>
        </div>
        <div>
          Company
        </div>
      </Container>
    </div>
  )
}

export default Footer