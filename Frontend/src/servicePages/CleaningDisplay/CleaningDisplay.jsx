import React, { useContext } from 'react'
import '../ServicePagesCSS/ServicePagesDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import CleaningItem from '../CleaningItem/CleaningItem';



const Cleaning = () => {

    const {cleaning_list} = useContext(StoreContext);

    return (
        <div>
            <div className='cleaning-display' id='cleaning-display'>
                <h2>Explore our service</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted home services — from cleaning and cooking to beauty and repairs. Our mission is to make your life easier, one professional service at a time.</p>
                <hr />
                <h2 className='Find'>Find the Right Service for You</h2>
                <div className="cleaning-display-list">
                    {cleaning_list.map((item, index) => {
                        return <CleaningItem key={index} id={item._id} name={item.name} description={item.description} image={item.image} price={item.price} features ={item.features} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Cleaning
