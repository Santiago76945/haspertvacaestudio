// src/pages/Contact.jsx

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvaokzq");
  const [submitted, setSubmitted] = useState(false);

  // Al cargar el componente, verificamos si ya se envió un mensaje hoy
  useEffect(() => {
    const storedDate = localStorage.getItem('contactSubmittedDate');
    const today = new Date().toISOString().split('T')[0]; // Formato YYYY-MM-DD
    if (storedDate === today) {
      setSubmitted(true);
    }
  }, []);

  // Cuando el envío es exitoso, guardamos la fecha actual y marcamos que se ha enviado
  useEffect(() => {
    if (state.succeeded) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('contactSubmittedDate', today);
      setSubmitted(true);
    }
  }, [state.succeeded]);

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
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError 
              prefix="Mensaje" 
              field="message"
              errors={state.errors}
            />

            <button type="submit" className="contact-button" disabled={state.submitting}>
              Enviar Mensaje
            </button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
