import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/music-beat.gif'
import managingImg from '../assets/managing.gif'
import categoryImg from '../assets/category.gif'
import historyImg from '../assets/equlaiser.gif'
import { Card } from 'react-bootstrap'
function Landing() {
  return (
    <>
      <div className="landingsection container">
        <div className='row align-items-center my-5'>
          <div className="col-lg-6">
            <h3>Wlecome to <span className='text-warning'>Media Player</span> </h3>
            <p className='mt-3' style={{ textAlign: 'justify' }}>  Media Player App will allow user to add or remove their videos from YouTube videos and also arrange them in different categorories by drag and drop. User can also manage their watch history as well. What are you waiting for, let starts exporing our site!!! </p>
            <Link to={'/home'} className='btn btn-info mt-3'>Get Started</Link>
          </div>
          {/* <div className="col"></div> */}
          <div className="col-lg-6">
            <img className='ms-5' src={landingImg} alt="landing page" />
          </div>
        </div>
        {/* features */}
        <div className="Features my-5">
          <h3 className='text-center'>Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={managingImg} />
                <Card.Body>
                  <Card.Title>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload, view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={categoryImg} />
                <Card.Body>
                  <Card.Title>Categories Videos</Card.Title>
                  <Card.Text>
                    User can Categories the video by drag and drop feature
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
            <Card className='p-2' style={{ width: '22rem',height:'400px' }}>
                <Card.Img variant="top" style={{height:'250px'}} className='img-fluid' src={historyImg} />
                <Card.Body>
                  <Card.Title>Managing History</Card.Title>
                  <Card.Text>
                    User can manage the watch history of all videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        {/* end content */}
        <div className="my-5 row border p-5">
          <div className="col-lg-5">
            <h3 className='text-warning'>Simple, Fast, and Powerfull</h3>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Play Everthing :</span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, doloremque soluta fugit necessitatibus cum, blanditiis modi,             
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Categories Videos :</span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, doloremque soluta fugit necessitatibus cum, blanditiis modi,             
            </p>
            <p style={{textAlign:'justify'}}>
              <span className='fs-5'>Managing History :</span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, doloremque soluta fugit necessitatibus cum, blanditiis modi,             
            </p>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
          <iframe width="100%" height="360" src="https://www.youtube.com/embed/L0yEMl8PXnw?si=Z6tJl_fHtqF1fJJh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>

    </>
  )
}

export default Landing 