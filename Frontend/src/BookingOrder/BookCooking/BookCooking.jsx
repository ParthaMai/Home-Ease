import React, { useEffect } from 'react'
import './BookCooking.css'

const BookCooking = () => {

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
            <form onSubmit={BookCooking} className='place-order'>
                <div className="place-order-left">
                    <p className='title'>Booking Information</p>
                    <div className="multi-fields">
                        <input required type="number" placeholder="Number of Persons" />
                        <input required type="number" placeholder="Number of Chefs Requires" />
                    </div>
                    <div className="multi-fields">
                        <input required type="date" name="date" id="booking-date" placeholder="Date" />
                        <select required>
                            <option  value="">Select Time Slot</option>
                            <option>Morning (8 AM - 12 PM)</option>
                            <option>Afternoon (12 PM - 4 PM)</option>
                            <option>Evening (4 PM - 8 PM)</option>
                            <option>Night (8 PM - 11 PM)</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Occasion (optional)" />
                        <input type="text" placeholder="Location Type (Home/Office)" />
                    </div>
                    <textarea className='special-field' placeholder="Special Instructions (optional)" rows={4}></textarea>
                    <button type='submit'>Submit booking</button>
                </div>
            </form>
        </div>
    )
}

export default BookCooking
