import React from 'react';
import './intro.css';
import bg from '../../../assets/image.png';
import btnImg from '../../../assets/hireme.png';
import {Link} from 'react-scroll';



const Intro = () => {
  return (
    <section id='intro'>
        <div className='introContent'>
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm 
            <span className='introName'> Dipesh Kadam</span><br/>Full Stack Developer</span>
            <p className='introPara'>Recently completed Post-Graduate Diploma in Advance Computing from CDAC with deep knowledge in Programming Languages, Database and 
            Web Development.Before that i done my graduation in bachelor of engineering from Savitribai phule pune university</p>

            <Link to="contact" smooth={true} duration={500}> {/* Use Link from react-scroll */}
          <button className='btn'>
            <img src={btnImg} alt='Hire Me' className='btnImg' />
            Hire Me
          </button>
        </Link>  
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro;

