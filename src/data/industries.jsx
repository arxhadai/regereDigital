import React from 'react';
import { Home, Stethoscope, ShoppingBag } from 'lucide-react';

export const industries = {
    'real-estate': {
        title: 'AI Solutions for Modern Real Estate Professionals',
        subtitle: 'Automate inquiries, qualify leads, and close more deals.',
        icon: <Home size={64} color="var(--accent-cyan)" />,
        description: 'Real estate is fast-moving — your systems should be too. We help real estate agents and agencies spend less time chasing leads and more time closing them.',
        features: [
            {
                title: 'AI Property Inquiry Chatbots',
                text: 'Instantly answer questions about listings 24/7.'
            },
            {
                title: 'Lead Qualification Automation',
                text: 'Filter serious buyers from window shoppers automatically.'
            },
            {
                title: 'Smart CRM Integrations',
                text: 'Seamlessly sync leads to your existing workflow.'
            }
        ],
        cta: 'Book a Real Estate Consultation'
    },
    'healthcare': {
        title: 'Smarter Patient Experiences Through AI',
        subtitle: 'Simplify appointments and improve patient engagement.',
        icon: <Stethoscope size={64} color="var(--accent-purple)" />,
        description: 'Your patients expect simplicity. We help clinics and dental practices deliver it by automating administrative tasks so you can focus on care.',
        features: [
            {
                title: 'Automated Booking',
                text: 'Let patients book available slots without phone tag.'
            },
            {
                title: 'Patient Reminders',
                text: 'Reduce no-shows with smart SMS and email follow-ups.'
            },
            {
                title: 'Front-Desk Support',
                text: 'AI assistants to handle common inquiries.'
            }
        ],
        cta: 'Book a Healthcare Consultation'
    },
    'ecommerce': {
        title: 'AI-Driven Growth for Online Businesses',
        subtitle: 'Increase conversions and automate customer support.',
        icon: <ShoppingBag size={64} color="#fff" />,
        description: 'We help e-commerce brands scale by implementing intelligent automation that guides customers from interest to checkout.',
        features: [
            {
                title: 'AI Sales Assistants',
                text: 'Guide customers to the right products instantly.'
            },
            {
                title: 'Support Automation',
                text: 'Resolve order queries without human intervention.'
            },
            {
                title: 'Conversion Optimization',
                text: 'Smart recommendations that boost average order value.'
            }
        ],
        cta: 'Book an E-commerce Consultation'
    }
};
