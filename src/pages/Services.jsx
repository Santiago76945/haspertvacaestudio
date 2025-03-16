// src/pages/Services.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/services.css';

const Services = () => {
  return (
    <div>
      <Header />
      <FloatingContact />

      {/* Mensaje de Bienvenida con mención a palabras clave */}
      <section className="welcome-section">
        <h1>En Hasper y Vaca Estudio Jurídico, estamos para ayudarte</h1>
        <p>
          Somos un <strong>equipo de abogados en Córdoba capital, Argentina,</strong> con amplia trayectoria en diversas ramas
          del Derecho. Nuestro compromiso con los asuntos legales de cada cliente es absoluto,
          y nos esforzamos para que, sin importar su situación, consiga el mejor resultado. Nuestra meta es tu satisfacción: trabajamos con responsabilidad, honestidad y excelencia
          jurídica para proteger tus intereses y ofrecerte soluciones concretas.
        </p>
      </section>

      {/* Quick Navigation */}
      <nav className="quick-links">
        <p>Ir directamente a:</p>
        <ul>
          <li><a href="#civil">Derecho Civil</a></li>
          <li><a href="#familia">Derecho de Familia</a></li>
          <li><a href="#comercial">Derecho Comercial</a></li>
          <li><a href="#internacional">Derecho Internacional Privado</a></li>
          <li><a href="#sociedades">Derecho de Sociedades</a></li>
          <li><a href="#tributario">Derecho Tributario</a></li>
        </ul>
      </nav>

      {/* Texto general de presentación de los servicios */}
      <section className="services">
        <h2>Servicios Legales Especializados en Córdoba</h2>
        <p>
          En nuestro <strong>estudio jurídico en Córdoba</strong> le ofrecemos asesoramiento legal integral
          y personalizado en diversas áreas del Derecho. Navegue por nuestros servicios y descubra
          la solución que necesita. Estamos listos para recibir su consulta y brindarle la
          orientación que requiera para alcanzar el mejor resultado posible.
        </p>
      </section>

      {/* CONTENEDOR PRINCIPAL QUE MUESTRA TODAS LAS RAMAS COMO "TARJETAS" */}
      <section className="services">
        <div className="services-grid">

          {/* 1. DERECHO CIVIL */}
          <div className="service-item" id="civil">
            <h2>Derecho Civil</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-civil.webp"
                alt="Derecho Civil"
                className="service-image"
              />
            </div>
            <p>
              ¿Buscando un <strong>abogado civil en Córdoba</strong> que defienda tus intereses en temas de
              contratos, responsabilidad civil o sucesiones? En Hasper y Vaca Estudio Jurídico contamos
              con un equipo de profesionales especializados en cada aspecto del Derecho Civil para
              brindarte soluciones efectivas y personalizadas.
            </p>
            {/* Sub-servicios: ahora 6 ejemplos */}
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Contratos y Obligaciones</h4>
                <p>Redacción, revisión y defensa en conflictos contractuales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Responsabilidad Civil</h4>
                <p>Reclamaciones por daños y perjuicios, defensa y asesoramiento legal.</p>
              </div>
              <div className="sub-service-item">
                <h4>Sucesiones</h4>
                <p>Testamentos, declaratoria de herederos y distribución de bienes.</p>
              </div>
              <div className="sub-service-item">
                <h4>Derecho del Consumidor</h4>
                <p>Protección de derechos y reclamos por incumplimientos comerciales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Propiedad y Reivindicaciones</h4>
                <p>Acciones para defensa y recuperación de la propiedad.</p>
              </div>
              <div className="sub-service-item">
                <h4>Locaciones Urbanas y Desalojos</h4>
                <p>Asesoramiento en contratos de alquiler, cobro de rentas y desalojos.</p>
              </div>
            </div>
          </div>

          {/* 2. DERECHO DE FAMILIA */}
          <div className="service-item" id="familia">
            <h2>Derecho de Familia</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-familia.webp"
                alt="Derecho de Familia"
                className="service-image"
              />
            </div>
            <p>
              Si necesitas un <strong>abogado de familia en Córdoba</strong> que te oriente sobre
              divorcios, adopciones o alimentos, estás en el lugar indicado. En Hasper y Vaca Estudio
              Jurídico manejamos <strong>divorcios internacionales en Córdoba</strong> y en otras jurisdicciones,
              así como todo tipo de procesos familiares con la sensibilidad y profesionalismo
              que mereces.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Divorcios y Separaciones</h4>
                <p>Procedimientos de mutuo acuerdo o contenciosos, incluyendo su reconocimiento internacional.</p>
              </div>
              <div className="sub-service-item">
                <h4>Adopciones</h4>
                <p>Asesoría legal en trámites de adopción nacional e internacional.</p>
              </div>
              <div className="sub-service-item">
                <h4>Alimentos</h4>
                <p>Reclamos, convenios y ejecución de obligaciones alimentarias.</p>
              </div>
              <div className="sub-service-item">
                <h4>Tenencia y Régimen de Visitas</h4>
                <p>Acuerdos o litigios relacionados con la custodia y visitas de menores.</p>
              </div>
              <div className="sub-service-item">
                <h4>Filiaciones</h4>
                <p>Reconocimiento de paternidad y maternidad, impugnaciones y pruebas genéticas.</p>
              </div>
              <div className="sub-service-item">
                <h4>Violencia Familiar y Órdenes de Protección</h4>
                <p>Asistencia legal para víctimas y defensas en casos de violencia doméstica.</p>
              </div>
            </div>
          </div>

          {/* 3. DERECHO COMERCIAL */}
          <div className="service-item" id="comercial">
            <h2>Derecho Comercial</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-comercial.jpeg"
                alt="Derecho Comercial"
                className="service-image"
              />
            </div>
            <p>
              ¿Estás buscando un <strong>abogado en derecho comercial en Córdoba</strong> para asesorarte
              en contratos mercantiles, títulos de crédito o litigios comerciales? Nuestro equipo ofrece
              soluciones ágiles y eficientes para garantizar la seguridad jurídica de tus operaciones
              y defender tus intereses empresariales.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Contratos Mercantiles</h4>
                <p>Redacción y revisión de contratos de compraventa, distribución y más.</p>
              </div>
              <div className="sub-service-item">
                <h4>Títulos de Crédito</h4>
                <p>Cheque, pagaré, letra de cambio y su ejecución judicial.</p>
              </div>
              <div className="sub-service-item">
                <h4>Litigios Comerciales</h4>
                <p>Defensa legal en juicios mercantiles y arbitrajes.</p>
              </div>
              <div className="sub-service-item">
                <h4>Arbitraje y Mediación</h4>
                <p>Mecanismos alternativos de resolución de disputas en materia mercantil.</p>
              </div>
              <div className="sub-service-item">
                <h4>Concursos y Quiebras</h4>
                <p>Asistencia en procedimientos concursales y liquidaciones comerciales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Comercio Electrónico y Tecnología</h4>
                <p>Asesoría en contratos online, protección de datos y normativa digital.</p>
              </div>
            </div>
          </div>

          {/* 4. DERECHO INTERNACIONAL PRIVADO */}
          <div className="service-item" id="internacional">
            <h2>Derecho Internacional Privado</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-internacional.jpeg"
                alt="Derecho Internacional Privado"
                className="service-image"
              />
            </div>
            <p>
              En casos con elementos extranjeros, contar con un <strong>abogado especializado en
                Derecho Internacional Privado en Córdoba</strong> es fundamental. Nuestro estudio
              asesora en la resolución de conflictos con proyección internacional, respaldando
              tus derechos donde quiera que estés.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Reconocimiento y Ejecución de Sentencias y Laudos Extranjeros</h4>
                <p>Homologación ante tribunales argentinos de fallos y arbitrajes internacionales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Restitución de Niñas, Niños y Adolescentes</h4>
                <p>Tramitación de procesos de retorno inmediato ante traslados o retenciones ilícitas.</p>
              </div>
              <div className="sub-service-item">
                <h4>Reclamo Internacional de Alimentos</h4>
                <p>Gestión de obligaciones alimentarias entre partes radicadas en distintos países.</p>
              </div>
              <div className="sub-service-item">
                <h4>Reconocimiento de Adopciones Extranjeras</h4>
                <p>Obtención de validez nacional a resoluciones adoptivas dictadas en otros países.</p>
              </div>
              <div className="sub-service-item">
                <h4>Reconocimiento de Convenciones Matrimoniales Extranjeras</h4>
                <p>Validez en Argentina de acuerdos prenupciales o posnupciales celebrados en el exterior.</p>
              </div>
              <div className="sub-service-item">
                <h4>Sucesiones con Último Domicilio en el Extranjero</h4>
                <p>Dirección y asesoría en procesos hereditarios que involucran varias jurisdicciones.</p>
              </div>
              <div className="sub-service-item">
                <h4>Legalización de Instrumentos según la Convención de La Haya</h4>
                <p>Gestión de apostillas y requisitos para el reconocimiento de documentos extranjeros.</p>
              </div>
              <div className="sub-service-item">
                <h4>Reconocimiento de Sociedades Constituidas en el Extranjero</h4>
                <p>Procedimiento para la validez en Argentina de empresas establecidas en otras jurisdicciones.</p>
              </div>
            </div>
          </div>


          {/* 5. DERECHO DE SOCIEDADES */}
          <div className="service-item" id="sociedades">
            <h2>Derecho de Sociedades</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-societario.jpeg"
                alt="Derecho de Sociedades"
                className="service-image"
              />
            </div>
            <p>
              ¿Quieres constituir una empresa y necesitas un <strong>abogado en sociedades en Córdoba</strong>?
              En Hasper y Vaca Estudio Jurídico te ayudamos desde la creación de tu sociedad hasta
              su eventual reestructuración, fusión o liquidación. Te asesoramos en cada etapa para
              que tu negocio cumpla con todas las normas legales vigentes.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Constitución de Sociedades</h4>
                <p>Asesoría integral en estatutos, trámites y registro.</p>
              </div>
              <div className="sub-service-item">
                <h4>Transformación y Fusión</h4>
                <p>Cambios estructurales y reorganización societaria.</p>
              </div>
              <div className="sub-service-item">
                <h4>Disolución y Liquidación</h4>
                <p>Proceso ordenado para el cierre de sociedades.</p>
              </div>
              <div className="sub-service-item">
                <h4>Auditoría Legal y Compliance</h4>
                <p>Revisión de procesos internos para asegurar el cumplimiento normativo.</p>
              </div>
              <div className="sub-service-item">
                <h4>Asambleas y Órganos de Administración</h4>
                <p>Organización, convocatoria y validación de decisiones societarias.</p>
              </div>
              <div className="sub-service-item">
                <h4>Conflictos entre Socios</h4>
                <p>Resolución de disputas internas, defensa de derechos y acuerdos.</p>
              </div>
            </div>
          </div>

          {/* 6. DERECHO TRIBUTARIO */}
          <div className="service-item" id="tributario">
            <h2>Derecho Tributario</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-tributario.jpeg"
                alt="Derecho Tributario"
                className="service-image"
              />
            </div>
            <p>
              Un buen <strong>abogado tributario en Córdoba</strong> puede ayudarte a optimizar tu carga
              impositiva y a defenderte ante inspecciones o litigios fiscales. En Hasper y Vaca
              Estudio Jurídico te ofrecemos planeamiento fiscal, representación ante organismos
              de control y consultoría permanente para que tu situación tributaria esté siempre
              bajo control.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Planeamiento Fiscal</h4>
                <p>Estrategias para minimizar riesgos y cargas impositivas.</p>
              </div>
              <div className="sub-service-item">
                <h4>Defensa ante Organismos</h4>
                <p>Representación en inspecciones y actuaciones de AFIP u otros entes.</p>
              </div>
              <div className="sub-service-item">
                <h4>Consultoría Continua</h4>
                <p>Monitoreo de obligaciones para evitar sanciones y multas.</p>
              </div>
              <div className="sub-service-item">
                <h4>Reclamos ante Ajustes Fiscales</h4>
                <p>Asistencia en objeciones y recursos contra determinaciones de deuda.</p>
              </div>
              <div className="sub-service-item">
                <h4>Devoluciones y Reintegros de Impuestos</h4>
                <p>Gestión de trámites para recuperar saldos a favor y créditos fiscales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Litigios Tributarios</h4>
                <p>Representación en sede judicial y contencioso-administrativa.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* LLAMADO A LA ACCIÓN */}
      <section className="services">
        <div className="contact-cta">
          <h2>¿Necesita Asesoramiento Legal en Córdoba?</h2>
          <p>
            Nuestro equipo de <strong>abogados especializados</strong> está a su disposición para brindarle
            soluciones eficaces y adaptadas a sus necesidades. <strong>Contáctenos hoy mismo</strong>
            y déjenos ayudarle a proteger sus derechos y alcanzar sus objetivos.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
