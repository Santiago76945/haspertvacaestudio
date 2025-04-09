// src/pages/Services.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/services.css';

const Services = () => {
  // Detectamos el idioma del navegador (ej: "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Objeto de contenidos en español e inglés
  const content = {
    es: {
      welcomeSection: {
        h1: "En VGH estudio jurídico, estamos para ayudarte",
        p: `Somos un <strong>equipo de abogados en Córdoba capital, Argentina,</strong> con amplia trayectoria en diversas ramas
          del Derecho. Nuestro compromiso con los asuntos legales de cada cliente es absoluto,
          y nos esforzamos para que, sin importar su situación, consiga el mejor resultado.
          Nuestra meta es tu satisfacción: trabajamos con responsabilidad, honestidad y excelencia
          jurídica para proteger tus intereses y ofrecerte soluciones concretas.
          <br /><br />
          Para <strong>clientes internacionales</strong> que prefieran comunicarse en inglés, contamos con profesionales bilingües
          con experiencia en entornos multiculturales. Si estás buscando un abogado que hable inglés
          en Córdoba, Argentina, podemos asesorarte con la misma dedicación y compromiso.`
      },
      serviceIntroSection: {
        h2: "Áreas de Práctica Destacadas",
        p: "Conoce de manera rápida en qué te podemos ayudar y descubre las consultas más frecuentes de nuestros clientes.",
        services: [
          {
            id: "civil",
            title: "Derecho Civil",
            p: "Manejo de asuntos como <em>divorcios, sucesiones, desalojos</em> y reclamos por responsabilidad civil, entre otros.",
            moreInfo: "Más información"
          },
          {
            id: "comercial",
            title: "Derecho Comercial",
            p: "Asistencia en <em>contratos mercantiles, títulos de crédito y litigios comerciales</em> para proteger tu negocio.",
            moreInfo: "Más información"
          },
          {
            id: "societario",
            title: "Derecho Societario",
            p: "Constitución de sociedades, fusiones, <em>transformaciones</em> y asesoría en conflictos entre socios.",
            moreInfo: "Más información"
          },
          {
            id: "tributario",
            title: "Derecho Tributario",
            p: "Planeamiento fiscal, defensa ante AFIP y <em>optimización</em> de la carga impositiva para empresas y particulares.",
            moreInfo: "Más información"
          },
          {
            id: "administrativo",
            title: "Derecho Administrativo",
            p: "Impugnaciones, responsabilidad estatal, <em>licitaciones públicas</em> y defensa en procedimientos administrativos.",
            moreInfo: "Más información"
          }
        ]
      },
      quickLinks: {
        p: "Ir directamente a:",
        links: [
          { href: "#civil", label: "Derecho Civil" },
          { href: "#comercial", label: "Derecho Comercial" },
          { href: "#societario", label: "Derecho Societario" },
          { href: "#tributario", label: "Derecho Tributario" },
          { href: "#administrativo", label: "Derecho Administrativo" }
        ]
      },
      generalServices: {
        h2: "Servicios Legales Especializados en Córdoba",
        p: `En nuestro <strong>estudio jurídico en Córdoba</strong> le ofrecemos asesoramiento legal integral
          y personalizado en diversas áreas del Derecho. Navegue por nuestros servicios y descubra
          la solución que necesita. Estamos listos para recibir su consulta y brindarle la
          orientación que requiera para alcanzar el mejor resultado posible.`
      },
      serviceItems: [
        {
          id: "civil",
          h2: "Derecho Civil",
          image: "/images/derecho-civil.webp",
          alt: "Derecho Civil",
          p: `¿Buscando un <strong>abogado civil en Córdoba</strong> que defienda tus intereses en temas de
              contratos, responsabilidad civil o sucesiones? En VGH estudio jurídico contamos
              con un equipo de profesionales especializados en cada aspecto del Derecho Civil para
              brindarte soluciones efectivas y personalizadas.`,
          subServices: [
            { h4: "Contratos y Obligaciones", p: "Redacción, revisión y defensa en conflictos contractuales." },
            { h4: "Responsabilidad Civil", p: "Reclamaciones por daños y perjuicios, defensa y asesoramiento legal." },
            { h4: "Sucesiones", p: "Testamentos, declaratoria de herederos y distribución de bienes." },
            { h4: "Derecho del Consumidor", p: "Protección de derechos y reclamos por incumplimientos comerciales." },
            { h4: "Propiedad y Reivindicaciones", p: "Acciones para defensa y recuperación de la propiedad." },
            { h4: "Locaciones Urbanas y Desalojos", p: "Asesoramiento en contratos de alquiler, cobro de rentas y desalojos." }
          ]
        },
        {
          id: "comercial",
          h2: "Derecho Comercial",
          image: "/images/derecho-comercial.png",
          alt: "Derecho Comercial",
          p: `¿Estás buscando un <strong>abogado en derecho comercial en Córdoba</strong> para asesorarte
              en contratos mercantiles, títulos de crédito o litigios comerciales? Nuestro equipo ofrece
              soluciones ágiles y eficientes para garantizar la seguridad jurídica de tus operaciones
              y defender tus intereses empresariales.`,
          subServices: [
            { h4: "Contratos Mercantiles", p: "Redacción y revisión de contratos de compraventa, distribución y más." },
            { h4: "Títulos de Crédito", p: "Cheque, pagaré, letra de cambio y su ejecución judicial." },
            { h4: "Litigios Comerciales", p: "Defensa legal en juicios mercantiles y arbitrajes." },
            { h4: "Arbitraje y Mediación", p: "Mecanismos alternativos de resolución de disputas en materia mercantil." },
            { h4: "Concursos y Quiebras", p: "Asistencia en procedimientos concursales y liquidaciones comerciales." },
            { h4: "Comercio Electrónico y Tecnología", p: "Asesoría en contratos online, protección de datos y normativa digital." }
          ]
        },
        {
          id: "societario",
          h2: "Derecho Societario",
          image: "/images/derecho-societario.jpeg",
          alt: "Derecho Societario",
          p: `¿Quieres constituir una empresa y necesitas un <strong>abogado en sociedades en Córdoba</strong>?
              En VGH estudio jurídico te ayudamos desde la creación de tu sociedad hasta
              su eventual reestructuración, fusión o liquidación. Te asesoramos en cada etapa para
              que tu negocio cumpla con todas las normas legales vigentes.`,
          subServices: [
            { h4: "Constitución de Sociedades", p: "Asesoría integral en estatutos, trámites y registro." },
            { h4: "Transformación y Fusión", p: "Cambios estructurales y reorganización societaria." },
            { h4: "Disolución y Liquidación", p: "Proceso ordenado para el cierre de sociedades." },
            { h4: "Auditoría Legal y Compliance", p: "Revisión de procesos internos para asegurar el cumplimiento normativo." },
            { h4: "Asambleas y Órganos de Administración", p: "Organización, convocatoria y validación de decisiones societarias." },
            { h4: "Conflictos entre Socios", p: "Resolución de disputas internas, defensa de derechos y acuerdos." }
          ]
        },
        {
          id: "tributario",
          h2: "Derecho Tributario",
          image: "/images/derecho-tributario.jpg",
          alt: "Derecho Tributario",
          p: `Un buen <strong>abogado tributario en Córdoba</strong> puede ayudarte a optimizar tu carga impositiva y a
              defenderte ante inspecciones o litigios fiscales. En VGH estudio jurídico te ofrecemos
              planeamiento fiscal, representación ante organismos de control y consultoría permanente
              para que tu situación tributaria esté siempre bajo control.`,
          subServices: [
            { h4: "Planeamiento Fiscal", p: "Estrategias para minimizar riesgos y cargas impositivas." },
            { h4: "Defensa ante Organismos", p: "Representación en inspecciones y actuaciones de AFIP u otros entes." },
            { h4: "Consultoría Continua", p: "Monitoreo de obligaciones para evitar sanciones y multas." },
            { h4: "Reclamos ante Ajustes Fiscales", p: "Asistencia en objeciones y recursos contra determinaciones de deuda." },
            { h4: "Devoluciones y Reintegros de Impuestos", p: "Gestión de trámites para recuperar saldos a favor y créditos fiscales." },
            { h4: "Litigios Tributarios", p: "Representación en sede judicial y contencioso-administrativa." }
          ]
        },
        {
          id: "administrativo",
          h2: "Derecho Administrativo",
          image: "/images/derecho-administrativo.png",
          alt: "Derecho Administrativo",
          p: `Si necesitas un <strong>abogado especializado en Derecho Administrativo en Córdoba</strong>
              para afrontar cuestiones relacionadas con la administración pública, licitaciones,
              responsabilidad estatal o impugnaciones, nuestro equipo ofrece asesoramiento integral
              para garantizar la defensa de tus derechos e intereses.`,
          subServices: [
            { h4: "Procedimientos Administrativos", p: "Asesoramiento en trámites y expedientes ante organismos estatales." },
            { h4: "Contrataciones Públicas", p: "Revisión y defensa en licitaciones, concursos y convenios con el Estado." },
            { h4: "Responsabilidad del Estado", p: "Reclamos por daños originados por la actividad administrativa." },
            { h4: "Régimen Disciplinario y Sancionatorio", p: "Defensa de funcionarios y particulares en procedimientos sancionatorios." },
            { h4: "Recursos Administrativos", p: "Impugnaciones y revisiones ante actos ilegítimos de la administración." },
            { h4: "Litigios Contencioso-Administrativos", p: "Representación en disputas judiciales contra el Estado o entes públicos." }
          ]
        }
      ],
      cta: {
        h2: "¿Necesita Asesoramiento Legal en Córdoba?",
        p: `Nuestro equipo de <strong>abogados especializados</strong> está a su disposición para brindarle
            soluciones eficaces y adaptadas a sus necesidades. <strong>Contáctenos hoy mismo</strong>
            y déjenos ayudarle a proteger sus derechos y alcanzar sus objetivos.`
      }
    },
    en: {
      welcomeSection: {
        h1: "At VGH Legal Studio, we are here to help you",
        p: `We are a <strong>team of lawyers in Córdoba, Argentina,</strong> with extensive experience in various areas of law.
            Our commitment to your legal matters is absolute, and we strive to ensure that, regardless of your situation, you achieve the best possible outcome.
            Your satisfaction is our goal: we work with responsibility, honesty, and legal excellence to protect your interests and offer you practical solutions.
            <br /><br />
            For <strong>international clients</strong> who prefer to communicate in English, we have bilingual professionals with experience in multicultural environments.
            If you’re looking for an English-speaking lawyer in Córdoba, Argentina, we can provide you with the same dedication and commitment.`
      },
      serviceIntroSection: {
        h2: "Key Practice Areas",
        p: "Quickly discover how we can help you and explore the most frequently asked questions by our clients.",
        services: [
          {
            id: "civil",
            title: "Civil Law",
            p: "Handling cases such as divorces, estates, evictions, and claims for civil liability, among others.",
            moreInfo: "More information"
          },
          {
            id: "comercial",
            title: "Commercial Law",
            p: "Assistance with commercial contracts, negotiable instruments, and commercial litigation to protect your business.",
            moreInfo: "More information"
          },
          {
            id: "societario",
            title: "Corporate Law",
            p: "Company formation, mergers, restructurings, and advice on shareholder disputes.",
            moreInfo: "More information"
          },
          {
            id: "tributario",
            title: "Tax Law",
            p: "Tax planning, representation before regulatory bodies, and optimization of tax burdens for businesses and individuals.",
            moreInfo: "More information"
          },
          {
            id: "administrativo",
            title: "Administrative Law",
            p: "Challenging administrative decisions, state liability, public tenders, and defense in administrative proceedings.",
            moreInfo: "More information"
          }
        ]
      },
      quickLinks: {
        p: "Go directly to:",
        links: [
          { href: "#civil", label: "Civil Law" },
          { href: "#comercial", label: "Commercial Law" },
          { href: "#societario", label: "Corporate Law" },
          { href: "#tributario", label: "Tax Law" },
          { href: "#administrativo", label: "Administrative Law" }
        ]
      },
      generalServices: {
        h2: "Specialized Legal Services in Córdoba",
        p: `At our <strong>legal firm in Córdoba</strong> we offer comprehensive and personalized legal advice in various areas of law.
            Browse through our services and discover the solution you need.
            We are ready to receive your inquiry and provide you with the guidance required to achieve the best possible outcome.`
      },
      serviceItems: [
        {
          id: "civil",
          h2: "Civil Law",
          image: "/images/derecho-civil.webp",
          alt: "Civil Law",
          p: `Are you looking for a <strong>civil lawyer in Córdoba</strong> to defend your interests in matters of contracts, civil liability, or estates?
              At VGH Legal Studio, we have a team of professionals specialized in every aspect of Civil Law to provide effective and personalized solutions.`,
          subServices: [
            { h4: "Contracts and Obligations", p: "Drafting, reviewing, and defending contractual disputes." },
            { h4: "Civil Liability", p: "Claims for damages, legal defense, and advice." },
            { h4: "Estates", p: "Wills, inheritance declarations, and asset distribution." },
            { h4: "Consumer Law", p: "Protection of rights and claims for commercial breaches." },
            { h4: "Property and Claims", p: "Actions for defense and recovery of property." },
            { h4: "Urban Leases and Evictions", p: "Advice on rental contracts, rent collection, and evictions." }
          ]
        },
        {
          id: "comercial",
          h2: "Commercial Law",
          image: "/images/derecho-comercial.png",
          alt: "Commercial Law",
          p: `Are you looking for a <strong>commercial lawyer in Córdoba</strong> to advise you on commercial contracts, negotiable instruments, or commercial litigation?
              Our team offers fast and efficient solutions to ensure the legal security of your operations and defend your business interests.`,
          subServices: [
            { h4: "Commercial Contracts", p: "Drafting and reviewing sales contracts, distribution agreements, and more." },
            { h4: "Negotiable Instruments", p: "Checks, promissory notes, bills of exchange, and their legal enforcement." },
            { h4: "Commercial Litigation", p: "Legal defense in commercial litigation and arbitrations." },
            { h4: "Arbitration and Mediation", p: "Alternative dispute resolution mechanisms in commercial matters." },
            { h4: "Bankruptcies and Liquidations", p: "Assistance in insolvency procedures and commercial liquidations." },
            { h4: "E-commerce and Technology", p: "Advice on online contracts, data protection, and digital regulations." }
          ]
        },
        {
          id: "societario",
          h2: "Corporate Law",
          image: "/images/derecho-societario.jpeg",
          alt: "Corporate Law",
          p: `Do you want to establish a company and need a <strong>corporate lawyer in Córdoba</strong>?
              At VGH Legal Studio, we assist you from the creation of your company through its eventual restructuring, merger, or liquidation.
              We advise you at every stage to ensure your business complies with all current legal regulations.`,
          subServices: [
            { h4: "Company Formation", p: "Comprehensive advice on articles, formalities, and registration." },
            { h4: "Transformation and Merger", p: "Structural changes and corporate reorganization." },
            { h4: "Dissolution and Liquidation", p: "Orderly process for closing companies." },
            { h4: "Legal Audit and Compliance", p: "Review of internal processes to ensure regulatory compliance." },
            { h4: "Assemblies and Management Bodies", p: "Organization, convening, and validation of corporate decisions." },
            { h4: "Shareholder Disputes", p: "Resolution of internal disputes, defense of rights, and agreements." }
          ]
        },
        {
          id: "tributario",
          h2: "Tax Law",
          image: "/images/derecho-tributario.jpg",
          alt: "Tax Law",
          p: `A good <strong>tax lawyer in Córdoba</strong> can help you optimize your tax burden and defend you during inspections or tax litigation.
              At VGH Legal Studio, we offer tax planning, representation before regulatory bodies, and ongoing consulting to keep your tax situation under control.`,
          subServices: [
            { h4: "Tax Planning", p: "Strategies to minimize risks and tax burdens." },
            { h4: "Defense before Authorities", p: "Representation in inspections and actions by AFIP or other agencies." },
            { h4: "Ongoing Consulting", p: "Monitoring obligations to avoid fines and sanctions." },
            { h4: "Claims against Tax Adjustments", p: "Assistance in objections and appeals against debt determinations." },
            { h4: "Tax Refunds and Reimbursements", p: "Management of procedures to recover tax credits and balances." },
            { h4: "Tax Litigation", p: "Representation in judicial and administrative litigation." }
          ]
        },
        {
          id: "administrativo",
          h2: "Administrative Law",
          image: "/images/derecho-administrativo.png",
          alt: "Administrative Law",
          p: `If you need a lawyer specialized in Administrative Law in Córdoba to address issues related to public administration,
              tenders, state liability, or challenges, our team offers comprehensive advice to ensure the protection of your rights and interests.`,
          subServices: [
            { h4: "Administrative Procedures", p: "Advice on procedures and cases before state agencies." },
            { h4: "Public Procurement", p: "Review and defense in tenders, competitions, and agreements with the government." },
            { h4: "State Liability", p: "Claims for damages arising from administrative actions." },
            { h4: "Disciplinary and Sanction Regime", p: "Defense of officials and individuals in disciplinary procedures." },
            { h4: "Administrative Appeals", p: "Challenges and reviews against unlawful government actions." },
            { h4: "Judicial Administrative Litigation", p: "Representation in judicial disputes against the state or public entities." }
          ]
        }
      ],
      cta: {
        h2: "Do you need legal advice in Córdoba?",
        p: `Our team of <strong>specialized lawyers</strong> is available to provide you with effective solutions tailored to your needs.
            <strong>Contact us today</strong> and let us help you protect your rights and achieve your goals.`
      }
    }
  };

  // Seleccionamos el contenido según el idioma
  const selectedContent = isSpanish ? content.es : content.en;

  return (
    <div>
      <Header />
      <FloatingContact />

      {/* Sección de Bienvenida */}
      <section className="welcome-section">
        <h1>{selectedContent.welcomeSection.h1}</h1>
        <p dangerouslySetInnerHTML={{ __html: selectedContent.welcomeSection.p }}></p>
      </section>

      {/* Sección de Introducción a los Servicios */}
      <section className="service-intro-section">
        <h2>{selectedContent.serviceIntroSection.h2}</h2>
        <p>{selectedContent.serviceIntroSection.p}</p>
        <div className="service-intro-grid">
          {selectedContent.serviceIntroSection.services.map((service, index) => (
            <div className="service-intro-item" key={index}>
              <h3>{service.title}</h3>
              <p dangerouslySetInnerHTML={{ __html: service.p }}></p>
              <a href={`#${service.id}`} className="btn-more-info">
                {service.moreInfo}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Navigation */}
      <nav className="quick-links">
        <p>{selectedContent.quickLinks.p}</p>
        <ul>
          {selectedContent.quickLinks.links.map((link, index) => (
            <li key={index}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Sección de Servicios Generales */}
      <section className="services">
        <h2>{selectedContent.generalServices.h2}</h2>
        <p dangerouslySetInnerHTML={{ __html: selectedContent.generalServices.p }}></p>
      </section>

      {/* Contenedor Principal de Servicios (Tarjetas) */}
      <section className="services">
        <div className="services-grid">
          {selectedContent.serviceItems.map((item, index) => (
            <div className="service-item" id={item.id} key={index}>
              <h2>{item.h2}</h2>
              <div className="service-image-wrapper">
                <img src={item.image} alt={item.alt} className="service-image" />
              </div>
              <p dangerouslySetInnerHTML={{ __html: item.p }}></p>
              <div className="sub-services-grid">
                {item.subServices.map((sub, idx) => (
                  <div className="sub-service-item" key={idx}>
                    <h4>{sub.h4}</h4>
                    <p>{sub.p}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="services">
        <div className="contact-cta">
          <h2>{selectedContent.cta.h2}</h2>
          <p dangerouslySetInnerHTML={{ __html: selectedContent.cta.p }}></p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

