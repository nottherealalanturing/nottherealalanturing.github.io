import React from 'react';
import styles from './styles/ContactSection.module.css';

const ContactSection = () => (
  <section className={styles.contactSection} id="contact">
    <div className={styles.contactContainer}>
      <h2>Contact me</h2>
      <p>
        If you have an application you are interested in developing, a feature that you need built
        or a project that needs coding. I’d love to help with it
      </p>
      <form className="contact-form" action="https://formspree.io/f/xyyowwwj" method="POST">
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Your Name"
          maxLength="30"
          required
        />
        <input type="email" name="email" id="email" placeholder="example@email.com" required />
        <textarea
          name="message"
          id="message"
          cols="20"
          rows="10"
          placeholder="Write your message here"
          maxLength="500"
          required
        />
        <p className="validation-message" />
        <button type="submit">Get In Touch</button>
      </form>
    </div>
  </section>
);

export default ContactSection;
