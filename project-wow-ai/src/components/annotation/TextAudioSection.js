import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SlideContent from '../public/SlideContent'
import BoxContent4 from './public_anno/BoxContent4'

const TextAudioSection = ({content}) => {
  return (
    <div>
        <Container>
        <h2 className='title-content'></h2>
                <Row>
                    <Col xs={9}>
                        <SlideContent content={content}/>
                    </Col>
                    <Col xs={3} style={{paddingTop: "4vh"}}>
                        {content.boxst.map((content, index) => (
                            <BoxContent4 key={index} content={content} />
                        ))}
                    </Col>
                </Row>
        </Container>
    </div>
  )
}

export default TextAudioSection