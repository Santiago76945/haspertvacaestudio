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

  // Detectamos el idioma del navegador (por ejemplo, "es", "en-US", etc.)
  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  // Contenido en español e inglés
  const content = {
    es: {
      title: "Contacto",
      confirmationAlt: "Mensaje Enviado",
      confirmationText: "Muchas gracias por comunicarse con nosotros, nos pondremos en contacto con usted a la brevedad.",
      labelName: "Nombre:",
      labelEmail: "Email:",
      labelMessage: "Mensaje:",
      buttonText: "Enviar Mensaje"
    },
    en: {
      title: "Contact",
      confirmationAlt: "Message Sent",
      confirmationText: "Thank you for getting in touch with us, we will contact you shortly.",
      labelName: "Name:",
      labelEmail: "Email:",
      labelMessage: "Message:",
      buttonText: "Send Message"
    }
  };

  // Seleccionamos el contenido según el idioma detectado
  const selectedContent = isSpanish ? content.es : content.en;

  return (
    <div>
      <Header />
      <section className="contact">
        <h2>{selectedContent.title}</h2>
        {submitted ? (
          <div className="contact-confirmation">
            <img
              src="/images/message-sent.png" // Asegúrate de colocar la imagen en la ruta correcta
              alt={selectedContent.confirmationAlt}
              className="confirmation-image"
            />
            <p>{selectedContent.confirmationText}</p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">{selectedContent.labelName}</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">{selectedContent.labelEmail}</label>
            <input type="email" id="email" name="email" required />
            <ValidationError 
              prefix={selectedContent.labelEmail} 
              field="email"
              errors={state.errors}
            />

            <label htmlFor="message">{selectedContent.labelMessage}</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError 
              prefix={selectedContent.labelMessage} 
              field="message"
              errors={state.errors}
            />

            <button type="submit" className="contact-button" disabled={state.submitting}>
              {selectedContent.buttonText}
            </button>
          </form>
        )}
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
