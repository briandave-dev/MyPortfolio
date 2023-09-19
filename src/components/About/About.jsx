import React from 'react'
import './About.css'
import ME from '../../assets/p6.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import { Reveal } from '../../assets/Reveal.tsx'

const About = () => {
  return (
    <section id='About'>
      <div className='container about__text'>
      <Reveal><h5>Get To Know</h5></Reveal>
      </div>

      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <Reveal>
            <img src={ME} alt='About Image'>
            </img>
            </Reveal>
          </div>
        </div>
        <div className="about__content">
           <div className="about__cards">
            <Reveal>
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>2 Years Working</small>
            </article>
            </Reveal>

            <Reveal>
            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>2 Clients World Wide</small>
            </article>
            </Reveal>

            <Reveal>
            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>3 Completed Projects</small>
            </article>
            </Reveal>
           </div>

           <Reveal>
           <p>
            I am a young, dynamic software developer who loves learning 
            and solving problems with the use of frameworks and programming languages
            </p>

            <a href='#Contact' className='btn btn-primary'>Let's Talk</a>
           </Reveal>
        </div>
      </div>

    </section>
    
  )
}

export default About