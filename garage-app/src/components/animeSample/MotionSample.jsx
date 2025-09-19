import { useState } from 'react';
import './MotionSam.css';
import { delay, easeOut, motion } from 'framer-motion';

function MotionSample(){
    const [rotate, setRotate] = useState(false);
    const [position, setPosition] = useState(false);
    return (
        <>
        <motion.div
        initial = "hide"
        animate = "show"
        variants={{
            hide: {},
            show: {
                transition:{
                    staggerChildren: 0.6
                }
            }
         } }       
        
        >
                <motion.h1 className='h1sample'
       variants={{
        hide: { x: -200, opacity:0 },
       show: { x : 0, opacity: 1, transition: {duration: 1, ease: easeOut}}}}
        >This is sample</motion.h1>
          <motion.h1 className='h1sample'
       variants = {{hide:{ x: -200, opacity:0 },
       show: { x : 0, opacity: 1, transition: {duration: 1, ease: easeOut}}}}
        >This is new sample</motion.h1>


       
            {/* <motion.h1 className='h1sample'
        initial = {{x: -200, opacity: 0}}
        animate = {{x: 0, opacity:1}}
        transition={{duration: 2, ease: easeOut}}
        >
            This is sample page
        </motion.h1> */}
           {/* <motion.h1 className='h1sample'
        initial = {{x: -200, opacity: 0}}
        animate = {{x: 0, opacity:1}}
        transition={{duration: 2, ease: easeOut}}
        >
            another sample page
        </motion.h1> */}

         </motion.div>
        <div id="background">
        <motion.div 
        animate={{x: position ? -200 : 200}}
        // transition={{delay: 1}}
        // transition={{type:"tween", duration: 3}}
        transition={{type:"spring", bounce: 0.5
        }}
        whileHover={{scale: 1.5}}
        onClick={() => setPosition(!position)}
        // animate={{rotate: rotate ? 360 : 0}}
        // onClick={() => setRotate(!rotate)}
        >

        </motion.div>
    
        {/* <div></div> */}
    </div>
    
        </>
    );
}
export default MotionSample;