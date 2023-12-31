
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
    width?: 'fit-content' | "100%"
}

export const Reveal = ({ children, width = 'fit-content'}: Props) => {
    
    return (
        <div style={{ position: 'relative', width, overflow: 'hidden'}}>
            <motion.div 
            variants={{
                hidden: {opacity: 0, y:75},
                visible: {opacity: 1, y:0},
            }} 
            initial='hidden'
            animate='visible'
            >
                {children}
            </motion.div>
        </div>
    );
}


<motion.div 
            variants={{
                hidden: {left:0},
                visible: {left:'100%'},
            }} 
            initial='hidden'
            animate={slideControls}
            transition={{ duration:0.5, ease: 'easeIn'}}

            style={{
                position: 'absolute',
                top: 4,
                bottom: 4,
                left: 0,
                right: 0,
                background: 'var(--color-primary)',
                zIndex: 20
            }}
            
                
            />
            <Reveal>
        <div className="footer__socials">
          <a href="https://facebook.com">
            <FaFacebook/>
          </a>
          <a href="https://instagram.com">
            <FiInstagram/>
          </a>
          <a href="https://twitter.com">
            <IoLogoTwitter/>
          </a>
        </div>
      </Reveal>