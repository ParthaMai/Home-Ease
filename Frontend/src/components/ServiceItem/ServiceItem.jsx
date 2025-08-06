import React, { useEffect, useState } from 'react'
import './ServiceItem.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ServiceItem = ({id,name,description,image}) => {

 const routePath = `/${name.replace(/\s+/g, '').toLowerCase()}`;


  return (
      <div>
           <Link to= {routePath}>
              <div className='service-item'>
                  <div className="service-item-img-container">
                      <img className="service-item-image" src={image} alt="" />
                  </div>
                  <div className="service-item-info">
                      <div className="service-item-name-rating">
                          <p>{name}</p>
                          <img src={assets.rating_starts} alt='' />
                      </div>
                      <p className="service-item-description">
                          {description}
                      </p>
                  </div>
              </div>
            </Link>
      </div>
  )
}

export default ServiceItem
