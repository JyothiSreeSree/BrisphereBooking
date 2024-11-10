import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {BookingContext}  from '../../context/BookingContext'
import './index.css'

const BookingForm = () => {
    const { bookingDetails, updateBookingDetails } = useContext(BookingContext);
    const [formValues, setFormValues] = useState(bookingDetails);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues(prevValues => ({ ...prevValues, [name]: value }));
    };

    const handleBooking = () => {
        updateBookingDetails(formValues);
        navigate('/order-complete');
    };

    return (
        <form className="booking-form">
            <h2>Book Your Stay</h2>
            <div className='details'>
            <label>
                Name
                <input type="text" name="name" value={formValues.name} onChange={handleInputChange} />
            </label>
            <label>
                Email
                <input type="email" name="email" value={formValues.email} onChange={handleInputChange} />
            </label>
            <div className="increment-buttons">
                <label><input type="text" name="adults" value={formValues.adults} onChange={handleInputChange} /> Adults</label>
                
                
            </div>
            <div className="increment-buttons">
                <label><input type="text" name="children" value={formValues.children} onChange={handleInputChange} />Children</label>
                
            </div>
            
            <label>
                Phone
                <input type="tel" name="phone" value={formValues.phone} onChange={handleInputChange} />
            </label>
            </div>
            <div className='checkin'>
            <label>
                Check-In
                <input type="date" name="checkIn" value={formValues.checkIn} onChange={handleInputChange} />
            </label>
            <label>
                Check-Out
                <input type="date" name="checkOut" value={formValues.checkOut} onChange={handleInputChange} />
            </label>
            
            <button type="button" onClick={handleBooking}>Pay Total Amount</button>
            </div>
        </form>
    );
};

export default BookingForm
