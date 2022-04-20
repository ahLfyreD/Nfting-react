import React from 'react'
import './TopHome.css'
import image1 from './image1.jpg'
import load from './image2.jpg'
import world from './image3.jpg'

const TopHome = () => {
  return (
    <div id="carouselExampleControls" className="carousel slide" 
        data-bs-ride="carousel">

      <div className="carousel-inner">

        <div className="carousel-item active">

          <img src={ image1 } id="image" className="d-block h-30 w-100" alt="..."/>

        </div>

        <div className="carousel-item">

          <img src={ load } id="image" className="d-block h-30 w-100" alt="..."/>

        </div>

        <div className="carousel-item">

          <img src={ world } id="image" className="d-block h-30 w-100" alt="..."/>

        </div>

      </div>

      <button className="carousel-control-prev" 
              type="button" data-bs-target="#carouselExampleControls" 
              data-bs-slide="prev">

        <span className="carousel-control-prev-icon" 
              aria-hidden="true"></span>

        <span className="visually-hidden">Previous</span>

      </button>

      <button className="carousel-control-next" 
              type="button" data-bs-target="#carouselExampleControls" 
              data-bs-slide="next">

        <span className="carousel-control-next-icon" 
              aria-hidden="true"></span>

        <span className="visually-hidden">Next</span>

      </button>
    </div>
  )
}

export default TopHome
