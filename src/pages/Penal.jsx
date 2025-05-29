// src/pages/Penal.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import '../styles/services.css';
import heroImage from '../assets/derecho-penal.png';

const Penal = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const content = isSpanish
        ? {
            title: 'Abogados penalistas en Córdoba',
            subtitle: 'Defensa penal y asesoramiento integral',
            description: `Si buscás <strong>abogados penalistas en Córdoba</strong> para representar tus derechos en cuestiones penales, nuestro estudio ofrece defensa desde la investigación preliminar hasta el juicio oral, recursos y medidas cautelares. Protegemos tus intereses en delitos contra las personas, la propiedad, narcotráfico, corrupción y más.`,
            subServices: [
                { title: 'Investigación Penal', text: 'Asesoramiento y defensa desde la etapa de instrucción y primeras diligencias.' },
                { title: 'Juicio Oral', text: 'Representación en audiencias y presentación de pruebas en juicio oral.' },
                { title: 'Recursos y Apelaciones', text: 'Presentación de recursos ordinarios y extraordinarios ante instancias superiores.' },
                { title: 'Medidas Cautelares', text: 'Defensa y solicitud de excarcelación, morigeración de prisión y libertad condicional.' },
                { title: 'Delitos Complejos', text: 'Causas de narcotráfico, corrupción, lavado de activos y delitos económicos.' },
                { title: 'Beneficios Penitenciarios', text: 'Gestión de salidas transitorias, libertades asistidas y régimen de cumplimiento.' },
            ],
        }
        : {
            title: 'Criminal Defense Attorneys in Córdoba',
            subtitle: 'Comprehensive criminal defense and counsel',
            description: `If you need <strong>criminal defense attorneys in Córdoba</strong> to protect your rights in criminal matters, our firm provides representation from preliminary investigations through trial, appeals, and precautionary measures. We defend you in cases of violent crimes, property offenses, narcotics, corruption, and more.`,
            subServices: [
                { title: 'Pre-Trial Investigation', text: 'Guidance and defense during the instruction phase and preliminary hearings.' },
                { title: 'Trial Representation', text: 'Advocacy in hearings and presentation of evidence at trial.' },
                { title: 'Appeals', text: 'Filing ordinary and extraordinary appeals to higher courts.' },
                { title: 'Pretrial Relief', text: 'Defense and petitions for release, bail reductions, and conditional release.' },
                { title: 'Complex Crimes', text: 'Cases involving narcotics, corruption, money laundering, and financial offenses.' },
                { title: 'Penitentiary Benefits', text: 'Management of furloughs, assisted liberties, and compliance regimes.' },
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
                    {isSpanish ? 'Áreas de Asesoramiento' : 'Areas of Practice'}
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

export default Penal;
