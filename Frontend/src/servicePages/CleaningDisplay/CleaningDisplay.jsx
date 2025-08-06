import React, { useContext } from 'react'
import '../ServicePagesCSS/ServicePagesDisplay.css'
import { StoreContext } from '../../context/StoreContext';
import CleaningItem from '../CleaningItem/CleaningItem';



const Cleaning = () => {

    const {cleaning_list} = useContext(StoreContext);

    return (
        <div>
            <div className='cleaning-display' id='cleaning-display'>
                <h2>Explore our Cleaning service</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted cleaning services — from deep home cleaning to sofa, kitchen, and bathroom sanitization. Our mission is to make your space spotless and stress-free, one professional service at a time.</p>
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
