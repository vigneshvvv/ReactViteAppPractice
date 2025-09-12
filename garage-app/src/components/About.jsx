import Career from "./Career";
import HooksDefault from "./HooksDefault";


import { useDispatch } from "react-redux";
import { addCustomer } from "./ReduxPractice/customerSlice";
import { addproduct, updateproduct } from "./ReduxPractice/productSlice";
import { addSpare,removeSpare,updateSpare } from "./ReduxPractice/SpareSlice";

function About(){

  
     const handlefromChild = (dataFromChild) => {
        console.log("The Data from child", dataFromChild)
    }

const despatch=  useDispatch();

    function sendToRedux(){
        // despatch(addCustomer("added"));
        despatch(addCustomer("new value injected"));
        despatch(addproduct({name: "water", price: "30"}));
        despatch(addproduct({name: "food", price: "30"}));
        despatch(addSpare({name: "tools", price: "100"}));
         despatch(addSpare({name: "spare", price: "500"}));
    }

    function updateRedux(){
          despatch(updateproduct({name: "water", price: "40"}));
    }

    function updatestore(){
        despatch(updateSpare({name: "tools", price: "200"}));
    }
      function removeStore(){
        despatch(removeSpare({name: "tools", price: "200"}));
    }
    const data= {name: "vignesh", role: "SW"};
    return(
        <>
        <h1>This is about page</h1>
        <Career data= {data} onDataSend= {handlefromChild}/>
        <button onClick={sendToRedux}>send to redux</button>
        <button onClick={updateRedux}>updateRedux</button>
        <button onClick={updatestore}>updateStore</button>
        <button onClick={removeStore}>removestore</button>
        {/* <HooksDefault/> */}
        </>
    );
}

export default About;