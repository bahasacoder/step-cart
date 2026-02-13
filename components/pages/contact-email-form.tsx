// ContactForm.jsx
'use client';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactEmailForm = () => {
  const form = useRef(null);

  const sendEmail = (e:any) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        alert('Email sent successfully!');
      },
      (error) => {
        console.log('FAILED...', error.text);
        alert('Failed to send email. Please try again.');
      }
    );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactEmailForm;
