import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: JSX.Element;
}

export const Reveal = ({ children }: Props) => { 
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true })

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible");
            slideControls.start("visible");
        }
    }, [isInView])
    return (
        
        <div ref={ref}>
            <motion.div 
            variants={{
                hidden: {opacity: 0},
                visible: {opacity: 1},
            }} 
            initial='hidden'
            animate={mainControls}
            transition={{ duration: 1.25, delay:0.25}}
            >
                {children}
            </motion.div>
         
            
        </div>
    );
}