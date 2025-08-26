import React, { useContext } from 'react'
import '../ServicePagesCSS/ServicePagesDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import BeautyItem from './BeautyItem'

const BeautyDisplay = () => {

    const {beauty_list} = useContext(StoreContext);

  return (
      <div>
          <div className='cleaning-display' id='cleaning-display'>
              <h2>Explore our Beauty Services </h2>
              <p className='explore-cleaning-text'>Choose from a wide range of trusted home services — from beauty and salon care like haircuts, facials, manicures, and makeup, to wellness solutions such as fitness training, yoga sessions, and relaxing massages. Our mission is to bring professional care, health, and relaxation to your home, helping you look good, feel strong, and live stress-free every day.</p>
              <hr />
              <h2 className='Find'>Find the Right Service for You</h2>
              <div className="cleaning-display-list">
                  {beauty_list.map((item, index) => {
                      return <BeautyItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} features={item.features} />
                  })}
              </div>
          </div>
      </div>
  )
}

export default BeautyDisplay
