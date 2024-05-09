import React from 'react'
import './skills.css';
import BackendDevlp from '../../assets/BackendDevlp.png';
import DatabaseMange from '../../assets/DatabaseMange.png';
import websiteDesign from '../../assets/websiteDesign.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>As an aspiring software developer, I bring a strong passion for coding and a commitment to learning.I have a good knowledge of Java, C, C#, MySQL, SpringBoot, SpringMVC, Hibernate, JDBC, Data Structure,HTML, CSS, ReactJs and I'm Excited to apply my technical skills in a dynamic environment, contribute to impactful projects, and continue learning and growing.</span>

        <div className='skillBars'>
        <div className='skillBar'>
            <img src={BackendDevlp} alt='BackendDevlp' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Backend Development</h2>
                {/* <p>This is demo text, you can write your own content here</p> */}
            </div>
            </div>

            <div className='skillBar'>
            <img src={DatabaseMange} alt='DatabaseMange' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Database Management</h2>
                {/* <p>This is demo text, you can write your own content here</p> */}
            </div>
            </div>

            <div className='skillBar'>
            <img src={websiteDesign} alt='websiteDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Web Development</h2>
                {/* <p>This is demo text, you can write your own content here</p> */}
            </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
