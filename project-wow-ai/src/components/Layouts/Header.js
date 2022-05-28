import { faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CardMedia, styled } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const LinkStyled = styled(Link)({
  color: "var(--primary-text)",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "400",
  transition: "all .3s ease",
  margin: "0 2vh 0 2vh",

  "&:hover": {
    color: "var(--primary-text)",
    transform: "scale(1.05)",
  }
})

const ItemLink = styled(Link)({
  color: "var(--secondary-text)",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "400",
  whiteSpace: "nowrap",

  "&:hover": {
    color: "var(--secondary-text)",
    fontWeight: "500",
  },
})

const NavDropdownStyled = styled(NavDropdown)({
  color: "white",
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "400",
  "&:hover": {
    color: "white",
  }
})

const liStyled = {
  paddingRight: "10px",
}

const CardMediaStyled = styled(CardMedia)({
  transition: "all .3s ease",
  "&:hover": {
    transform: "scale(1.05)",
  }
})
const LinkInfo = {
  fontSize: "16px",
  margin: "0 0 0 4vh",
  color: "var(--primary-text)",
  textDecoration: "none",
  "&:hover": {
    color: "var(--primary-text)",
  }
}

const Header = () => {
  return (
    <div style={{ backgroundColor: "var(--primary-bg)" }}>
      <Container className='header-info' style={{ display: "flex", justifyContent: "space-between" }}>
        <NavDropdown title="English">
          <ul>
            <li style={{ textDecoration: "none" }}>
              <ItemLink to="/">English</ItemLink>
            </li>
            <li style={{ textDecoration: "none" }}>
              <ItemLink to="/">Viet Nam</ItemLink>
            </li>
          </ul>
        </NavDropdown>
        <div style={{ padding: "0.5rem 1rem", display: "flex", justifyContent: "space-between"}}>
          <Link to="#" style={LinkInfo}>
            <FontAwesomeIcon icon={faLocationDot} />
            &nbsp;
            34th ST STE 1018, NY, USA
          </Link>
          <Link to="#" style={LinkInfo}>
            <FontAwesomeIcon icon={faEnvelope} />
            &nbsp;
            contact@wow-ai.com
          </Link>
        </div>
      </Container>
      <hr style={{ color: "var(--primary-text)", height: "2px", marginTop: "0" }} />
      <Navbar expand="lg">

        <Container >
          <Link to="/">
            <CardMediaStyled
              component="img"
              height="100%"
              image='/Frame.png'
            />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='navbar-contai'>
            <Nav className="me-auto">

            </Nav>
            <NavDropdownStyled title="Services" id="basic-nav-dropdown">
              <ul>
                <li style={liStyled}>
                  <ItemLink to="/data-transcription">
                    Data Transcription
                  </ItemLink>
                </li>
                <li style={liStyled}>
                  <ItemLink to="/data-collection">
                    Data Collection
                  </ItemLink>
                </li>
                <li style={liStyled}>
                  <ItemLink to="/data-annotation">
                    Data Annotation
                  </ItemLink>
                </li>
              </ul>
            </NavDropdownStyled>
            <LinkStyled to="/off-the-shelf">
              Off The Shelf data
            </LinkStyled>
            <LinkStyled to="/resources">
              Resources
            </LinkStyled>
            <NavDropdownStyled title="Company" id="basic-nav-dropdown">
              <ul>
                <li>
                  <ItemLink to="/about-us">
                    About Us
                  </ItemLink>
                </li>
                <li>
                  <ItemLink to="/contact">
                    Contact
                  </ItemLink>
                </li>
              </ul>
            </NavDropdownStyled>
            <LinkStyled to="/join-our-talent-pool">
              Join Our Talent Pool
            </LinkStyled>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header