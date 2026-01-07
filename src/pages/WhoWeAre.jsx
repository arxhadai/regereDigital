import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Lightbulb, Users } from 'lucide-react';
import '../styles/layout.css';

export const WhoWeAre = () => {
    return (
        <div className="who-we-are-page">
            <section className="section" style={{ paddingTop: '120px' }}>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}
                    >
                        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '2rem', lineHeight: '1.2' }}>
                            Guidance Is in Our Name.<br />Wisdom Is in Our Work.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            Regere Digital was built on a simple but powerful idea: technology should guide growth — not confuse it.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="value-grid" style={{ alignItems: 'start' }}>
                        <motion.div
                            className="value-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '16px' }}
                        >
                            <Compass size={40} color="var(--accent-cyan)" style={{ marginBottom: '20px' }} />
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Arshad</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Meaning <strong>"Rightly Guided"</strong>. We believe that every decision in technology should be rooted in wisdom, not just trends. We help you navigate the noise to find the right path for your business.
                            </p>
                        </motion.div>

                        <motion.div
                            className="value-item"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            style={{ background: 'rgba(255,255,255,0.02)', padding: '40px', borderRadius: '16px' }}
                        >
                            <Users size={40} color="var(--accent-purple)" style={{ marginBottom: '20px' }} />
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>Regere</h2>
                            <p style={{ color: 'var(--text-secondary)' }}>
                                Latin for <strong>"To Guide"</strong>. Our role goes beyond building software. We act as strategic partners, guiding your digital transformation from concept to execution.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ background: 'var(--bg-secondary)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <Lightbulb size={48} color="white" style={{ marginBottom: '24px' }} />
                    <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '24px' }}>
                        Technology With Direction
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '30px' }}>
                        Anyone can build software. Very few can guide its purpose. We approach every project as consultants first and builders second. Every decision is rooted in strategy, usability, and long-term growth.
                    </p>
                </div>
            </section>
        </div>
    );
};
