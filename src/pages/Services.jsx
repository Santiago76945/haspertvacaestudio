// src/pages/Services.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/services.css';

const Services = () => {
  return (
    <div>
      <Header />
      <section className="services">
        <h2>Servicios en Derecho Internacional Privado</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Reconocimiento y Ejecución de Resoluciones Extranjeras</h3>
            <p>
              Reconocimiento y ejecución de sentencias extranjeras en Argentina (exequátur).<br />
              Reconocimiento y ejecución de laudos arbitrales extranjeros.<br />
              Reconocimiento de sentencias de divorcio extranjeras.<br />
              Reconocimiento de adopciones extranjeras.<br />
              Reconocimiento de convenciones matrimoniales extranjeras (capitulaciones prenupciales).
            </p>
          </div>
          <div className="service-item">
            <h3>2. Derecho de Familia Internacional</h3>
            <p>
              Inscripción de matrimonios celebrados en el extranjero.<br />
              Reclamo internacional de alimentos (hijos o excónyuges).<br />
              Restitución internacional de niños, niñas y adolescentes (sustracción parental).
            </p>
          </div>
          <div className="service-item">
            <h3>3. Derecho Sucesorio Internacional</h3>
            <p>
              Tramitación de sucesiones con último domicilio en el extranjero.<br />
              Reconocimiento y ejecución de testamentos otorgados en el extranjero.<br />
              Gestión de herencias internacionales y partición de bienes en distintos países.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Empresas y Comercio Internacional</h3>
            <p>
              Reconocimiento de sociedades constituidas en el extranjero para operar en Argentina.<br />
              Asesoramiento en contratos internacionales (compra-venta, distribución, franquicias).<br />
              Negociaciones y resolución de conflictos comerciales internacionales.<br />
              Ejecución de medidas cautelares en el extranjero (embargos, inhibiciones).<br />
              Diligenciamiento de cédulas de notificación extranjeras en Argentina y viceversa.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Legalización y Documentación Internacional</h3>
            <p>
              Legalización y apostilla de documentos extranjeros (Convención de La Haya).<br />
              Diligenciamiento de cédulas de notificación y exhortos internacionales.<br />
              Traducciones oficiales de documentos jurídicos para uso en el extranjero.
            </p>
          </div>
          <div className="service-item">
            <h3>6. Asesoramiento en Derecho Internacional Privado</h3>
            <p>
              Determinación de la legislación aplicable en contratos y litigios internacionales.<br />
              Conflictos de jurisdicción y competencia entre distintos países.<br />
              Asesoramiento en arbitraje internacional y mecanismos alternativos de resolución de disputas.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Services;
