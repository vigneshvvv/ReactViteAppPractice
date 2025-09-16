import { useRef, useState } from "react";

function UseReference(){

    const[number, setNumber] = useState(0);

    function incrementNumber(){
        increment.current = increment.current+1;
        console.log(increment.current);
        // setNumber(number+1);
    }

    function updateNumber(){
        setNumber(increment.current);
    }

    const increment = useRef(0);


    return(
        <>
        <h1>The number output was {increment.current}</h1>
        <button onClick={incrementNumber}>Add</button>
        <button onClick={updateNumber}>Update</button>
        </>
    );
}

export default UseReference;