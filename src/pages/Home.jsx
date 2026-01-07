import React from 'react';

export const Home = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'var(--bg-primary)'
        }}>
            <h1 className="gradient-text" style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                REGERE DIGITAL
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
                Your Growth, Guided.
            </p>
        </div>
    );
};
