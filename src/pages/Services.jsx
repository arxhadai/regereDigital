import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Smartphone, Bot } from 'lucide-react';
import '../styles/layout.css';

export const Services = () => {
    const services = [
        {
            id: 'web',
            icon: <Globe size={48} color="var(--accent-cyan)" />,
            title: 'Web Design & Development',
            subtitle: 'Modern Web Experiences Built for Performance',
            description: 'We design and develop high-performance websites using React that feel fast, elegant, and future-ready. This is not just design — it’s digital positioning.',
            features: ['Build trust instantly', 'Convert visitors into clients', 'Scale with your business']
        },
        {
            id: 'mobile',
            icon: <Smartphone size={48} color="var(--accent-purple)" />,
            title: 'Mobile App Development',
            subtitle: 'Smart Mobile Apps That Serve Real Business Goals',
            description: 'Using Flutter, we build modern mobile applications that work seamlessly across iOS and Android. Whether it’s a customer-facing app or an internal business tool, we focus on simplicity and speed.',
            features: ['Simplicity', 'Speed', 'Practical automation']
        },
        {
            id: 'ai',
            icon: <Bot size={48} color="#fff" />,
            title: 'AI Office Automation',
            subtitle: 'AI That Works Inside Your Business',
            description: 'We design intelligent AI assistants and automation systems that reduce workload, improve efficiency, and streamline operations. From internal AI helpers to workflow automation, we help businesses reclaim time.',
            features: ['Reduce workload', 'Improve efficiency', 'Streamline operations']
        }
    ];

    return (
        <div className="services-page">
            <section className="section" style={{ paddingTop: '120px', paddingBottom: '60px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: '80px' }}
                    >
                        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '16px' }}>What We Guide You Through</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>Strategic technology services designed for growth.</p>
                    </motion.div>

                    <div className="services-list" style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-row"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                style={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                    gap: '40px',
                                    alignItems: 'center',
                                    background: 'rgba(255,255,255,0.02)',
                                    padding: '40px',
                                    borderRadius: '24px',
                                    border: '1px solid rgba(255,255,255,0.05)'
                                }}
                            >
                                <div className="service-icon-wrapper" style={{ textAlign: 'center' }}>
                                    <div style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        margin: '0 auto',
                                        boxShadow: `0 0 30px ${index === 0 ? 'rgba(0,243,255,0.1)' : index === 1 ? 'rgba(189,0,255,0.1)' : 'rgba(255,255,255,0.1)'}`
                                    }}>
                                        {service.icon}
                                    </div>
                                </div>

                                <div className="service-content">
                                    <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>{service.title}</h2>
                                    <h3 style={{ fontSize: '1.1rem', color: 'var(--accent-cyan)', marginBottom: '16px', fontWeight: '500' }}>{service.subtitle}</h3>
                                    <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', lineHeight: '1.6' }}>{service.description}</p>

                                    <ul style={{ listStyle: 'none', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        {service.features.map((feature, i) => (
                                            <li key={i} style={{
                                                background: 'rgba(255,255,255,0.05)',
                                                padding: '8px 16px',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                color: 'var(--text-primary)'
                                            }}>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};
