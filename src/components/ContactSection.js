import React, { useState, useRef, useEffect } from 'react';
import styles from './styles/ContactSection.module.css';

const ContactSection = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const validationMessage = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email } = form;
    const errorText =
      'Your email address should not contain upper case letters or invalid characters';
    if (/[A-Z]/.test(email)) {
      validationMessage.current.innerHTML = errorText;
      validationMessage.current.classList.add('shake');
    }
    localStorage.removeItem('form');
  };

  const handlePersist = () => {
    const { name, email, message } = form;
    const formdata = {
      name,
      email,
      message,
    };
    localStorage.setItem('form', JSON.stringify(formdata));
  };

  const handleInput = (event) => {
    const { value } = event.target;
    const { name } = event.target;
    setForm((prevState) => ({ ...prevState, [name]: value }));
    handlePersist();
  };

  useEffect(() => {
    const formObj = JSON.parse(localStorage.getItem('form'));
    if (formObj) setForm({ name: formObj.name, email: formObj.email, message: formObj.message });
  }, []);

  return (
    <section className={styles.contactSection} id="contact">
      <div className={styles.contactContainer}>
        <h2>Contact me</h2>
        <p>
          If you have an application you are interested in developing, a feature that you need built
          or a project that needs coding. I’d love to help with it
        </p>
        <form
          className="contact-form"
          action="https://formspree.io/f/xyyowwwj"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="name"
            id="fullname"
            placeholder="Your Name"
            maxLength="30"
            required
            value={form.name}
            onChange={(e) => handleInput(e)}
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="example@email.com"
            required
            value={form.email}
            onChange={(e) => handleInput(e)}
          />
          <textarea
            name="message"
            id="message"
            cols="20"
            rows="10"
            placeholder="Write your message here"
            maxLength="500"
            required
            value={form.message}
            onChange={(e) => handleInput(e)}
          />
          <p className="validation-message" ref={validationMessage} />
          <button type="submit">Get In Touch</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
