import { easeIn, easeInOut, easeOut, motion } from "framer-motion";
import  './MotionAnime.css';
import { useState } from "react";
import springImg from "./springnew.webp"
import Angular from "./Angular.png"
import Warrior from "./warrior.png"
import sk from "./happy.png"


function MotionAnime(){
    const[rotate, setRotate] = useState(false);
    const[move, setMove] = useState(false);

    return (<>
       {/* <motion.h1
        initial= {{x: -200, opacity: 0}}
        animate = {{x: 100, opacity:1}}
        transition={{duration: 1, ease: easeOut}}       
        
        >
         Welcome to page of tech
        </motion.h1>
          <motion.h1
        initial= {{x: -200, opacity: 0}}
        animate = {{x: 100, opacity:1}}
        transition={{duration: 1, ease: easeOut}}       
        
        >
         I have very well experience in following technologies
        </motion.h1> */}
        <motion.div className="section"
        initial = "hidden"
        animate = "visible"
        variants={{
            hidden:{},
            visible:{
                transition:{
                    staggerChildren: 0.8,
                },
            },
        }}  
        >
            <motion.h1 className="h1motion"
            variants={{
                hidden:{x: -200, opacity:0},
                visible: {x: 0, opacity: 1, transition:{duration: 1, ease: easeOut}}

            }}
            >
                Warrior
            </motion.h1>
              <motion.div
    className="image-container"
    variants={{
      hidden: { x: 200, opacity: 0 },
      visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut" } },
    }} whileHover={{scale: 1.5}}
  >
    <img src={Warrior} alt="Warrior" className="warrior-img" />
  </motion.div>
            <motion.h2 className="h2motion"
            variants={{
                hidden: {y: -200, opacity: 0},
                visible: {y: 10, opacity: 1, transition: {duration: 1, ease: easeOut}}
            }}
            >
                let's forge your skills <br/>by training 
            </motion.h2>
        </motion.div>
    <div id="background">
     
        {/* <motion.div 
        animate={{rotate: rotate? 360 : 0}} 
        animate={{x: move? -200: 200}}
        transition={{delay: 1}} 
        transition={{type: "tween", duration: 1}}
        transition={{type: "spring", bounce: 0.8}}
        onClick={() => setRotate(!rotate)}
        whileHover={{scale: 2}}
        onClick={() => setMove(!move)}
        >
            
     </motion.div> */}
    {/* <motion.div initial = {{scale: 0}} animate={{x: 200, scale: 1}}></motion.div> */}
    <motion.div drag
    whileHover={{scale: 2}}
    
    >
        <img src={springImg} className="motion-img"/>
    </motion.div>
       <motion.div drag
    whileHover={{scale: 2}}
    
    >
        <img src={Angular} className="motion-img"/>
    </motion.div>
       <motion.div drag dragConstraints={{x:200}}
    whileHover={{scale: 2}}
    
    >
        <h1>React</h1>
    </motion.div>
       <motion.div drag
    whileHover={{scale: 2}}
    
    >
        <h1>GCP</h1>
    </motion.div>
       <motion.div drag
    whileHover={{scale: 2}}
    
    >
        <h1>CI/CD</h1>
    </motion.div>
    </div>
    
    </>);
}

export default MotionAnime;