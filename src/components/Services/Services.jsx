import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'
import { Reveal } from '../../assets/Reveal.tsx'

const Services = () => {
  return (
  
    <section id='Services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <Reveal>
      <div className='container services__container'>
        <Reveal>
        <article className='service'>
          <div className="service__head">
            <h3>Web Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mockup Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Web App Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Showcase Website Developement</p>
            </li>
            
          </ul>
        </article>
        </Reveal>
        <Reveal>
        <article className='service'>
          <div className="service__head">
            <h3>Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Logo</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Visit card</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Flyers</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>UI/UX Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Professional CV</p>
            </li>         
            
                          
          </ul>
        </article>
        </Reveal>
        <Reveal>
        <article className='service'>
          <div className="service__head">
            <h3>Mobile App Developement</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Mockup Design</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Frontend Developement</p>
            </li>
            <li>
              <BiCheck className='service__list-icon'/>
              <p>Backend Developement</p>
            </li>
                     
          </ul>
        </article>
        </Reveal>

      </div>
      </Reveal>
    </section>
  )
}

export default Services