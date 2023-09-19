import React from 'react'
import './Contact.css'
import {MdOutlineEmail}from 'react-icons/md'

import { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Reveal } from '../../assets/Reveal.tsx'
import {BsLinkedin} from 'react-icons/bs'

/*
import {RiMessengerLine} from 'react-icons/ri'
import {BsSendExclamationFill, BsWhatsapp} from 'react-icons/bs'

*/

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zk00x9t', 'template_2o6s77h', form.current, 'vz02tHquoF0AUbqMS')
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
    e.target.reset()
  }


  return (
    <section id='Contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2 >

      <Reveal>
      <div className="container contact__container">
        <div className="contact__options">
          <Reveal>
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>briandave.dev@gmail.com</h5>
            <a href="mailto:briandave.dev@gmail.com" target='_blank'>Send a message</a>
          </article>
          </Reveal>

          
          <Reveal>
          <article className="contact__option">
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>David Mountou</h5>
            <a href="https://www.linkedin.com/messaging/thread/2-Y2FiOWI4MTktYTBlYy00NmFkLWJiZGQtZDFkNTJjOWYwYjkyXzAxMA==/" target='_blank'>Send a message</a>
          </article>
          </Reveal>

        </div>
        
        <Reveal>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea type='text' name="msg" rows="7" placeholder='Type Message Here...' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
        </Reveal>
      </div>
      </Reveal>

    </section>
  )
}

export default Contact