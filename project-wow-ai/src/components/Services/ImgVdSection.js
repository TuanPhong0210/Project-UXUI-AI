import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import BoxContent3 from './public-service/BoxContent3'

const ImgVdSection = ({ content }) => {
    return (
        <div>
            <Container>
                <h2 className='title-content'></h2>
                <Row>
                    <Col xs={9}>
                        <SlideContent content={content}/>
                    </Col>
                    <Col xs={3}>
                        
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ImgVdSection