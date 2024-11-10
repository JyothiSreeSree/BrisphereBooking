// src/components/Header.js

import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
    <header className="header">
        <div className="header-logo">BriSphere</div>
        <nav className="header-nav">
            <Link to="/">Discover</Link>
            <Link to="/book">Services</Link>
            <Link to="/book">About Us</Link>
        </nav>
    </header>
);

export default Header;
