// src/pages/Services.jsx

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';

const Services = () => {
  const lang = navigator.language;
  const isSpanish = lang.toLowerCase().startsWith('es');

  const branches = isSpanish
    ? [
        {
          path: '/civil',
          title: 'Derecho Civil',
          description:
            'Divorcios, sucesiones, desalojos y reclamos por responsabilidad civil.',
          image: '/images/derecho-civil.webp',
          alt: 'Derecho Civil',
        },
        {
          path: '/comercial',
          title: 'Derecho Comercial',
          description:
            'Contratos mercantiles, títulos de crédito y litigios comerciales.',
          image: '/images/derecho-comercial.png',
          alt: 'Derecho Comercial',
        },
        {
          path: '/societario',
          title: 'Derecho Societario',
          description:
            'Constitución de sociedades, fusiones y conflictos entre socios.',
          image: '/images/derecho-societario.jpeg',
          alt: 'Derecho Societario',
        },
        {
          path: '/tributario',
          title: 'Derecho Tributario',
          description:
            'Planeamiento fiscal, defensa ante AFIP y optimización impositiva.',
          image: '/images/derecho-tributario.jpg',
          alt: 'Derecho Tributario',
        },
        {
          path: '/administrativo',
          title: 'Derecho Administrativo',
          description:
            'Impugnaciones, licitaciones públicas y responsabilidad del Estado.',
          image: '/images/derecho-administrativo.png',
          alt: 'Derecho Administrativo',
        },
        {
          path: '/derecho-internacional-privado',
          title: 'Derecho Internacional Privado',
          description:
            'Conflictos de jurisdicción, reconocimiento de sentencias extranjeras, contratos y sucesiones transfronterizas.',
          image: '/images/derecho-internacional.png',
          alt: 'Derecho Internacional Privado',
        },
        {
          path: '/penal',
          title: 'Derecho Penal',
          description:
            'Defensa penal, recursos, medidas cautelares y representación ante tribunales penales.',
          image: '/images/derecho-penal.png',
          alt: 'Derecho Penal',
        },
      ]
    : [
        {
          path: '/civil',
          title: 'Civil Law',
          description:
            'Divorces, estates, evictions and civil liability claims.',
          image: '/images/derecho-civil.webp',
          alt: 'Civil Law',
        },
        {
          path: '/comercial',
          title: 'Commercial Law',
          description:
            'Commercial contracts, negotiable instruments and business litigation.',
          image: '/images/derecho-comercial.png',
          alt: 'Commercial Law',
        },
        {
          path: '/societario',
          title: 'Corporate Law',
          description:
            'Company formation, mergers and shareholder disputes.',
          image: '/images/derecho-societario.jpeg',
          alt: 'Corporate Law',
        },
        {
          path: '/tributario',
          title: 'Tax Law',
          description:
            'Tax planning, AFIP defense and tax optimization.',
          image: '/images/derecho-tributario.jpg',
          alt: 'Tax Law',
        },
        {
          path: '/administrativo',
          title: 'Administrative Law',
          description:
            'Challenges, public tenders and state liability.',
          image: '/images/derecho-administrativo.png',
          alt: 'Administrative Law',
        },
        {
          path: '/derecho-internacional-privado',
          title: 'Private International Law',
          description:
            'Jurisdictional conflicts, enforcement of foreign judgments, contracts and cross-border inheritance.',
          image: '/images/derecho-internacional.png',
          alt: 'Private International Law',
        },
        {
          path: '/penal',
          title: 'Criminal Law',
          description:
            'Criminal defense, appeals, precautionary measures and representation in criminal courts.',
          image: '/images/derecho-penal.png',
          alt: 'Criminal Law',
        },
      ];

  const advanced = isSpanish
    ? [
        {
          path: '/reputacion-digital',
          title: 'Reputación Digital',
          description:
            'Remoción de publicaciones ofensivas o difamatorias en redes y buscadores.',
          image: '/images/reputacion-digital.png',
          alt: 'Reputación Digital',
        },
        {
          path: '/english-speaking-lawyer',
          title: 'Abogado de habla inglesa en Córdoba',
          description: 'Asesoramiento legal bilingüe para expatriados y empresas.',
          image: '/images/abogado-habla-inglesa.png',
          alt: 'Abogado de habla inglesa',
        },
        {
          path: '/ciudadania-argentina',
          title: 'Ciudadanía Argentina',
          description:
            'Asesoramiento integral para la obtención de la ciudadanía argentina: requisitos, plazos y documentación.',
          image: '/images/ciudadania-argentina.png',
          alt: 'Ciudadanía Argentina',
        },
      ]
    : [
        {
          path: '/reputacion-digital',
          title: 'Digital Reputation',
          description:
            'Removal of offensive or defamatory posts on social media and search engines.',
          image: '/images/reputacion-digital.png',
          alt: 'Digital Reputation',
        },
        {
          path: '/english-speaking-lawyer',
          title: 'English-Speaking Lawyer in Córdoba',
          description: 'Bilingual legal counsel for expats & businesses.',
          image: '/images/abogado-habla-inglesa.png',
          alt: 'English-Speaking Lawyer',
        },
        {
          path: '/argentine-citizenship',
          title: 'Argentine Citizenship',
          description:
            'Comprehensive guidance to obtain Argentine citizenship: requirements, timelines & documentation.',
          image: '/images/ciudadania-argentina.png',
          alt: 'Argentine Citizenship',
        },
      ];

  return (
    <div className="services-page">
      <Header />
      <FloatingContact />

      <section className="services-overview">
        <h1 className="section-title">
          {isSpanish ? 'Ramas del Derecho' : 'Practice Areas'}
        </h1>
        <div className="cards-container">
          {branches.map((branch) => (
            <div className="card" key={branch.path}>
              <div className="card-inner">
                <img
                  src={branch.image}
                  alt={branch.alt}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{branch.title}</h3>
                  <p className="card-desc">{branch.description}</p>
                  <Link to={branch.path} className="btn">
                    {isSpanish ? 'Ver más' : 'Learn more'}
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-overview">
        <h1 className="section-title">
          {isSpanish ? 'Áreas de Práctica Avanzada' : 'Advanced Practice Areas'}
        </h1>
        <div className="cards-container">
          {advanced.map((item) => (
            <div className="card" key={item.path}>
              <div className="card-inner">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="card-image"
                />
                <div className="card-content">
                  <h3 className="card-title">{item.title}</h3>
                  <p className="card-desc">{item.description}</p>
                  <Link to={item.path} className="btn">
                    {isSpanish ? 'Ver más' : 'Learn more'}
                  </Link>
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

export default Services;
