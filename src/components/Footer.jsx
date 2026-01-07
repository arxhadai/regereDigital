import React from 'react';
import { Link } from 'react-router-dom';
import { BrainCircuit } from 'lucide-react';
import '../styles/layout.css';

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <div className="nav-logo gradient-text" style={{ marginBottom: '1rem', display: 'flex', gap: '10px' }}>
                            <BrainCircuit size={28} color="var(--accent-cyan)" />
                            REGERE DIGITAL
                        </div>
                        <p style={{ color: 'var(--text-secondary)', maxWidth: '300px' }}>
                            Guiding businesses through the complex world of AI & Technology with wisdom and clarity.
                        </p>
                    </div>

                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><Link to="/about">Who We Are</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Industries</h4>
                        <ul className="footer-links">
                            <li><Link to="/solutions/real-estate">Real Estate</Link></li>
                            <li><Link to="/solutions/healthcare">Healthcare</Link></li>
                            <li><Link to="/solutions/ecommerce">E-commerce</Link></li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Contact</h4>
                        <ul className="footer-links">
                            <li><a href="mailto:hello@regeredigital.com">hello@regeredigital.com</a></li>
                            <li><span style={{ color: 'var(--text-secondary)' }}>San Francisco, CA</span></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Regere Digital. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};
