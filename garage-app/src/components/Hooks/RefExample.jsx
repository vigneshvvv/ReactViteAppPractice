import { useRef, useState } from "react";

function RefExample(){
    const[count, setCount]  = useState(0);

    const updateCount = () => {
        // setCount(count+1);
        
    //  refCount.current = refCount.current+1
    refCount.current++;
    console.log(refCount);    
}

const statechange = () => {
    setCount(count+1);
}

    const refCount = useRef(0);
    
    return(
        <>
        <h1> The count is {refCount.current}</h1>
        <button onClick={updateCount}>Count</button>
        <button onClick={statechange}>stateChange</button>
        <button onClick={() => {setCount(refCount.current)}}>update</button>
        </>
    );
}

export default RefExample;