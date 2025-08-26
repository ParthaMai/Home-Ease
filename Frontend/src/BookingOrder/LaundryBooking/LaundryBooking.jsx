import React, { useEffect }from 'react'
import './LaundryBooking.css'

const LaundryBooking = () => {
    // Set minimum date to today on component mount
    useEffect(() => {
        const dateInput = document.getElementById("booking-date");
        const today = new Date().toLocaleDateString('en-CA');
        if (dateInput) {
            dateInput.min = today;
        }
    }, []);

    return (
        <div>
            <div className='Booking-display'>
              <h2>Explore our Laundry Services</h2>
              <p className='explore-cleaning-text'>Choose from a wide range of reliable laundry and dry-cleaning solutions — from regular wash and fold, stain removal, and ironing, to premium dry cleaning, fabric care, and doorstep pickup & delivery. Our mission is to keep your clothes fresh, clean, and well-maintained, giving you more time to focus on what matters while we take care of your wardrobe with professional care.</p>
              <hr />
            </div>
            <form onSubmit={LaundryBooking} className='place-order'>
                <div className="place-order-left">
                    <p className='title'>Booking Information</p>
                    <div className="fields">
                        <select required>
                            <option value="">Select Your Service</option>
                             <option>Wash & Fold</option>
                            <option>Wash & Iron</option>
                            <option>Dry Cleaning</option>
                            <option>Steam Ironing</option>
                            <option>Premium Fabric Care</option>
                            <option>Household Laundry</option>
                            <option>Shoe & Bag Cleaning</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input required type="date" name="date" id="booking-date" placeholder="Date" />
                        <select required>
                            <option value="">Select Pickup Time Slot</option>
                            <option>Morning (8 AM - 10 AM)</option>
                            <option>Afternoon (12 PM - 2 PM)</option>
                            <option>Evening (4 PM - 6 PM)</option>
                            <option>Night (7 PM - 9 PM)</option>
                        </select>
                    </div>
                    <textarea className='special-field' placeholder="Special Instructions (optional)" rows={4}></textarea>
                    <button type='submit'>Add to Service</button>
                </div>
            </form>
        </div>
    )
}

export default LaundryBooking
