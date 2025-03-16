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

      <section className="services">
        <h2>Servicios Legales Especializados en Córdoba</h2>
        <p>
          En nuestro <strong>estudio jurídico en Córdoba</strong> le ofrecemos asesoramiento legal integral
          y personalizado en diversas áreas del Derecho. Navegue por nuestros servicios y descubra
          la solución que necesita. Estamos listos para recibir su consulta y brindarle la
          orientación que requiera para alcanzar el mejor resultado posible.
        </p>
      </section>

      {/* DERECHO CIVIL */}
      <section id="civil" className="services">
        <h2>Derecho Civil</h2>
        {/* Mensaje SEO-friendly para Derecho Civil */}
        <p>
          ¿Buscando un <strong>abogado civil en Córdoba</strong> que defienda tus intereses en temas de 
          contratos, responsabilidad civil o sucesiones? En Hasper y Vaca Estudio Jurídico contamos 
          con un equipo de profesionales especializados en cada aspecto del Derecho Civil para 
          brindarte soluciones efectivas y personalizadas.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Contratos y Obligaciones</h3>
            <p>
              Redacción y revisión de contratos civiles.<br />
              Resolución de conflictos contractuales.<br />
              Asesoramiento en incumplimiento de obligaciones.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Responsabilidad Civil</h3>
            <p>
              Reclamaciones por daños y perjuicios.<br />
              Reclamos por accidentes de tránsito.<br />
              Defensa ante demandas de responsabilidad.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Derechos Reales e Inmobiliarios</h3>
            <p>
              Asistencia en compraventas de inmuebles.<br />
              Constitución y extinción de usufructos, hipotecas, servidumbres.<br />
              Conflictos de propiedad y desalojos.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Sucesiones y Testamentos</h3>
            <p>
              Apertura y tramitación integral de sucesiones.<br />
              Elaboración y asesoramiento en testamentos.<br />
              Partición de bienes y conflictos hereditarios.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Mediaciones y Métodos Alternativos</h3>
            <p>
              Resolución extrajudicial de controversias.<br />
              Mediaciones civiles y familiares.<br />
              Conciliaciones y arbitrajes para evitar litigios prolongados.
            </p>
          </div>
        </div>
      </section>

      {/* DERECHO DE FAMILIA */}
      <section id="familia" className="services">
        <h2>Derecho de Familia</h2>
        {/* Mensaje SEO-friendly para Derecho de Familia */}
        <p>
          Si necesitas un <strong>abogado de familia en Córdoba</strong> que te oriente sobre 
          divorcios, adopciones o alimentos, estás en el lugar indicado. En Hasper y Vaca Estudio 
          Jurídico manejamos <strong>divorcios internacionales en Córdoba</strong> y en otras jurisdicciones, 
          así como todo tipo de procesos familiares con la sensibilidad y profesionalismo 
          que mereces.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Divorcios y Separaciones</h3>
            <p>
              Divorcios de mutuo acuerdo o contenciosos.<br />
              Separación de bienes y acuerdos de manutención.<br />
              Tramitación de convenios reguladores.<br />
              <strong>Divorcio internacional en Córdoba y otras jurisdicciones</strong>.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Alimentos y Responsabilidad Parental</h3>
            <p>
              Asesoramiento en reclamos de alimentos para hijos o excónyuges.<br />
              Ejecución y modificación de cuotas alimentarias.<br />
              Pautas de cuidado personal y régimen de comunicación.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Adopciones</h3>
            <p>
              Orientación legal en procesos de adopción nacional e internacional.<br />
              Representación en organismos públicos y tribunales.<br />
              Seguimiento y cumplimiento de requisitos legales.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Protección de Personas Vulnerables</h3>
            <p>
              Curatelas y tutelas para adultos mayores o personas con discapacidad.<br />
              Procedimientos judiciales de restricción de capacidad.<br />
              Defensa de derechos de personas con necesidades especiales.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Mediación y Acuerdos Familiares</h3>
            <p>
              Soluciones amistosas para conflictos familiares.<br />
              Redacción de acuerdos prenupciales y capitulaciones matrimoniales.<br />
              Orientación para reducir la tensión y el costo emocional de un litigio.
            </p>
          </div>
        </div>
      </section>

      {/* DERECHO COMERCIAL */}
      <section id="comercial" className="services">
        <h2>Derecho Comercial</h2>
        {/* Mensaje SEO-friendly para Derecho Comercial */}
        <p>
          ¿Estás buscando un <strong>abogado en derecho comercial en Córdoba</strong> para asesorarte 
          en contratos mercantiles, títulos de crédito o litigios comerciales? Nuestro equipo ofrece 
          soluciones ágiles y eficientes para garantizar la seguridad jurídica de tus operaciones 
          y defender tus intereses empresariales.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Contratos Mercantiles</h3>
            <p>
              Asesoramiento en compraventa, distribución y franquicias.<br />
              Elaboración y revisión de contratos de prestación de servicios.<br />
              Resolución de controversias por incumplimiento contractual.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Títulos de Crédito</h3>
            <p>
              Cobro de cheques, pagarés y letras de cambio.<br />
              Juicios ejecutivos y ejecuciones prendarias.<br />
              Negociación de reestructuraciones de deuda.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Competencia Desleal y Defensa del Consumidor</h3>
            <p>
              Representación en casos de publicidad engañosa.<br />
              Reclamos por productos defectuosos o mal servicio.<br />
              Protección de marcas, patentes y propiedad intelectual.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Insolvencia y Concursos</h3>
            <p>
              Asistencia en procesos de quiebra y concurso preventivo.<br />
              Definición de estrategias de recuperación de crédito.<br />
              Representación de acreedores y deudores ante tribunales.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Litigios Comerciales</h3>
            <p>
              Resolución de conflictos en el ámbito societario y mercantil.<br />
              Asesoría en arbitrajes nacionales e internacionales.<br />
              Ejecución de laudos arbitrales y sentencias comerciales.
            </p>
          </div>
        </div>
      </section>

      {/* DERECHO INTERNACIONAL PRIVADO */}
      <section id="internacional" className="services">
        <h2>Derecho Internacional Privado</h2>
        {/* Mensaje SEO-friendly para Derecho Internacional Privado */}
        <p>
          En casos con elementos extranjeros, contar con un <strong>abogado especializado en 
          Derecho Internacional Privado en Córdoba</strong> es fundamental. Nuestro estudio te 
          asesora en conflictos de jurisdicción, reconocimiento de sentencias extranjeras y 
          demás trámites con proyección internacional, respaldando tus derechos donde quiera 
          que estés.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Reconocimiento y Ejecución de Resoluciones Extranjeras</h3>
            <p>
              Exequátur de sentencias extranjeras en Argentina.<br />
              Reconocimiento de laudos arbitrales internacionales.<br />
              Reconocimiento de sentencias de divorcio y adopciones extranjeras.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Conflictos de Ley y Jurisdicción</h3>
            <p>
              Determinación de legislación aplicable en contratos internacionales.<br />
              Asesoría en litispendencia internacional y foros de competencia.<br />
              Estrategias de defensa en tribunales extranjeros.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Derecho de Familia Internacional</h3>
            <p>
              Inscripción de matrimonios celebrados en el extranjero.<br />
              Reclamo de alimentos a nivel internacional.<br />
              Restitución internacional de menores (sustracción parental).
            </p>
          </div>
          <div className="service-item">
            <h3>4. Derecho Sucesorio Internacional</h3>
            <p>
              Sucesiones con último domicilio en el extranjero.<br />
              Reconocimiento y ejecución de testamentos foráneos.<br />
              Partición de bienes en distintos países.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Documentación y Apostillas</h3>
            <p>
              Legalización y apostilla de documentos (Convenio de La Haya).<br />
              Traducciones oficiales para uso en el extranjero.<br />
              Diligenciamiento de exhortos y notificaciones en otros países.
            </p>
          </div>
        </div>
      </section>

      {/* DERECHO DE SOCIEDADES */}
      <section id="sociedades" className="services">
        <h2>Derecho de Sociedades</h2>
        {/* Mensaje SEO-friendly para Derecho de Sociedades */}
        <p>
          ¿Quieres constituir una empresa y necesitas un <strong>abogado en sociedades en Córdoba</strong>? 
          En Hasper y Vaca Estudio Jurídico te ayudamos desde la creación de tu sociedad hasta 
          su eventual reestructuración, fusión o liquidación. Te asesoramos en cada etapa para 
          que tu negocio cumpla con todas las normas legales vigentes.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Constitución de Sociedades</h3>
            <p>
              Asesoramiento en la elección del tipo societario adecuado.<br />
              <strong>Abogados para iniciar una sociedad en Córdoba</strong>, desde Pymes hasta grandes empresas.<br />
              Redacción de estatutos y contratos sociales.<br />
              Tramitación de inscripciones ante los registros correspondientes.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Fusiones y Adquisiciones (M&A)</h3>
            <p>
              Due diligence y auditorías legales.<br />
              Negociación y redacción de acuerdos de compra-venta.<br />
              Integración y reestructuración de sociedades.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Cumplimiento Normativo y Compliance</h3>
            <p>
              Implementación de políticas de buen gobierno corporativo.<br />
              Prevención de lavado de activos y corrupción.<br />
              Evaluación de riesgos legales y regulatorios.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Conflictos Societarios</h3>
            <p>
              Solución de disputas entre accionistas o socios.<br />
              Defensa de derechos en asambleas y juntas directivas.<br />
              Acciones legales por incumplimientos estatutarios.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Disolución y Liquidación de Sociedades</h3>
            <p>
              Procedimientos de disolución amistosa o judicial.<br />
              Liquidación de activos y pasivos societarios.<br />
              Distribución de remanentes y cierre formal de la compañía.
            </p>
          </div>
        </div>
      </section>

      {/* DERECHO TRIBUTARIO */}
      <section id="tributario" className="services">
        <h2>Derecho Tributario</h2>
        {/* Mensaje SEO-friendly para Derecho Tributario */}
        <p>
          Un buen <strong>abogado tributario en Córdoba</strong> puede ayudarte a optimizar tu carga 
          impositiva y a defenderte ante inspecciones o litigios fiscales. En Hasper y Vaca 
          Estudio Jurídico te ofrecemos planeamiento fiscal, representación ante organismos 
          de control y consultoría permanente para que tu situación tributaria esté siempre 
          bajo control.
        </p>
        <div className="services-grid">
          <div className="service-item">
            <h3>1. Planeamiento Fiscal y Optimización Impositiva</h3>
            <p>
              Estrategias para reducir cargas fiscales.<br />
              Asesoría en reorganizaciones empresariales con ventajas tributarias.<br />
              Análisis de convenios internacionales para evitar la doble imposición.
            </p>
          </div>
          <div className="service-item">
            <h3>2. Defensa ante Inspecciones y Fiscalizaciones</h3>
            <p>
              Representación en procedimientos de verificación de la AFIP.<br />
              Respuestas a requerimientos y descargos administrativos.<br />
              Negociación de planes de facilidades de pago.
            </p>
          </div>
          <div className="service-item">
            <h3>3. Régimen de Promociones e Incentivos Fiscales</h3>
            <p>
              Asesoramiento en la obtención de beneficios impositivos.<br />
              Tramitación de exenciones y créditos fiscales.<br />
              Análisis de impacto y viabilidad de proyectos especiales.
            </p>
          </div>
          <div className="service-item">
            <h3>4. Litigios Tributarios</h3>
            <p>
              Defensa en juicios de determinación de oficio.<br />
              Recursos ante tribunales fiscales y contenciosos administrativos.<br />
              Revisión judicial de sanciones y multas impositivas.
            </p>
          </div>
          <div className="service-item">
            <h3>5. Consultoría Permanente</h3>
            <p>
              Interpretación y actualización de la normativa tributaria.<br />
              Evaluación de riesgos impositivos en nuevas inversiones.<br />
              Asistencia personalizada para personas físicas y jurídicas.
            </p>
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
