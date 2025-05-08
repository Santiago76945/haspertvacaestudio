// src/pages/Comercial.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/derecho-comercial.png';

const Comercial = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Derecho Comercial',
            subtitle: 'Expertos en tu actividad empresarial',
            description: `¿Necesitás asesoramiento en <strong>contratos mercantiles</strong>, <strong>títulos de crédito</strong> o <strong>litigios comerciales</strong>? En VGH Estudio Jurídico ofrecemos un servicio integral para empresas y emprendedores, desde la negociación de acuerdos hasta la defensa judicial de tus intereses.`,
            subServices: [
                {
                    title: 'Contratos Mercantiles',
                    text: 'Redacción, revisión y negociación de contratos de compraventa, distribución y franquicias.',
                },
                {
                    title: 'Títulos de Crédito',
                    text: 'Endosos, protestos y gestión de cobranzas de cheques, pagarés y letras de cambio.',
                },
                {
                    title: 'Litigios Comerciales',
                    text: 'Representación en juicios por incumplimientos contractuales y disputas societarias.',
                },
                {
                    title: 'Fusiones y Adquisiciones',
                    text: 'Asesoramiento en due diligence, estructuración y documentos de integración empresarial.',
                },
                {
                    title: 'Compliance & Riesgo',
                    text: 'Implementación de políticas internas y prevención de delitos corporativos.',
                },
                {
                    title: 'Asesoría Societaria',
                    text: 'Constitución de sociedades, capitalización y modificaciones estatutarias.',
                },
            ],
        }
        : {
            title: 'Commercial Law',
            subtitle: 'Your partner in business matters',
            description: `Looking for advice on <strong>commercial contracts</strong>, <strong>negotiable instruments</strong> or <strong>business litigation</strong>? At VGH Estudio Jurídico we provide end-to-end support for companies and entrepreneurs, from drafting agreements to defending your interests in court.`,
            subServices: [
                {
                    title: 'Commercial Contracts',
                    text: 'Drafting, review and negotiation of sales, distribution and franchise agreements.',
                },
                {
                    title: 'Negotiable Instruments',
                    text: 'Endorsements, protests and collections for checks, promissory notes and bills of exchange.',
                },
                {
                    title: 'Business Litigation',
                    text: 'Representation in lawsuits for contractual breaches and corporate disputes.',
                },
                {
                    title: 'M&A Transactions',
                    text: 'Due diligence, deal structuring and integration documentation.',
                },
                {
                    title: 'Compliance & Risk',
                    text: 'Internal policy development and corporate crime prevention.',
                },
                {
                    title: 'Corporate Advisory',
                    text: 'Company formation, capitalization and bylaws amendments.',
                },
            ],
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

export default Comercial;


