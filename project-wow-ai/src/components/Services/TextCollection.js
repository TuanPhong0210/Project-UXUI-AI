import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BoxContent2 from './public-service/BoxContent2'
import SlideContent from '../public/SlideContent'
import TitleSection from './public-service/TitleSection'

const TextCollection = ({ content }) => {
    return (
        <div>
            <Container>
                <TitleSection content={content} />
                <Row>
                    <Col xs={8}>
                        <SlideContent content={content} />
                    </Col>
                    <Col xs={4}>
                        {content.boxst.map((content, index) => (
                            <BoxContent2 key={index} content={content}/>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default TextCollection