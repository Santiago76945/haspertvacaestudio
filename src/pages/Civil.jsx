// src/pages/Civil.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/derecho-civil.png';

const Civil = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Derecho Civil',
            subtitle: 'Protegemos tus derechos civiles',
            description: `¿Buscás un <strong>abogado civil en Córdoba</strong> que defienda tus intereses en temas de contratos, responsabilidad civil o sucesiones? En VGH Estudio Jurídico contamos con profesionales especializados en cada aspecto del Derecho Civil para brindarte soluciones efectivas y personalizadas.`,
            subServices: [
                { title: 'Contratos y Obligaciones', text: 'Redacción, revisión y defensa en conflictos contractuales.' },
                { title: 'Responsabilidad Civil', text: 'Reclamaciones por daños y perjuicios, defensa y asesoramiento legal.' },
                { title: 'Sucesiones', text: 'Testamentos, declaratoria de herederos y distribución de bienes.' },
                { title: 'Derecho del Consumidor', text: 'Protección de derechos y reclamos por incumplimientos comerciales.' },
                { title: 'Propiedad y Reivindicaciones', text: 'Acciones para defensa y recuperación de la propiedad.' },
                { title: 'Locaciones Urbanas y Desalojos', text: 'Asesoramiento en contratos de alquiler, cobro de rentas y desalojos.' },
            ]
        }
        : {
            title: 'Civil Law',
            subtitle: 'We protect your civil rights',
            description: `Looking for a <strong>civil lawyer in Córdoba</strong> to defend your interests in contracts, liability, or estates? At VGH Estudio Jurídico, our experts provide effective and personalized civil law solutions.`,
            subServices: [
                { title: 'Contracts & Obligations', text: 'Drafting, review, and defense in contractual disputes.' },
                { title: 'Civil Liability', text: 'Claims for damages, legal defense, and advice.' },
                { title: 'Estates', text: 'Wills, heir declarations, and asset distribution.' },
                { title: 'Consumer Law', text: 'Protection of rights and claims for commercial breaches.' },
                { title: 'Property & Reclamation', text: 'Actions for defense and recovery of property.' },
                { title: 'Urban Leases & Evictions', text: 'Advice on rental contracts, rent collection, and evictions.' },
            ]
        };

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section reutilizando estilos de Reputación Digital */}
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
                    <a href="https://wa.me/543517432323" className="btn">
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

export default Civil;

