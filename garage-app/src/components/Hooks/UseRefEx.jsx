import { current } from "@reduxjs/toolkit";
import { useRef, useState } from "react";

function UseRefEx(){
    const [num, setNum] = useState(0);
    function addNumber(){
        // setNum(num+1);
        number.current = number.current+1;
        console.log(number.current);
    }
   function updateNumber(){
    setNum(number.current);
   }

    const number = useRef(0);
    return(
        <>
        <h1>The present number was {number.current}</h1>
        <button onClick={addNumber}>Add</button>
        <button onClick={updateNumber}>update</button>

        </>
    );
}
export default UseRefEx;
