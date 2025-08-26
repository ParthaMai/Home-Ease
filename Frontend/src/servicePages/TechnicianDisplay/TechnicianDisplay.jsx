import React, { useContext } from 'react'
import '../ServicePagesCSS/ServicePagesDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import TechnicianItem from './TechnicianItem'

const TechnicianDisplay = () => {

    const {technicians_list} = useContext(StoreContext);

  return (
    <div>
       <div className='cleaning-display' id='cleaning-display'>
              <h2>Explore our Technical Services </h2>
              <p className='explore-cleaning-text'>Choose from a wide range of trusted technician services — from AC and refrigerator repair to TV, washing machine, chimney, and water purifier maintenance. Our mission is to provide fast, reliable, and professional appliance care at your home, ensuring comfort and convenience every day.</p>
              <hr />
              <h2 className='Find'>Find the Right Service for You</h2>
              <div className="cleaning-display-list">
                  {technicians_list.map((item, index) => {
                      return <TechnicianItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} features={item.features} />
                  })}
              </div>
          </div>
    </div>
  )
}

export default TechnicianDisplay
