import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Discover from './components/Discover'
import BookingForm from './components/BookingForm'
import OrderComplete from './components/OrderComplete'
import { BookingProvider } from './context/BookingContext'
import './App.css'

function App() {
    return (
        <BookingProvider>
            <Router>
                <div className="container">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Discover />} />
                        <Route path="/book" element={<BookingForm />} />
                        <Route path="/order-complete" element={<OrderComplete />} />
                    </Routes>
                </div>
            </Router>
        </BookingProvider>
    );
}

export default App;
