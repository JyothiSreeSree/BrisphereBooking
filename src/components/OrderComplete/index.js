import React, { useContext } from 'react'
import { BookingContext } from '../../context/BookingContext'
import './index.css'

const OrderComplete = () => {
    const { bookingDetails } = useContext(BookingContext);

    return (
        <div className="order-complete">
            <h2>Order Complete</h2>
            <p>Thank you for booking with BriSphere!</p>
            <div>
                <p><strong>Name:</strong> {bookingDetails.name}</p>
                <p><strong>Email:</strong> {bookingDetails.email}</p>
                <p><strong>Phone:</strong> {bookingDetails.phone}</p>
                <p><strong>Check-In:</strong> {bookingDetails.checkIn}</p>
                <p><strong>Check-Out:</strong> {bookingDetails.checkOut}</p>
                <p><strong>Adults:</strong> {bookingDetails.adults}</p>
                <p><strong>Children:</strong> {bookingDetails.children}</p>
            </div>
        </div>
    );
};

export default OrderComplete
