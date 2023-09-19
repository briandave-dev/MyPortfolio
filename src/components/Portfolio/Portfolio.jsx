import React from 'react'
import './Portfolio.css'
import IMG1 from '../../assets/port1.PNG'
import IMG2 from '../../assets/port2.PNG'
import IMG3 from '../../assets/shopsy.PNG'
import { Reveal } from '../../assets/Reveal.tsx'
import We from '../../assets/WeSell.pdf'
import Do from '../../assets/DocCloud.pdf'
import Shop from '../../assets/Shopsy.pdf'


const Portfolio = () => {
  return (
    <section id='Portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <Reveal>
      <div className="container portfolio__container">
      
      <Reveal>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
        </div>
        <h3>WeSell</h3>

       <div className="portfolio__item-cta">
        <a href="https://github.com/briandave-dev" className='btn' target='blank'>Github</a>
        <a href={We} className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
      </article>
      </Reveal>

      <Reveal>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
        </div>
        <h3>Doc Cloud</h3>
       <div className="portfolio__item-cta">
        <a href="https://github.com/briandave-dev" className='btn' target='blank'>Github</a>
        <a href={Do} className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
      </article>
      </Reveal>

      <Reveal>
      <article className='portfolio__item'>
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
        </div>
        <h3>Shopsy</h3>
       <div className="portfolio__item-cta">
        <a href="https://github.com/briandave-dev" className='btn' target='blank'>Github</a>
        <a href={Shop} className='btn btn-primary' target='_blank'>Live Demo</a>
       </div>
      </article>
      </Reveal>

    </div>
      </Reveal>
    </section>
  )
}

export default Portfolio