// src/pages/Contact.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/contact.css';

const Contact = () => {
  
  const handleSubmit = (event) => {
    event.preventDefault(); // Evita que el formulario recargue la página
    
    // Muestra el mensaje de confirmación
    alert("¡Gracias por contactarnos! Nuestro equipo se pondrá en contacto a la brevedad.");
    
    // (Opcional) Restablecer el formulario después del envío
    event.target.reset();
  };

  return (
    <div>
      <Header />
      <section className="contact">
        <h2>Contacto</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
          
          <button type="submit" className="contact-button">Enviar Mensaje</button>
        </form>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
