import React, { useRef } from 'react'
import './contact.css'
import LinkdinIcon from '../../assets/linkedin.png'
import NokariIcon from '../../assets/nokari.png'
import GithubIcon from '../../assets/github.png'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_btne8bz', 'template_87hho88', form.current, 'Z0qqJw2L7NQyP_23H')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent!');
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contactPage'>
      <div id='contact'>
        <h1 className='contactPageTitle'>Contact Me</h1>
        <span className='contactDecs'>Please fill out the form below to discus any work opportunities</span>

        <form className='contactForm' ref={form} onSubmit={sendEmail}>
            <input type='text' className='name' placeholder='Your Name' name='your_name'/>
            <input type='email' className='email' placeholder='Your email' name='your_email'/>
            <textarea className='msg' name='message' rows='6' placeholder='Your message'></textarea>
            <button type='submit' value='Send' className='submitBtn'>Submit</button>
            <div className='links'>
              <a href="https://www.linkedin.com/in/dipesh-kadam-389a59259/" target="_blank" rel="noopener noreferrer">
            <img src={LinkdinIcon} alt='Linkdin' className='link'/>
            </a>
            <a href="https://drive.google.com/file/d/1etuddfmKWV8OzEm8zhkyFKliNyZ8ZIHN/view?usp=drivesdk" target="_blank" rel="noopener noreferrer">
            <img src={NokariIcon} alt='Nokari' className='link'/>
            </a>
            <a href="https://github.com/Dipskadam07" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt='Github' className='link'/>
            </a>
            
            </div>         
        </form>

      </div>
    </section>
  )
}


export default Contact
