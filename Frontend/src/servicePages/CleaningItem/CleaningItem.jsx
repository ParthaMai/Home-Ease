import React from 'react'
import '../ServicePagesCSS/ServicePagesItem.css'
import { assets } from '../../assets/assets'

const CleaningItem = ({ id, name, description, image, price, features }) => {
    return (
        <div>
            <div className='servicePages-item'>
                <div className="servicePages-item-img-container">
                    <img className="servicePages-item-image" src={image} alt="" />
                </div>
                <div className="servicePages-item-info">
                    <div className="servicePages-item-name-rating">
                        <p>{name}</p>
                        <img src={assets.rating_starts} alt='' />
                    </div>
                    <p className="servicePages-item-description">
                        {description}
                    </p>
                     <p className='servicePages-item-price'>₹{price}</p>
                    {features && (
                        <ul className="servicePages-item-features">
                            {features.map((feature, index) => (
                                <li key={index}> {feature}</li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CleaningItem
