import React from 'react'
import { useNavigate } from 'react-router-dom';
import './index.css'

const Discover = () => {
        const navigate = useNavigate();
    
        const handleBooking = () => {
            navigate('/book'); 
        };
    return(
    <section className="discover">
        <h2>Discover</h2>
        <div className="review">
            <h3>Arjun Raghav</h3>
            <p>I am writing this after reflecting on my one-month stay with Bricabin in Ladakh...</p>
            <span>Read more</span>
        </div>
        <div className="review">
            <label>
                Check-In
                <input type="date" name="checkIn" value="0" />
            </label>
            <label>
                Check-Out
                <input type="date" name="checkOut" value="0"/>
            </label>
            
            <button type="button" onClick={handleBooking}>Book</button>
            </div>
        <div className="services">
            <h3>Our Services</h3>
            <div className='listContiainer'>
                <div className='list'>High-Speed Internet
                    <hr/>
                    <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
                </div>
                <div className='list'>Transportation
                    <hr/>
                    <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
                </div>
                <div className='list'>Job <hr/>
                <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p></div>
                <div className='list'>Rental Service<hr/>
                <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p></div>
                <div className='list'>Food Delivery <hr/>
                <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p>
                </div>
                <div className='list'>Healthy Meals <hr/>
                <p>A healthy breakfast and pleasant
dinner will be serviced at your space
every single day for your entire
duration of stay with option of paid
order within BriSphere.</p></div>
                <div className='list'>Online Shop<hr/>
                <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p></div>
                <div className='list'>Tourism  <hr/>
                <p>Optical fiber connections provided in
not only in your cabins but rather to
all of the BriSphere scenic working
spaces and dinning areas.</p></div>
                <div className='list'>Homely Stay <hr/>
                <p>Designed for working professionals
with spacious interiors, comfortable
beds and sleekly attached kitchen
are some of the comforts providedin
your space.</p></div>
            </div>
        </div>
    </section>
)}

export default Discover
