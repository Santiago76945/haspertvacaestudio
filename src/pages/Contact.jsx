// src/pages/Contact.jsx

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
    event.target.reset();
  };

  return (
    <div>
      <Header />
      <section className="contact">
        <h2>Contacto</h2>
        {submitted ? (
          <div className="contact-confirmation">
            <img
              src="/images/message-sent.png" // Asegúrate de colocar la imagen en la ruta correcta
              alt="Mensaje Enviado"
              className="confirmation-image"
            />
            <p>
              Muchas gracias por comunicarse con nosotros, nos pondremos en contacto con usted a la brevedad.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit" className="contact-button">Enviar Mensaje</button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
