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
            <span className='introName'> Dipesh Kadam</span><br />Full Stack Developer</span>
            <p className='introPara'>Post-Graduate in Advance Computing (CDAC) with well-versed knowledge<br/> in Programming Languages, Database Administration and 
            Website Development.</p>

            <Link><button className='btn'><img src={btnImg} alt='Hire' className='btnImg'/>Hire Me</button></Link>
        </div>
        <img src={bg} alt='Profile' className='bg'/>
    </section>
  );
}

export default Intro;

