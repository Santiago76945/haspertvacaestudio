// src/pages/Tributario.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/derecho-tributario.png';

const Tributario = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Derecho Tributario',
            subtitle: 'Expertos en planificación fiscal y defensa ante AFIP',
            description: `¿Necesitás asesoramiento en planificación fiscal, defensa ante la AFIP o gestión de obligaciones tributarias? En VGH Estudio Jurídico ofrecemos soluciones a medida para empresas y particulares, desde auditorías impositivas hasta reclamos y recursos administrativos.`,
            subServices: [
                { title: 'Planeamiento Fiscal', text: 'Estrategias de optimización fiscal y compliance tributario.' },
                { title: 'Defensa ante AFIP', text: 'Representación y recursos frente a determinaciones y sanciones.' },
                { title: 'Impuestos Nacionales', text: 'Asesoramiento en IVA, Ganancias y otros impuestos federales.' },
                { title: 'Impuestos Provinciales', text: 'Gestión de ingresos brutos y tributos provinciales.' },
                { title: 'Precios de Transferencia', text: 'Documentación y cumplimiento de regulaciones internacionales.' },
                { title: 'Recursos y Apelaciones', text: 'Presentación de reclamos administrativos y judiciales.' },
            ],
        }
        : {
            title: 'Tax Law',
            subtitle: 'Your partner in tax planning and defense',
            description: `Looking for advice on tax planning, AFIP defense, or tax obligation management? At VGH Estudio Jurídico we offer tailored solutions for businesses and individuals, from tax audits to administrative claims and appeals.`,
            subServices: [
                { title: 'Tax Planning', text: 'Strategies for tax optimization and compliance.' },
                { title: 'AFIP Defense', text: 'Representation and appeals against assessments and penalties.' },
                { title: 'National Taxes', text: 'Advice on VAT, Income Tax, and other federal taxes.' },
                { title: 'Provincial Taxes', text: 'Management of gross income and provincial levies.' },
                { title: 'Transfer Pricing', text: 'Documentation and compliance with international regulations.' },
                { title: 'Claims & Appeals', text: 'Filing administrative and judicial claims.' },
            ],
        };

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section: use same class as Reputación Digital for proper sizing */}
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

export default Tributario;

