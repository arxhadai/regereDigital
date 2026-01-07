import React from 'react';
import '../styles/layout.css';

export const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
    return (
        <button
            className={`btn-${variant} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};
