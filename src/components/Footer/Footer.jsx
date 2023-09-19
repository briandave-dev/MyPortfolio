import React from 'react'
import './Footer.css' 
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import { Reveal } from '../../assets/Reveal.tsx'

const Footer = () => {
  return (
    <footer>
      <Reveal>
      <a href="#" className='footer__logo'>DAVE_DEV</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#About">About</a></li>
        <li><a href="#Experience">Experience</a></li>
        <li><a href="#Services">Services</a></li>
        <li><a href="#Portfolio">Portfolio</a></li>
        <li><a href="#Contact">Contact</a></li>
      </ul>
      </Reveal>
      

      

      <Reveal>
        <div className="footer__copyright">
          <small>
            &copy; DAVE_DEV. All rights reserved
          </small>
        </div>
      </Reveal>
    </footer>
  )
}

export default Footer