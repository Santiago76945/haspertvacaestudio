// src/components/Reviews.jsx

import React, { useState, useEffect } from 'react';
import '../styles/reviews.css';

const Reviews = () => {
  // Detectamos el idioma del navegador (“es”, “en-US”, etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');
  // Texto de origen de las reseñas, ahora clickeable
  const originText = isSpanish
    ? 'Reseñas de Google Maps'
    : 'Google Maps Reviews';
  const originLink = 'https://www.google.com/search?sca_esv=aa908afd3e505705&rlz=1C1VDKB_enDE1046DE1046&biw=1707&bih=825&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzfcvmKjOUAuflKLmMJwutTsi8G89NT2MhvgN4z3dLac1-TR4xQeA-t-BiAWoq5liAQmzrLXvRInlDGdkMn94doKf0onGfQec42WX7EMM2bkOsM4Igw%3D%3D&q=VGH+Estudio+Jur%C3%ADdico+Reviews&sa=X&ved=2ahUKEwiwu8GomIKNAxWLqJUCHYclOkMQ0bkNegQIOxAE';

  // Array de reseñas con versión español / inglés
  const reviews = [
    {
      name: 'Nahuel Espiga',
      commentEs: 'Super responsables, me ayudaron a resolver de manera rápida unos inconvenientes que tenía.',
      commentEn: 'Super responsible, they helped me quickly resolve some issues I had.',
    },
    {
      name: 'Jeremías Fernández Mansilla',
      commentEs: 'Excelentes profesionales; resolvieron mis problemas muy rápido y fueron claros en toda la información. Recomiendo al 100%.',
      commentEn: 'Excellent professionals; they resolved my problems very quickly and were clear in all information. I recommend them 100%.',
    },
    {
      name: 'Nicolás Acosta',
      commentEs: 'Desde el primer contacto me sentí escuchado y acompañado. El equipo fue claro, eficiente y muy humano en todo momento. Me asesoraron con paciencia y resolvieron mi situación de forma rápida y efectiva.',
      commentEn: 'From the first contact I felt heard and supported. The team was clear, efficient, and very humane at all times. They advised me patiently and resolved my situation quickly and effectively.',
    },
    {
      name: 'Cecilia Bustos',
      commentEs: 'Excelente equipo de profesionales, me sentí acompañada en todo el proceso, dando respuestas certeras a mi caso en particular. Súper recomendable.',
      commentEn: 'Excellent team of professionals, I felt supported throughout the entire process, providing accurate answers to my particular case. Highly recommended.',
    },
    {
      name: 'Nicolás Cardone',
      commentEs: 'Gracias al estudio y a todo el equipo de abogados por el asesoramiento y acompañamiento que me brindaron en mi caso. Desde el principio, el seguimiento y todo el proceso fue súper satisfactorio con una calidez y profesionalismo que agradezco infinitamente.',
      commentEn: 'Thanks to the firm and the entire team of lawyers for the advice and support they provided in my case. From the beginning, the follow-up and the whole process was extremely satisfactory with a warmth and professionalism that I am infinitely grateful for.',
    },
    {
      name: 'Florencia Santillán',
      commentEs: 'El Lic. Santiago Haspert es muy profesional, y su amplio conocimiento y amabilidad me dio mucha confianza en llevar mi caso. ¡Muchas gracias!',
      commentEn: 'Lic. Santiago Haspert is very professional, and his extensive knowledge and kindness gave me great confidence in handling my case. Thank you very much!',
    },
    {
      name: 'Rodrigo Hillebrand',
      commentEs: 'Excelente atención y profesionalismo. El equipo del estudio se toma el tiempo de escuchar y explicar todo con claridad, brindando un acompañamiento humano y comprometido. Me sentí muy respaldado en todo momento. Súper recomendables para quienes buscan abogados confiables, eficaces y con calidez humana. ¡Gracias por todo!',
      commentEn: 'Excellent attention and professionalism. The firm’s team takes the time to listen and explain everything clearly, providing human and committed support. I felt very backed at all times. Highly recommended for those seeking reliable, effective lawyers with human warmth. Thank you for everything!',
    },
    {
      name: 'María José Domínguez Piaggio',
      commentEs: '¡Excelente! Profesionalismo y buena atención al cliente. Muy resolutivos.',
      commentEn: 'Excellent! Professionalism and good customer service. Very solution-oriented.',
    },
    {
      name: 'Eliana Latimori',
      commentEs: 'Un estudio muy profesional y dedicado con sus clientes. Despejaron todas mis dudas y me acompañaron en todo momento.',
      commentEn: 'A very professional firm dedicated to its clients. They cleared all my doubts and accompanied me at all times.',
    },
  ];

  // Estado: cuántas cards caben y desde qué índice mostramos
  const [visibleCount, setVisibleCount] = useState(3);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Ajustar cantidad de visibles al ancho de ventana
  const updateVisibleCount = () => {
    const w = window.innerWidth;
    if (w < 600) setVisibleCount(1);
    else if (w < 1024) setVisibleCount(2);
    else setVisibleCount(3);
    // Resetear al inicio al cambiar tamaño
    setCurrentIndex(0);
  };

  useEffect(() => {
    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, []);

  // Navegar hacia atrás
  const prev = () => {
    setCurrentIndex(idx => Math.max(idx - visibleCount, 0));
  };

  // Navegar hacia adelante
  const next = () => {
    setCurrentIndex(idx =>
      Math.min(idx + visibleCount, reviews.length - visibleCount)
    );
  };

  // Seleccionar únicamente las reseñas que caben
  const displayed = reviews.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="reviews-carousel">
      {/* Texto de origen, ahora enlace */}
      <p className="reviews-origin">
        <a
          href={originLink}
          className="reviews-origin-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          {originText}
        </a>
      </p>

      {/* Botón anterior */}
      <button
        className="review-button prev"
        onClick={prev}
        disabled={currentIndex === 0}
        aria-label="Anterior"
      >
        ‹
      </button>

      {/* Wrapper que muestra solo las cards renderizadas */}
      <div className="reviews-wrapper">
        {displayed.map((r, i) => {
          const comment = isSpanish ? r.commentEs : r.commentEn;
          return (
            <div
              key={currentIndex + i}
              className="review-card"
              style={{ flex: `0 0 ${100 / visibleCount}%` }}
            >
              <div className="review-stars">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className="star">
                    ★
                  </span>
                ))}
              </div>
              <p className="review-comment">{comment}</p>
              <p className="review-name">— {r.name}</p>
            </div>
          );
        })}
      </div>

      {/* Botón siguiente */}
      <button
        className="review-button next"
        onClick={next}
        disabled={currentIndex >= reviews.length - visibleCount}
        aria-label="Siguiente"
      >
        ›
      </button>
    </div>
  );
};

export default Reviews;
