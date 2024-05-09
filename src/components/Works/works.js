import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/portfolio-1.png'
import Portfolio2 from '../../assets/portfolio-2.png'
import Portfolio3 from '../../assets/portfolio-3.png'
import Portfolio4 from '../../assets/portfolio-4.png'
import Portfolio5 from '../../assets/portfolio-5.png'
import Portfolio6 from '../../assets/portfolio-6.png'

const Works = () => {
  return (
    <section id='works'>
        <h2 className='worksTitle'>My Project</h2>
        <span>Technology:- Java,Javascript, Spring boot, JPA, Thymeleaf, MySQL, HTML, CSS.</span>
        <span className='worksDesc'> Our website is a comprehensive platform offering up-to-date event information across 
categories like Conferences, Seminars, Webinars, and Recruitment. It's a hub for IT enthusiasts to explore 
the latest advancements. Additionally, our Talent Booking section: Elevate your event with singers, dancers, 
and more. Book exceptional performers to add a touch of magic to your function.</span>

        <div className='worksImgs'>
            <img src={Portfolio1} alt='' className='worksImg'/>
            <img src={Portfolio2} alt='' className='worksImg'/>
            {/* <img src={Portfolio3} alt='' className='worksImg'/>
            <img src={Portfolio4} alt='' className='worksImg'/> */}
            {/* <img src={Portfolio5} alt='' className='worksImg'/>
            <img src={Portfolio6} alt='' className='worksImg'/> */}
            
        </div>
        <button className='workBtn'>See More</button>
    
    </section>
  )
}

export default Works
