// src/pages/Contact.jsx

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/contact.css';

const Contact = () => {
  return (
    <div>
      <Header />
      <section className="contact">
        <h2>Contacto</h2>
        <form className="contact-form">
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
