import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Brain, ShieldCheck, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';
import '../styles/layout.css';

export const Home = () => {
    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-bg" />
                <div className="container">
                    <motion.div
                        className="hero-content"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="gradient-text">
                            Your Growth, <br /> Guided.
                        </h1>
                        <p>
                            We design intelligent AI assistants, modern web experiences, and automation systems that guide ambitious businesses through the future of technology.
                        </p>
                        <div style={{ display: 'flex', gap: '16px' }}>
                            <Link to="/contact">
                                <Button>Book a Consultation</Button>
                            </Link>
                            <Link to="/services">
                                <Button variant="secondary">Explore Services</Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Value Strip */}
            <section className="value-strip">
                <div className="container">
                    <div className="value-grid">
                        <motion.div
                            className="value-item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <Brain size={32} color="var(--accent-cyan)" style={{ marginBottom: '16px' }} />
                            <h3>Strategy Before Technology</h3>
                            <p>We solve business problems, not just code problems.</p>
                        </motion.div>
                        <motion.div
                            className="value-item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Zap size={32} color="var(--accent-purple)" style={{ marginBottom: '16px' }} />
                            <h3>AI That Works</h3>
                            <p>Practical automation that saves time and scales operations.</p>
                        </motion.div>
                        <motion.div
                            className="value-item"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                        >
                            <ShieldCheck size={32} color="#fff" style={{ marginBottom: '16px' }} />
                            <h3>Modern Systems</h3>
                            <p>Built to last, easy to maintain, and ready to scale.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="section">
                <div className="container">
                    <motion.div
                        className="story-content"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="section-tag">Who We Are</span>
                        <h2 className="gradient-text">Guidance Is in Our Name.<br />Wisdom Is in Our Work.</h2>
                        <p style={{ margin: '0 auto 30px', color: 'var(--text-secondary)', maxWidth: '700px' }}>
                            Regere Digital was built on a simple but powerful idea: technology should guide growth — not confuse it.
                            <br /><br />
                            The name <strong>Arshad</strong> means "Rightly Guided".
                            <br />
                            The word <strong>Regere</strong>, from Latin, means "To Guide".
                        </p>
                        <Link to="/about" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-cyan)', fontWeight: '600' }}>
                            Read Our Full Story <ArrowRight size={18} />
                        </Link>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};
