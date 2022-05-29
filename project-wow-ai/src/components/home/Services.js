import { Box, Container, styled } from '@mui/material'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BoxStyled = styled(Box)({
    border: "2px solid var(--secondary-bg)",
    borderRadius: "15px",
    padding: "10px",
    aspectRatio: "1/1",
    width: "100%",
})
const flexBox = {
    display: "flex",
    justifyContent: "space-bretween",
    flexDirection: "column",
    height: "100%"
}

const Services = () => {
    return (
        <div style={{ background: "var(--primary-bg)" }}>
            <Container style={{ width: "90%", padding: "10vh auto 10vh auto" }}>
                <div className='title-content' style={{ textAlign: "center" }}>
                    Services
                </div>
                <Row style={{color: "var(--primary-text)"}}>
                    <Col xs={6}>
                        <BoxStyled>
                            <img
                                src='/images/Rectangle112.png'
                                alt='Services'
                                style={{
                                    width: "99%",
                                    borderRadius: "15px",
                                }}
                            />
                        </BoxStyled>
                    </Col>
                    <Col xs={3}>
                        <div style={flexBox}>
                            <BoxStyled>
                                <h2 className='title-description'>+ Data collection</h2>
                                <ul>
                                    <li>Text data collection</li>
                                    <li>Image data collection</li>
                                    <li>Speech data collection</li>
                                    <li>Audio data collection</li>
                                </ul>
                            </BoxStyled>
                            <BoxStyled>
                                <h2 className='title-description'>+ Transcription</h2>
                                <ul>
                                    <li>Image Transcription</li>
                                    <li>Audio Transcription</li>
                                    <li>Tailor-made solution</li>
                                </ul>
                            </BoxStyled>
                        </div>
                    </Col>
                    <Col xs={3}>
                        <div style={flexBox}>
                            <BoxStyled>
                                <h2 className='title-description'>+ Data annotation</h2>
                                <ul>
                                    <li>Text data annotation</li>
                                    <li>Image data annotation</li>
                                    <li>Speech data annotation</li>
                                    <li>Audio data annotation</li>
                                </ul>
                            </BoxStyled>
                            <BoxStyled>
                                <h2 className='title-description'>+ Tailor-made solution ?</h2>
                            </BoxStyled>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services