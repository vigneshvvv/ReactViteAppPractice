import { useState } from 'react';
import './MotionSam.css';
import { delay, motion } from 'framer-motion';

function MotionSample(){
    const [rotate, setRotate] = useState(false);
    const [position, setPosition] = useState(false);
    return (
        <>
        <div id="background">
        <motion.div 
        animate={{x: position ? -200 : 200}}
        // transition={{delay: 1}}
        // transition={{type:"tween", duration: 3}}
        transition={{type:"spring", bounce: 0.5
        }}
        
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