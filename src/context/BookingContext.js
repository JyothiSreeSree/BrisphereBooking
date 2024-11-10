import React, { createContext, useState } from 'react'

export const BookingContext = createContext()

export const BookingProvider = ({ children }) => {
    const [bookingDetails, setBookingDetails] = useState({
        name: '',
        email: '',
        phone: '',
        adults: 1,
        children: 0,
        checkIn: '',
        checkOut: '',
    });

    const updateBookingDetails = (details) => {
        setBookingDetails(prevDetails => ({ ...prevDetails, ...details }));
    };

    return (
        <BookingContext.Provider value={{ bookingDetails, updateBookingDetails }}>
            {children}
        </BookingContext.Provider>
    );
};
