// src/pages/Societario.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/derecho-societario.png';

const Societario = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Derecho Societario',
            subtitle: 'Asesoramos tu empresa',
            description: `¿Buscás un asesoramiento especializado en <strong>Derecho Societario</strong> para la constitución y gestión de tu empresa? En VGH Estudio Jurídico te acompañamos en cada etapa societaria, garantizando seguridad legal y cumplimiento normativo.`,
            subServices: [
                { title: 'Constitución de Sociedades', text: 'Redacción de estatutos, actas fundacionales y registro de sociedades.' },
                { title: 'Fusiones y Adquisiciones', text: 'Due diligence, integraciones y reestructuraciones societarias.' },
                { title: 'Gobierno Corporativo', text: 'Implementación de buenas prácticas, compliance y responsabilidades del directorio.' },
                { title: 'Conflictos entre Socios', text: 'Mediación, renegociación de pactos y arbitraje.' },
                { title: 'Transformaciones y Escisiones', text: 'Procesos de cambio de forma societaria y separación de activos.' },
                { title: 'Reestructuración de Capital', text: 'Aumentos, reducciones y recapitalizaciones de capital.' },
            ]
        }
        : {
            title: 'Corporate Law',
            subtitle: 'Your partner in corporate matters',
            description: `Looking for specialized <strong>Corporate Law</strong> advice on forming and managing your company? At VGH Estudio Jurídico we support you at every corporate stage, ensuring legal security and regulatory compliance.`,
            subServices: [
                { title: 'Company Formation', text: 'Drafting bylaws, incorporation minutes and company registration.' },
                { title: 'Mergers & Acquisitions', text: 'Due diligence, integration and corporate restructuring.' },
                { title: 'Corporate Governance', text: 'Implementation of best practices, compliance and board responsibilities.' },
                { title: 'Shareholder Disputes', text: 'Mediation, renegotiation of agreements and arbitration.' },
                { title: 'Transformations & Spin-offs', text: 'Corporate form changes and asset separation processes.' },
                { title: 'Capital Restructuring', text: 'Capital increases, reductions and recapitalizations.' },
            ]
        };

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section */}
            <section className="reputacion-hero">
                <h1 className="title">{content.title}</h1>
                <h2 className="subtitle">{content.subtitle}</h2>
                <img src={heroImage} alt={content.title} className="hero-image" />
                <p
                    className="description"
                    dangerouslySetInnerHTML={{ __html: content.description }}
                />
                <div className="hero-buttons">
                    <a href="tel:+543517432323" className="btn">
                        {isSpanish ? 'Llamanos sin compromiso' : 'Call us'}
                    </a>
                    <a
                        href="https://wa.me/543517432323"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {isSpanish ? 'Consultanos por WhatsApp' : 'WhatsApp us'}
                    </a>
                </div>
            </section>

            {/* Subservices Section */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? 'Áreas de Asesoramiento' : 'Areas of Advice'}
                </h2>
                <div className="cards-container">
                    {content.subServices.map((svc, idx) => (
                        <div className="card" key={idx}>
                            <div className="card-inner">
                                <div className="card-content">
                                    <h3 className="card-title">{svc.title}</h3>
                                    <p className="card-desc">{svc.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Societario;
