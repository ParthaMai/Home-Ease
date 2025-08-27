import React, { useEffect } from 'react'
import './ElectricBooking.css'

const ElectricBooking = () => {

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
                <h2>Explore our Electrician Services</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted electrical solutions — from wiring repair, switchboard installation, and ceiling fan fixing, to appliance connections, lighting setup, and full-home electrical maintenance. Our mission is to provide safe, reliable, and professional electrical care at your doorstep, ensuring your home and office run smoothly without interruptions.</p>
                <hr />
            </div>
            <form onSubmit={ElectricBooking} className='place-order'>
                <div className="place-order-left">
                    <p className="title">Booking Information</p>
                    <div className="fields">
                        <select required>
                            <option value="">Select Your Service</option>
                            <option>Emergency Power Solutions</option>
                            <option>Wiring & Rewiring</option>
                            <option>Switchboard Installation & Repair</option>
                            <option>Lighting Solutions</option>
                            <option>Ceiling Fan & Exhaust Fan Services</option>
                            <option>Appliance Installation</option>
                            <option>Inverter & Stabilizer Setup</option>
                            <option>Circuit Breaker & Fuse Repair</option>
                            <option>New Point Installation</option>
                            <option>Electrical Maintenance</option>
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

export default ElectricBooking
