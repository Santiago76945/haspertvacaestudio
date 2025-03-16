// src/components/Footer.jsx

import React from 'react';
import '../styles/footer.css'; // Importa el archivo CSS exclusivo del footer

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Haspert Vaca Estudio Jurídico</h3>
        <p>Ciudad Córdoba Capital</p>
        <p>&copy; {new Date().getFullYear()} Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
