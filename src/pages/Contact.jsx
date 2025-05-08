// src/pages/Contact.jsx

import React, { useEffect, useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FloatingContact from '../components/FloatingContact';
import '../styles/global.css';
import '../styles/contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("xgvaokzq");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedDate = localStorage.getItem('contactSubmittedDate');
    const today = new Date().toISOString().split('T')[0];
    if (storedDate === today) setSubmitted(true);
  }, []);

  useEffect(() => {
    if (state.succeeded) {
      const today = new Date().toISOString().split('T')[0];
      localStorage.setItem('contactSubmittedDate', today);
      setSubmitted(true);
    }
  }, [state.succeeded]);

  const lang = navigator.language || navigator.userLanguage;
  const isSpanish = lang.toLowerCase().startsWith('es');

  const content = {
    es: {
      title: "Contacto",
      confirmationAlt: "Mensaje Enviado",
      confirmationText:
        "Muchas gracias por comunicarse con nosotros, nos pondremos en contacto con usted a la brevedad.",
      labelName: "Nombre:",
      labelEmail: "Email:",
      labelMessage: "Mensaje:",
      buttonText: "Enviar Mensaje"
    },
    en: {
      title: "Contact",
      confirmationAlt: "Message Sent",
      confirmationText:
        "Thank you for getting in touch with us, we will contact you shortly.",
      labelName: "Name:",
      labelEmail: "Email:",
      labelMessage: "Message:",
      buttonText: "Send Message"
    }
  }[isSpanish ? 'es' : 'en'];

  return (
    <div className="services-page">
      <Header />
      <FloatingContact />

      <section>
        <h1 className="section-title">{content.title}</h1>

        {submitted ? (
          <div className="contact-confirmation">
            <img
              src="/images/message-sent.png"
              alt={content.confirmationAlt}
              className="confirmation-image"
            />
            <p>{content.confirmationText}</p>
          </div>
        ) : (
          <>
            <div className="card">
              <div className="card-inner">
                <div className="card-content">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">{content.labelName}</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="email">{content.labelEmail}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                    />
                    <ValidationError
                      prefix={content.labelEmail}
                      field="email"
                      errors={state.errors}
                    />

                    <label htmlFor="message">{content.labelMessage}</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      required
                    ></textarea>
                    <ValidationError
                      prefix={content.labelMessage}
                      field="message"
                      errors={state.errors}
                    />

                    <button
                      type="submit"
                      className="btn"
                      disabled={state.submitting}
                    >
                      {content.buttonText}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="tel:+543517432323" className="btn">
                {isSpanish ? 'Llamanos sin compromiso' : 'Call us'}
              </a>
              <a
                href="https://wa.me/543517432323"
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                {isSpanish ? 'Consultanos por WhatsApp' : 'WhatsApp us'}
              </a>
            </div>
          </>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
