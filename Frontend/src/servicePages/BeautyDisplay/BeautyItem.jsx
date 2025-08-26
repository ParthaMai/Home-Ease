import React from 'react'
import '../ServicePagesCSS/ServicePagesItem.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


const BeautyItem = ({ id, name, description, image, price, features }) => {
    return (
        <div>
            <div className='servicePages-item'>
                <div className="servicePages-item-img-container">
                    <img className="servicePages-item-image" src={image} alt="" />
                    <Link to='/BookingInformation'><img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" /></Link>
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
                        <select className="servicePages-item-features">
                            <option  value="">Select Your service</option>
                            {features.map((feature, index) => (
                                <option key={index} value={feature}>
                                    {feature}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
        </div>
    )
}

export default BeautyItem
