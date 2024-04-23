import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className="d-flex justify-content-between">
        <div style={{width:"400px"}} className='intro'>
          <h5>        <i className="fa-solid fa-music me-3"></i> Media Player</h5>
          <p>Designed and built with aii the loves in the world by the  luminar team with the help of our contributors</p>
          <p>Code lincensed Luminar, docs CC BY 3.0</p>
          <p>Currently v5.3.2</p>
        </div>
        <div className='links d-flex flex-column'>
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}} >Landing page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}} >Home page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}} >History page</Link>
        </div>
        <div className='guides d-flex flex-column'>
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none',color:'white'}}>React</a>
          <a href="https://react-bootstrap.github.io/" target='_blank' style={{textDecoration:'none',color:'white'}}>React Bootstraps</a>
          <a href="https://reactrouter.com/en/main" target='_blank' style={{textDecoration:'none',color:'white'}}>React Router</a>
        </div>
        <div className='contact'>
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type="text" placeholder='Enter your email here' className="form-control" />
            <button className='btn btn-info ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div >
          <div className="icons d-flex justify-content-between mt-3">
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-brands fa-twitter"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-brands fa-instagram"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-brands fa-facebook"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-brands fa-linkedin"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-brands fa-github"></i></a>
            <a href="" target='_blank' style={{textDecoration:'none',color:'white'}} ><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'> Copyright © Jan Batch 2024 Batch, Media Player. Built with React</p>
    </div>
  )
}

export default Footer