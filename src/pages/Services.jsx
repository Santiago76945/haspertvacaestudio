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
        <h1>En VGH estudio jurídico, estamos para ayudarte</h1>
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
          <li><a href="#comercial">Derecho Comercial</a></li>
          <li><a href="#societario">Derecho Societario</a></li>
          <li><a href="#tributario">Derecho Tributario</a></li>
          <li><a href="#administrativo">Derecho Administrativo</a></li>
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
              contratos, responsabilidad civil o sucesiones? En VGH estudio jurídico contamos
              con un equipo de profesionales especializados en cada aspecto del Derecho Civil para
              brindarte soluciones efectivas y personalizadas.
            </p>
            {/* Sub-servicios */}
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

          {/* 2. DERECHO COMERCIAL */}
          <div className="service-item" id="comercial">
            <h2>Derecho Comercial</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-comercial.png"
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

          {/* 3. DERECHO SOCIETARIO */}
          <div className="service-item" id="societario">
            <h2>Derecho Societario</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-societario.jpeg"
                alt="Derecho Societario"
                className="service-image"
              />
            </div>
            <p>
              ¿Quieres constituir una empresa y necesitas un <strong>abogado en sociedades en Córdoba</strong>?
              En VGH estudio jurídico te ayudamos desde la creación de tu sociedad hasta
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

          {/* 4. DERECHO TRIBUTARIO */}
          <div className="service-item" id="tributario">
            <h2>Derecho Tributario</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-tributario.jpg"
                alt="Derecho Tributario"
                className="service-image"
              />
            </div>
            <p>
              Un buen <strong>abogado tributario en Córdoba</strong> puede ayudarte a optimizar tu carga
              impositiva y a defenderte ante inspecciones o litigios fiscales. En VGH estudio jurídico
              te ofrecemos planeamiento fiscal, representación ante organismos
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

          {/* 5. DERECHO ADMINISTRATIVO */}
          <div className="service-item" id="administrativo">
            <h2>Derecho Administrativo</h2>
            <div className="service-image-wrapper">
              <img
                src="/images/derecho-administrativo.png"
                alt="Derecho Administrativo"
                className="service-image"
              />
            </div>
            <p>
              Si necesitas un <strong>abogado especializado en Derecho Administrativo en Córdoba</strong>
              para afrontar cuestiones relacionadas con la administración pública, licitaciones,
              responsabilidad estatal o impugnaciones, nuestro equipo ofrece asesoramiento integral
              para garantizar la defensa de tus derechos e intereses.
            </p>
            <div className="sub-services-grid">
              <div className="sub-service-item">
                <h4>Procedimientos Administrativos</h4>
                <p>Asesoramiento en trámites y expedientes ante organismos estatales.</p>
              </div>
              <div className="sub-service-item">
                <h4>Contrataciones Públicas</h4>
                <p>Revisión y defensa en licitaciones, concursos y convenios con el Estado.</p>
              </div>
              <div className="sub-service-item">
                <h4>Responsabilidad del Estado</h4>
                <p>Reclamos por daños originados por la actividad administrativa.</p>
              </div>
              <div className="sub-service-item">
                <h4>Régimen Disciplinario y Sancionatorio</h4>
                <p>Defensa de funcionarios y particulares en procedimientos sancionatorios.</p>
              </div>
              <div className="sub-service-item">
                <h4>Recursos Administrativos</h4>
                <p>Impugnaciones y revisiones ante actos ilegítimos de la administración.</p>
              </div>
              <div className="sub-service-item">
                <h4>Litigios Contencioso-Administrativos</h4>
                <p>Representación en disputas judiciales contra el Estado o entes públicos.</p>
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

