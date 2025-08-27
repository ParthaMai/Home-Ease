import React, {useEffect} from 'react'
import './PlumberBooking.css'

const PlumberBooking = () => {

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
            <div className="Booking-display">
                <h2>Explore our Plumber Services</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted plumbing solutions — from leak repair, pipe fittings, and tap installations, to bathroom fittings, kitchen sink services, and full-home plumbing maintenance. Our mission is to provide quick, reliable, and professional plumbing care at your doorstep, ensuring smooth water flow, zero leakages, and a hassle-free living experience.</p>
                <hr />
            </div>
            <form onSubmit={PlumberBooking} className='place-order'>
                <div className="place-order-left">
                    <p className="title">Booking Information</p>
                    <div className="fields">
                        <select required>
                            <option value="">Select Your Service</option>
                            <option>Leakage Repair</option>
                            <option>Tap & Shower Installation</option>
                            <option>Pipe Fitting & Replacement</option>
                            <option>Blockage Removal</option>
                            <option>Water Tank Installation & Cleaning</option>
                            <option>Bathroom Fittings</option>
                            <option>Kitchen Sink Services</option>
                            <option>Full Home Plumbing Maintenance</option>
                            <option>📞 Call us to book your exact service needs</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input required type="date" name="date" id="booking-date" placeholder="Date" />
                        <select required>
                            <option value="">Select Time Slot</option>
                            <option>Morning (8 AM - 10 AM)</option>
                            <option>Afternoon (10 PM - 1 PM)</option>
                            <option>Evening (4 PM - 6 PM)</option>
                            <option>Night (7 PM - 9 PM)</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input type='text' placeholder='Location Type (Home/Office)' />
                    </div>
                    <textarea className='special-field' placeholder="Special Instructions (optional)" rows={4}></textarea>
                    <button type='submit'>Add to Service</button>
                </div>
            </form>
        </div>
    )
}

export default PlumberBooking
