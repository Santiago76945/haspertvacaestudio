// src/components/Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; // Importa el CSS específico del Header

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Definimos las opciones del menú
  const menuItems = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/contact', label: 'Contacto' },
    { path: '/team', label: 'Equipo' },
  ];

  return (
    <header className="header">
      <h1>
        <Link id="header-home" to="/">
          Haspert Vaca Estudio Jurídico
        </Link>
      </h1>
      <nav className="nav-menu">
        <ul>
          {menuItems
            .filter(item => item.path !== currentPath) // Filtra para no mostrar la opción de la página actual
            .map(item => (
              <li key={item.path}>
                <Link to={item.path}>{item.label}</Link>
              </li>
            ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
