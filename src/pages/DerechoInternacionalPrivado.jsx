// src/pages/DerechoInternacionalPrivado.jsx

import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import '../styles/services.css';
import heroImage from '../assets/derecho-internacional.png';

const DerechoInternacionalPrivado = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    const title = isSpanish
        ? 'Abogados en Córdoba en Derecho Internacional Privado'
        : 'Private International Law Attorneys in Córdoba';

    const introText = isSpanish
        ? 'En VGH Estudio Jurídico somos especialistas en Derecho Internacional Privado. Ofrecemos servicios integrales en contratos internacionales, reconocimiento de sentencias extranjeras, sucesiones, divorcios y custodia transfronteriza, restitución de menores, derecho societario internacional, arbitraje y más.'
        : 'At VGH Legal Studio we specialize in Private International Law. We provide comprehensive services in international contracts, recognition of foreign judgments, cross-border succession, international divorce & custody, child recovery, corporate law, arbitration and more.';

    const services = isSpanish
        ? [
            {
                title: 'Contratos Internacionales',
                desc: 'Asesoramiento en redacción, interpretación y ejecución de contratos entre partes de diferentes países.'
            },
            {
                title: 'Reconocimiento y Ejecución de Sentencias Extranjeras',
                desc: 'Procedimientos para hacer valer sentencias emitidas en el extranjero conforme a convenios y leyes nacionales.'
            },
            {
                title: 'Sucesiones Internacionales',
                desc: 'Gestión de herencias con bienes o herederos en múltiples jurisdicciones y resolución de conflictos de leyes.'
            },
            {
                title: 'Divorcios y Custodias Internacionales',
                desc: 'Tramitación de divorcios y disputas de custodia cuando las partes residen en distintos países.'
            },
            {
                title: 'Restitución Internacional de Menores',
                desc: 'Casos de retorno de menores trasladados ilícitamente a otro país bajo el Convenio de La Haya.'
            },
            {
                title: 'Lex Societatis y Derecho Corporativo Internacional',
                desc: 'Asesoramiento sobre la ley aplicable a sociedades con elementos transnacionales.'
            },
            {
                title: 'Arbitraje y Mediación Internacional',
                desc: 'Resolución de disputas comerciales internacionales mediante arbitraje y mediación.'
            },
            {
                title: 'Contratos de Consumo Internacionales',
                desc: 'Protección de derechos de consumidores en transacciones internacionales y comercio electrónico.'
            }
        ]
        : [
            {
                title: 'International Contracts',
                desc: 'Advice on drafting, interpreting, and enforcing cross-border agreements.'
            },
            {
                title: 'Recognition & Enforcement of Foreign Judgments',
                desc: 'Procedures to enforce international court decisions under treaties and local law.'
            },
            {
                title: 'International Successions',
                desc: 'Management of estates with assets or heirs in multiple jurisdictions.'
            },
            {
                title: 'International Divorce & Custody',
                desc: 'Handling divorce and custody disputes across borders, including applicable law and jurisdiction.'
            },
            {
                title: 'Child Recovery (Hague Convention)',
                desc: 'Cases seeking the return of children wrongfully removed abroad under the Hague Convention.'
            },
            {
                title: 'Lex Societatis & International Corporate Law',
                desc: 'Counsel on laws governing multinational company formation, operation and dissolution.'
            },
            {
                title: 'International Arbitration & Mediation',
                desc: 'Resolving cross-border commercial disputes through arbitration and mediation.'
            },
            {
                title: 'International Consumer Contracts',
                desc: 'Protection of consumer rights in global transactions, e-commerce and digital services.'
            }
        ];

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section */}
            <section className="reputacion-hero">
                <h1 className="title">{title}</h1>
                <img src={heroImage} alt={title} className="hero-image" />
                <p className="description">{introText}</p>
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

            {/* Services Section */}
            <section>
                <h2 className="section-title">{isSpanish ? 'Nuestros Servicios' : 'Our Services'}</h2>
                <div className="cards-container">
                    {services.map((svc, idx) => (
                        <div className="card" key={idx}>
                            <div className="card-inner">
                                <div className="card-content">
                                    <h3 className="card-title">{svc.title}</h3>
                                    <p className="card-desc">{svc.desc}</p>
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

export default DerechoInternacionalPrivado;