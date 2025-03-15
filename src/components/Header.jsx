// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link id="header-home" to="/">Haspert Vaca Estudio Jurídico</Link>
      </h1>
      <nav className="nav-menu">
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/services">Servicios</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/team">Equipo</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
