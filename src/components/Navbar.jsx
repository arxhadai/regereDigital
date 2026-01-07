import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { Button } from './Button';
import '../styles/layout.css';

export const Navbar = () => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const location = useLocation();

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <nav className="navbar">
            <div className="container nav-container">
                <Link to="/" className="nav-logo gradient-text">
                    <BrainCircuit size={32} color="var(--accent-cyan)" />
                    REGERE DIGITAL
                </Link>

                {/* Desktop Links */}
                <div className="nav-links">
                    <Link to="/" className={`nav-link ${isActive('/')}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${isActive('/about')}`}>Who We Are</Link>
                    <Link to="/services" className={`nav-link ${isActive('/services')}`}>Services</Link>
                    <Link to="/contact" className={`nav-link ${isActive('/contact')}`}>Contact</Link>
                    <Link to="/contact">
                        <Button>Book Consultation</Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button className="mobile-menu-btn" onClick={toggleMobile}>
                    {isMobileOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileOpen && (
                <div className="mobile-nav-overlay">
                    <Link to="/" className="nav-link" onClick={toggleMobile}>Home</Link>
                    <Link to="/about" className="nav-link" onClick={toggleMobile}>Who We Are</Link>
                    <Link to="/services" className="nav-link" onClick={toggleMobile}>Services</Link>
                    <Link to="/contact" className="nav-link" onClick={toggleMobile}>Contact</Link>
                    <Link to="/contact" onClick={toggleMobile} style={{ width: '100%' }}>
                        <Button className="w-full">Book Consultation</Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};
