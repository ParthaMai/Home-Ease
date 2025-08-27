import React, { useEffect } from 'react'
import './WelderBooking.css'

const WelderBooking = () => {

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
                <h2>Explore our Welder Services</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted welding solutions — from gate and grill fabrication, metal frame repair, and railing installation, to window grills, steel doors, and custom metal works. Our mission is to provide strong, durable, and professional welding services at your doorstep, ensuring safety, reliability, and long-lasting quality for your home and workplace.</p>
                <hr />
            </div>
            <form onSubmit={WelderBooking} className='place-order'>
                <div className="place-order-left">
                    <p className="title">Booking Information</p>
                    <div className="fields">
                        <select required>
                            <option value="">Select Your Service</option>
                            <option>Gate & Grill Fabrication</option>
                            <option>Metal Frame Repair</option>
                            <option>Window & Balcony Grills</option>
                            <option>Steel Door & Shutter Work</option>
                            <option>Custom Welding Work</option>
                            <option>Roofing & Shed Welding</option>
                            <option>Fence & Boundary Welding</option>
                            <option>Industrial Welding Solutions - Heavy-duty</option>
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

export default WelderBooking
