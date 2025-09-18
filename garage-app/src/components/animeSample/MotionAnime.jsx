import { motion } from "framer-motion";
import  './MotionAnime.css';
import { useState } from "react";


function MotionAnime(){
    const[rotate, setRotate] = useState(false);
    const[move, setMove] = useState(false);

    return (<>
    <div id="background">
        <motion.div 
        // animate={{rotate: rotate? 360 : 0}} 
        // animate={{x: move? -200: 200}}
        // transition={{delay: 1}} 
        // transition={{type: "tween", duration: 1}}
        // transition={{type: "spring", bounce: 0.8}}
        // onClick={() => setRotate(!rotate)}
        whileHover={{scale: 2}}
        onClick={() => setMove(!move)}
        >
            
        </motion.div>
    {/* <motion.div initial = {{scale: 0}} animate={{x: 200, scale: 1}}></motion.div> */}
    </div>
    
    </>);
}

export default MotionAnime;