import Career from "./Career";
import HooksDefault from "./HooksDefault";


import { useDispatch } from "react-redux";
import { addCustomer } from "./ReduxPractice/customerSlice";
import { addproduct, updateproduct } from "./ReduxPractice/productSlice";
import { addSpare,removeSpare,updateSpare } from "./ReduxPractice/SpareSlice";
import { addUserData, deleteUserData, updateUserData } from "./ReduxPractice/userDataSlice";

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
         despatch(addUserData({name: "vignesh", role: "SW"}));
         despatch(addUserData({name: "Kumar", role: "SW"}));
    }

    function updateRedux(){
          despatch(updateproduct({name: "water", price: "40"}));
    }
    function updateuserData(){
        despatch(updateUserData({name: "vignesh", role: "Testing"}));
    }

    function deleteUser(){
        despatch(deleteUserData({name: "vignesh", role: "Testing"}));
    }
    
    const data= {name: "vignesh", role: "SW"};

    return(
        <>
        <h1>This is about page</h1>
        <Career data= {data} onDataSend= {handlefromChild}/>
        <button onClick={sendToRedux}>send to redux</button>
        <button onClick={updateRedux}>updateRedux</button>
        <button onClick={updateuserData} > UpdateUserData</button>
        <button onClick={deleteUser}> deleteUser</button>
        {/* <HooksDefault/> */}
        </>
    );
}

export default About;