import React, { useContext } from 'react'
import './ServiceDispaly.css'
import { StoreContext } from '../../context/StoreContext'
import ServiceItem from '../ServiceItem/ServiceItem'


const ServiceDispaly = () => {

  const {service_list}= useContext(StoreContext)

  return (
    <div className='service-display' id='service-display'>
      <h2>Explore our service</h2>
      <p className='explore-service-text'>Choose from a wide range of trusted home services — from cleaning and cooking to beauty and repairs. Our mission is to make your life easier, one professional service at a time.</p>
      <hr />
      <h2 className='Find'>Find the Right Service for You</h2>
      <div className="service-display-list">
        {service_list.map((item, index) => {
            return <ServiceItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default ServiceDispaly
