// src/components/Footer.jsx

import React from 'react';
import '../styles/footer.css'; // Importa el archivo CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>VGH Estudio Jurídico</h3>
        <ul>
          <li>Dirección: Independencia 387, Ciudad de Cordoba, Argentina</li>
          <li>Teléfono: +54 9 3437 55-6773</li>
          <li>Email: VGHEstudioJuridico@gmail.com</li>
          <li>Horario de Atención: Lunes a Viernes de 9:00 a 18:00</li>
        </ul>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
