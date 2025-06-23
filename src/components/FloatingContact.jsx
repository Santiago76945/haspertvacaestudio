// src/components/FloatingContact.jsx

import '../styles/floatingContact.css'; // Asegúrate de que la ruta sea correcta

const FloatingContact = () => {
  // Detectamos el idioma del navegador (por ejemplo, "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Definimos el texto según el idioma
  const contactText = isSpanish ? "Contáctenos Ahora!" : "Contact Us Now!";

  return (
    <a 
      href="https://wa.me/5493437556773"  // ← número actualizado
      target="_blank" 
      rel="noopener noreferrer" 
      className="floating-contact"
    >
      {contactText}
    </a>
  );
};

export default FloatingContact;
