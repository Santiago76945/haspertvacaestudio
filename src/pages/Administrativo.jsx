// src/pages/Administrativo.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/derecho-administrativo.png';

const Administrativo = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Derecho Administrativo',
            subtitle: 'Asesoramiento en licitaciones y responsabilidad estatal',
            description: `Si necesitás un <strong>abogado especializado en Derecho Administrativo en Córdoba</strong> para afrontar cuestiones relacionadas con la administración pública, licitaciones, responsabilidad estatal o impugnaciones, nuestro equipo ofrece asesoramiento integral para garantizar la defensa de tus derechos e intereses.`,
            subServices: [
                { title: 'Procedimientos Administrativos', text: 'Asesoramiento en trámites y expedientes ante organismos estatales.' },
                { title: 'Contrataciones Públicas', text: 'Revisión y defensa en licitaciones, concursos y convenios con el Estado.' },
                { title: 'Responsabilidad del Estado', text: 'Reclamos por daños originados por la actividad administrativa.' },
                { title: 'Régimen Disciplinario y Sancionatorio', text: 'Defensa de funcionarios y particulares en procedimientos sancionatorios.' },
                { title: 'Recursos Administrativos', text: 'Impugnaciones y revisiones ante actos ilegítimos de la administración.' },
                { title: 'Litigios Contencioso-Administrativos', text: 'Representación en disputas judiciales contra el Estado o entes públicos.' },
            ],
        }
        : {
            title: 'Administrative Law',
            subtitle: 'Expert advice in public administration & government contracts',
            description: `If you need an <strong>administrative law attorney in Córdoba</strong> to handle public administration matters, tenders, state liability or appeals, our team offers comprehensive counsel to protect your rights and interests.`,
            subServices: [
                { title: 'Administrative Procedures', text: 'Advice on procedures and cases before government agencies.' },
                { title: 'Public Procurement', text: 'Review and defense in tenders, bids, and government contracts.' },
                { title: 'State Liability', text: 'Claims for damages caused by administrative actions.' },
                { title: 'Disciplinary & Sanction Regime', text: 'Defense of officials and individuals in disciplinary proceedings.' },
                { title: 'Administrative Appeals', text: 'Challenges and reviews of unlawful administrative acts.' },
                { title: 'Contested Administrative Litigation', text: 'Representation in judicial disputes against the state or public entities.' },
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
                <img
                    src={heroImage}
                    alt={content.title}
                    className="hero-image"
                />
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

export default Administrativo;
