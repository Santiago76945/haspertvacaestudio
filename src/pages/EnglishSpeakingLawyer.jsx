// src/pages/EnglishSpeakingLawyer.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/hero-english-speaking-lawyer.png';

const EnglishSpeakingLawyer = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const title = isSpanish
        ? 'Abogado de habla inglesa en Córdoba, Argentina'
        : 'English-Speaking Lawyer in Córdoba, Argentina';

    const subtitle = isSpanish
        ? 'Asesoramiento legal bilingüe para expatriados y empresas'
        : 'Bilingual Legal Counsel for Expats & Businesses';

    const intro = isSpanish
        ? 'En VGH Estudio Jurídico brindamos representación legal en inglés en Córdoba. Eliminá la barrera idiomática y accedé a asesoramiento experto en inmigración, derecho comercial, familiar, inmobiliario y más.'
        : 'At VGH Legal Studio we provide English-language legal representation in Córdoba. Remove language barriers and access expert counsel in immigration, business law, family, real estate, and more.';

    const services = isSpanish
        ? [
            'Derecho de Inmigración',
            'Derecho Comercial y Societario',
            'Derecho de Familia',
            'Transacciones Inmobiliarias',
            'Defensa Penal',
            'Contratos Internacionales',
            'Arbitraje y Mediación Internacional',
        ]
        : [
            'Immigration Law',
            'Business & Corporate Law',
            'Family Law',
            'Real Estate Transactions',
            'Criminal Defense',
            'International Contracts',
            'International Arbitration & Mediation',
        ];

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section */}
            <section className="reputacion-hero">
                <h1 className="title">{title}</h1>
                <h2 className="subtitle">{subtitle}</h2>
                <img
                    src={heroImage}
                    alt={title}
                    className="hero-image"
                    style={{ width: '100%', height: 'auto' }}
                />
                <p className="description">{intro}</p>
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

            {/* How We Work */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? '¿Cómo Trabajamos?' : 'How We Work'}
                </h2>
                <p>
                    {isSpanish
                        ? 'Combinamos conocimientos locales e internacionales para ofrecer soluciones legales precisas. Nuestros abogados bilingües guían cada paso del proceso, asegurando que comprendas tus derechos y opciones.'
                        : 'We blend local and international expertise to deliver precise legal solutions. Our bilingual attorneys guide every step, ensuring you understand your rights and options.'}
                </p>
            </section>

            {/* Services List */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? 'Nuestros Servicios' : 'Our Services'}
                </h2>
                <ul>
                    {services.map((svc, idx) => (
                        <li key={idx}>{svc}</li>
                    ))}
                </ul>
            </section>

            {/* Why Choose Us */}
            <section>
                <h2 className="section-title">
                    {isSpanish ? '¿Por Qué Elegirnos?' : 'Why Choose Us?'}
                </h2>
                <p>
                    {isSpanish
                        ? 'Con experiencia probada, atención personalizada y fluidez en inglés, somos tu mejor aliado legal en Córdoba. Garantizamos comunicación clara y resultados efectivos.'
                        : 'With proven experience, personalized attention, and English fluency, we are your top legal partner in Córdoba. We ensure clear communication and effective results.'}
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default EnglishSpeakingLawyer;
