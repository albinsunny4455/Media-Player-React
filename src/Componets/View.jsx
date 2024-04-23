import React from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
function View() {
  return (
    <>
      <Row className='p-3 m-2'>
        <Col className='mb-4' sm={6} md={6} lg={4}>
          <VideoCard/>
        </Col>
        <Col className='mb-4' sm={6} md={6} lg={4}>
          <VideoCard/>
        </Col>
        <Col className='mb-4' sm={6} md={6} lg={4}>
          <VideoCard/>
        </Col>
        <Col className='mb-4' sm={6} md={6} lg={4}>
          <VideoCard/>
        </Col>

      </Row>
    </>
  )
}

export default View