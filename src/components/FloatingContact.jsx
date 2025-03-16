// src/components/FloatingContact.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/floatingContact.css'; // Asegúrate de que la ruta sea correcta

const FloatingContact = () => {
  return (
    <Link to="/contact" className="floating-contact">
      Contáctenos Ahora!
    </Link>
  );
};

export default FloatingContact;
