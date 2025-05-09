// src/pages/ReputacionDigital.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import heroImage from '../assets/hero-reputacion.png';

const ReputacionDigital = () => {
    const lang = navigator.language || navigator.userLanguage;
    const isSpanish = lang.toLowerCase().startsWith('es');

    return (
        <div className="services-page">
            <Header />
            <FloatingContact />

            {/* Hero Section reutilizando la misma estructura que Civil.jsx */}
            <section className="reputacion-hero">
                {/* uso de la clase “title” en lugar de section-title, para que coincida */}
                <h1 className="title">Reputación Digital</h1>
                <h2 className="subtitle">Defendemos tu nombre en Internet</h2>

                {/* forzamos width:100% para que nunca desborde */}
                <img
                    src={heroImage}
                    alt="Reputación Digital"
                    className="hero-image"
                    style={{ width: '100%', height: 'auto' }}
                />

                {/* aplicamos la clase de descripción para que funcione el max-width */}
                <p className="description">
                    ¿Publicaron algo falso, ofensivo o perjudicial sobre vos en redes sociales o buscadores? En VGH Estudio Jurídico removemos publicaciones lesivas en <strong>Facebook, Instagram, X (Twitter), Google, TikTok y más</strong>. Sin que tengas que intervenir, nos ocupamos de todo el proceso: bajamos la publicación, gestionamos la indemnización ante la plataforma e identificamos a los ofensores. Contáctanos sin compromiso. Defendemos tu nombre y tu imagen en Internet.
                </p>

                <div className="hero-buttons">
                    <a href="tel:+543517432323" className="btn">Llamanos sin compromiso</a>
                    <a href="https://wa.me/543517432323" className="btn">Consultanos por WhatsApp</a>
                </div>
            </section>

            <section>
                <h2 className="section-title">¿Cómo trabajamos?</h2>
                <p>
                    Gestionamos desde la <strong>identificación</strong> y análisis del contenido, hasta la <strong>redacción y envío</strong> de intimaciones legales a las plataformas. Si no se retira el contenido, activamos acciones judiciales con nuestro equipo federal de abogados aliados.
                </p>
            </section>

            <section>
                <h2 className="section-title">Casos más comunes</h2>
                <ul>
                    <li>Difamaciones o acusaciones falsas (ej. delitos, conductas inmorales)</li>
                    <li>Acoso o publicaciones que afectan tu imagen profesional o familiar</li>
                    <li>Fotos o datos personales publicados sin consentimiento</li>
                    <li>Campañas de desprestigio o escapes de información sensible</li>
                </ul>
            </section>

            <section>
                <h2 className="section-title">¿Qué garantías brindamos?</h2>
                <p>
                    Servicio nacional, totalmente <strong>online</strong> y sin pasos presenciales. Atención personalizada en todo el país, con respaldo legal según el <em>Código Civil y Comercial</em> y la <em>Ley de Protección de Datos</em>. Tu consulta no es molestia.
                </p>
            </section>

            <Footer />
        </div>
    );
};

export default ReputacionDigital;

