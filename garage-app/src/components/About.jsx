import Career from "./Career";
import HooksDefault from "./HooksDefault";

import { addCustomer } from "./ReduxPractice/customerSlice";
import { useDispatch } from "react-redux";

function About(){

  
     const handlefromChild = (dataFromChild) => {
        console.log("The Data from child", dataFromChild)
    }

    const despatch = useDispatch();

    function sendToRedux(){
        despatch(addCustomer("added"));
    }


    const data= {name: "vignesh", role: "SW"};
    return(
        <>
        <h1>This is about page</h1>
        <Career data= {data} onDataSend= {handlefromChild}/>
        <button onClick={sendToRedux}>send to redux</button>
        <HooksDefault/>
        </>
    );
}

export default About;