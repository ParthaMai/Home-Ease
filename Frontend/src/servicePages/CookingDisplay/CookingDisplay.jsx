import React, { useContext } from 'react'
import '../ServicePagesCSS/ServicePagesDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import CookingItem from './CookingItem'

const CookingDisplay = () => {

  const{cooking_list} = useContext(StoreContext);

  return (
    <div>
      <div className='cleaning-display' id='cleaning-display'>
        <h2>Explore our Cooking service</h2>
        <p className='explore-cleaning-text'>Choose from a wide range of trusted cooking services — from daily meal prep to home chefs, party/event cooking, and baking. Our mission is to make your mealtimes delicious and stress-free, one professional service at a time.</p>
        <hr />
        <h2 className='Find'>Find the Right Service for You</h2>
        <div className="cleaning-display-list">
          {cooking_list.map((item, index) => {
            return <CookingItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} features={item.features} />
          })}
        </div>
      </div>
    </div>
  )
}

export default CookingDisplay
