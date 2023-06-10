import React from 'react'
import './contact.css';
import {MdOutlineMail} from 'react-icons/md'
import  {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm('service_i8i5wbi', 'template_hongnj8', form.current, 'Sz6jjiBkC8-_8QVWH')
      .then((response) => {
        console.log('Email sent successfully:', response);
        // Additional logic if needed
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        // Additional error handling if needed
      });
  
    e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>munashetanda@gmail.com</h5>
            <a target='_blank' href="mailto:munashetandabantu@gmail.com">Send a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+27748185168</h5>
            <a target='_blank' href="https://api.whatsapp.com/send?phone+27748185168">Send a message</a>
          </article>
        </div>

        <form ref={form} onSubmit={ sendEmail}>
          <input type="text" name="name" placeholder='Your Name' required/>
          <input type="text" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact