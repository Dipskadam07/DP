import React from 'react'
import './skills.css';
import BackendDevlp from '../../assets/BackendDevlp.png';
import DatabaseMange from '../../assets/DatabaseMange.png';
import websiteDesign from '../../assets/websiteDesign.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>
        <span className='skillDesc'>Recent graduate with a good command of Java, C, C#, MySQL,SpringBoot,SpringMVC,Hibernate,JDBC,Data Structure Website Designing and Development. Excited to apply my technical skills in a dynamic environment, contribute to impactful projects, and continue learning and growing.</span>

        <div className='skillBars'>
        <div className='skillBar'>
            <img src={BackendDevlp} alt='BackendDevlp' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Backend Development</h2>
                <p>This is demo text, you can write your own content here</p>
            </div>
            </div>

            <div className='skillBar'>
            <img src={DatabaseMange} alt='DatabaseMange' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Database Management</h2>
                <p>This is demo text, you can write your own content here</p>
            </div>
            </div>

            <div className='skillBar'>
            <img src={websiteDesign} alt='websiteDesign' className='skillBarImg'/>
            <div className='skillBarText'>
                <h2>Website Designing</h2>
                <p>This is demo text, you can write your own content here</p>
            </div>
            </div>
        </div>
      
    </section>
  )
}

export default Skills
