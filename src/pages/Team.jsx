// src/pages/Team.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/team.css';

const Team = () => {
  return (
    <div>
      <Header />
      <section className="team">
        <h2>Nuestro Equipo</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="/ruta/a/imagen-profesional1.png" alt="Profesional 1" />
            <h3>Profesional 1</h3>
            <p>Especialista en Derecho Familiar y Laboral</p>
          </div>
          <div className="team-member">
            <img src="/ruta/a/imagen-profesional2.png" alt="Profesional 2" />
            <h3>Profesional 2</h3>
            <p>Especialista en Derecho Civil y Societario</p>
          </div>
          <div className="team-member">
            <img src="/ruta/a/imagen-profesional3.png" alt="Profesional 3" />
            <h3>Profesional 3</h3>
            <p>Especialista en Derecho Internacional Privado</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Team;
