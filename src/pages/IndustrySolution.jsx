import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { industries } from '../data/industries';
import '../styles/layout.css';

export const IndustrySolution = () => {
    const { industry } = useParams();
    const data = industries[industry];

    if (!data) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="industry-page">
            <section className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <div style={{ marginBottom: '32px', display: 'inline-block', padding: '24px', background: 'rgba(255,255,255,0.03)', borderRadius: '50%' }}>
                            {data.icon}
                        </div>

                        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '16px', lineHeight: '1.2' }}>
                            {data.title}
                        </h1>
                        <p style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '32px' }}>
                            {data.subtitle}
                        </p>
                        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '48px', lineHeight: '1.8' }}>
                            {data.description}
                        </p>

                        <div className="features-grid" style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                            gap: '30px',
                            textAlign: 'left',
                            marginBottom: '60px'
                        }}>
                            {data.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 + 0.3 }}
                                    style={{
                                        background: 'rgba(255,255,255,0.02)',
                                        padding: '30px',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.05)'
                                    }}
                                >
                                    <h3 style={{ marginBottom: '12px', color: 'var(--text-primary)' }}>{feature.title}</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{feature.text}</p>
                                </motion.div>
                            ))}
                        </div>

                        <Link to="/contact">
                            <Button>{data.cta}</Button>
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
