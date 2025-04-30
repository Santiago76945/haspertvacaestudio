// src/components/Header.jsx

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/header.css'; // Importa el CSS específico del Header
import logo from '../assets/logo.png'; // Importar el nuevo logo

const Header = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Detectamos el idioma del navegador
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

  // Seleccionamos el contenido según el idioma
  const menuItems = isSpanish ? spanishMenu : englishMenu;
  const titleAlt = isSpanish
    ? 'Logo VGH Estudio Jurídico en Córdoba Capital'
    : 'VGH Legal Studio Logo in Córdoba Capital';

  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt={titleAlt} className="header-logo" />
      </Link>
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