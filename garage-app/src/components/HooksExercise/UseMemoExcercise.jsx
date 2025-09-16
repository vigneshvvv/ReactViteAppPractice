import { useEffect, useMemo, useState } from "react";

function UseMemoExcercise(){
    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);
   
    // const resultNumber = doubleThenumber(number);
    const resultNumber = useMemo(() => {
        return doubleThenumber(number);
    }, [number]);

    // const [resultNumber, setResultNUmber] = useState();
    // useEffect(() => {
    //     setResultNUmber(doubleThenumber(number));
    // }, [number])

    const theme = {
        backgroundColor: dark? "black" : "white",
        color: dark ? "white" : "dark"
       
    }

    return(
        <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>

        <button onClick={() => setDark((curr) => !curr)}>toggleTheme</button> 
        <div style={theme}>{resultNumber}</div>
    
        </>
    );
}

export default UseMemoExcercise;

function doubleThenumber(number){
    for(let i= 0;i<1000000000; i++){}
    return number*2;
}