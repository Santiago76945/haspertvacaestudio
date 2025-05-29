// src/pages/CiudadaniaArgentina.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import '../styles/services.css';
import heroImage from '../assets/ciudadania-argentina.png';

const CiudadaniaArgentina = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Abogados en Córdoba para obtener ciudadanía argentina para extranjeros',
            subtitle: 'Asesoramiento integral en trámites de ciudadanía',
            description:
                '¿Querés convertirte en ciudadano argentino? Te acompañamos en cada paso: evaluación de elegibilidad, preparación de documentación, inscripción ante RENAPER y Registro Civil. Nuestro objetivo es que el trámite sea rápido, transparente y exitoso.',
            subServices: [
                {
                    title: 'Evaluación de Elegibilidad',
                    text: 'Determinamos el camino adecuado según tus años de residencia, vínculos familiares o inversiones en Argentina.'
                },
                {
                    title: 'Preparación de Documentos',
                    text: 'Gestionamos traducciones, legalizaciones y verificaciones de actas de nacimiento, antecedentes penales y certificados.'
                },
                {
                    title: 'Gestión ante RENAPER',
                    text: 'Presentamos y hacemos seguimiento de tu solicitud de cédula de ciudadanía y pasaporte argentino.'
                },
                {
                    title: 'Inscripción en Registro Civil',
                    text: 'Asistencia legal para la inscripción definitiva y obtención de tu DNI.'
                },
                {
                    title: 'Apelaciones y Recursos',
                    text: 'Defendemos tu derecho ante posibles demoras o denegaciones, presentando los recursos correspondientes.'
                },
                {
                    title: 'Asesoramiento Post-Ciudadanía',
                    text: 'Orientación sobre derechos electorales, doble nacionalidad y obligaciones de los ciudadanos.'
                }
            ],
            seoInvestment:
                '¿Buscás un abogado en Córdoba especializado en “ciudadanía por inversión”? También asistimos a inversores extranjeros que desean optar por la ciudadanía argentina bajo el Decreto 366/2025. Ofrecemos asesoramiento en inversión extranjera, recursos legales para cumplir requisitos y gestión ante agencias fiscales y migratorias.'
        }
        : {
            title: 'Lawyers in Córdoba to Obtain Argentine Citizenship for Foreigners',
            subtitle: 'Full-service citizenship application support',
            description:
                'Ready to become an Argentine citizen? We guide you every step of the way: eligibility assessment, document preparation, registration with RENAPER and the Civil Registry. Our goal is a smooth, transparent, and successful process.',
            subServices: [
                {
                    title: 'Eligibility Assessment',
                    text: 'We identify the best path based on your residency time, family ties, or investments in Argentina.'
                },
                {
                    title: 'Document Preparation',
                    text: 'We handle translations, legalizations, and verifications of birth certificates, police clearances, and more.'
                },
                {
                    title: 'RENAPER Applications',
                    text: 'We file and track your citizenship ID and Argentine passport application.'
                },
                {
                    title: 'Civil Registry Enrollment',
                    text: 'Legal assistance for final registration and issuance of your DNI.'
                },
                {
                    title: 'Appeals & Legal Remedies',
                    text: 'We represent you in appeals to address any delays or denials.'
                },
                {
                    title: 'Post-Citizenship Advice',
                    text: 'Guidance on voting rights, dual nationality, and citizen responsibilities.'
                }
            ],
            seoInvestment:
                'Looking for an expert in “citizenship by investment”? We support foreign investors under Decree 366/2025 with tailored legal counsel, investment structuring, and coordination with fiscal and migration authorities.'
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
                    style={{ width: '100%', height: 'auto' }}
                />
                <p className="description">{content.description}</p>
                <div className="hero-buttons">
                    <a href="tel:+543517432323" className="btn">
                        {isSpanish ? 'Llámanos sin compromiso' : 'Call Us'}
                    </a>
                    <a
                        href="https://wa.me/543517432323"
                        className="btn"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {isSpanish ? 'Consultanos por WhatsApp' : 'WhatsApp Us'}
                    </a>
                </div>
            </section>

            {/* General Citizenship Advice Section */}
            <section>
                <h2 className="section-title">
                    {isSpanish
                        ? 'Asesoramiento para obtener tu ciudadanía'
                        : 'General Citizenship Advisory'}
                </h2>
                <p className="description">
                    {isSpanish
                        ? 'Ofrecemos orientación en todos los caminos posibles para adquirir la ciudadanía argentina: por residencia, por vínculo familiar, por servicios destacados y más. Adaptamos nuestro asesoramiento a tu situación particular.'
                        : 'We provide guidance on all routes to Argentine citizenship: residency, family ties, notable services, and more. Our advice is customized to your unique circumstances.'}
                </p>
            </section>

            {/* Subservices Section */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? 'Nuestros Servicios' : 'Our Services'}
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

            {/* Citizenship by Investment Section */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? 'Ciudadanía por Inversión' : 'Citizenship by Investment'}
                </h2>
                <p className="description">{content.seoInvestment}</p>
            </section>

            <Footer />
        </div>
    );
};

export default CiudadaniaArgentina;
