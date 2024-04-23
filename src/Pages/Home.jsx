import React from 'react'
import Add from '../Componets/Add'
import Category from '../Componets/Category'
import View from '../Componets/View'
import { Link } from 'react-router-dom'



function Home() {
  return (
    <>
    <div className="container my-5 d-flex justify-content-between">
      <Add/>
      <Link to={'/history'}>Watch History</Link>
    </div>
    <div className="container-fluid my-5 row">
      <div className="col-lg-6">
        <h3>All Videos</h3>
        <View/>
      </div>
      <div className="col-lg-6">
        <Category/>
      </div>
    </div>
    
    </>
  )
}

export default Home