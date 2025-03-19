import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contacto.css';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xn7vhm9', 'template_skae75q', form.current, {
        publicKey: '9pkN5JMayp3RkI8GX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='container'>
      <form ref={form} onSubmit={sendEmail}>
      <label className='labels'>Name</label><br />
      <input type="text" name="user_name" /><br />

      <label className='labels'>Email</label><br />
      <input type="email" name="user_email" /><br />

      <label className='labels'>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" />
    </form>
    </div>
    
  );
};

export default ContactUs
