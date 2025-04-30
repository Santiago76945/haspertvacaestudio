// src/components/Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; // Importa el CSS específico del Header

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Detectamos el idioma del navegador (por ejemplo, "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Definimos las opciones del menú para español e inglés
  const spanishMenu = [
    { path: '/', label: 'Inicio' },
    { path: '/services', label: 'Servicios' },
    { path: '/contact', label: 'Contacto' },
    { path: '/team', label: 'Equipo' },
  ];

  const englishMenu = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
    { path: '/team', label: 'Team' },
  ];

  // Definimos el título del header según el idioma
  const spanishTitle = 'VGH';
  const englishTitle = 'VGH';

  // Seleccionamos el contenido según el idioma detectado
  const menuItems = isSpanish ? spanishMenu : englishMenu;
  const title = isSpanish ? spanishTitle : englishTitle;

  return (
    <header className="header">
      <h1>
        <Link id="header-home" to="/">
          {title}
        </Link>
      </h1>
      <nav className="nav-menu">
        <ul>
          {menuItems
            // Filtra para no mostrar la opción de la página actual
            .filter(item => item.path !== currentPath)
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
