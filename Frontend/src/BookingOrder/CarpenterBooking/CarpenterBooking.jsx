import React, {useEffect} from 'react'
import './CarpenterBooking.css'

const CarpenterBooking = () => {

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
                <h2>Explore our Carpenter Services</h2>
                <p className='explore-cleaning-text'>Choose from a wide range of trusted carpentry solutions — from furniture repair, door and window fixing, and wooden shelf installation, to custom furniture design, polishing, and modular kitchen work. Our mission is to bring skilled craftsmanship to your home, ensuring durability, functionality, and style in every wooden detail, while saving you time and effort with professional care at your doorstep.</p>
                <hr />
            </div>
            <form onSubmit={CarpenterBooking} className='place-order'>
                <div className="place-order-left">
                    <p className='title'>Booking Information</p>
                    <div className="fields">
                        <select required>
                            <option value="">Select Your Service</option>
                            <option>Furniture Repair & Assembly</option>
                            <option>Door & Window Repair</option>
                            <option>Custom Woodwork</option>
                            <option>Polishing & Painting</option>
                            <option>Modular Kitchen Work</option>
                            <option>Wardrobe Repair & Installation</option>
                            <option>📞 Call us to book your exact service needs</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input required type="date" name="date" id="booking-date" placeholder="Date" />
                        <select required>
                            <option value="">Select Time Slot</option>
                            <option>Morning (8 AM - 10 AM)</option>
                            <option>Afternoon (12 PM - 2 PM)</option>
                            <option>Evening (4 PM - 6 PM)</option>
                            <option>Night (7 PM - 9 PM)</option>
                        </select>
                    </div>
                    <div className="multi-fields">
                        <input type="text" placeholder="Location Type (Home/Office)" />
                    </div>
                    <textarea className='special-field' placeholder="Special Instructions (optional)" rows={4}></textarea>
                    <button type='submit'>Add to Service</button>
                </div>
            </form>
        </div>
    )
}

export default CarpenterBooking
