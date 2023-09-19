import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/bg5.png'
import HeaderSocials from './HeaderSocials'
import { Reveal } from '../../assets/Reveal.tsx'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <Reveal><h5>Hello, my name is</h5></Reveal>
        <Reveal><h1>Brian David</h1></Reveal>
        <Reveal><h3 className='text-light'>Software Developer</h3></Reveal>
        
        <Reveal><CTA /></Reveal>
        
        <Reveal><HeaderSocials /></Reveal>
    
        <Reveal>
          <div className='me'>
          <img src={ME} alt='me' />
          </div>
        </Reveal>
      
      <Reveal>
        <a href="#Contact" className='scroll__down'>Scroll Down</a>
      </Reveal>
    
     </div>
    </header>
  )
}

export default Header 