import { useMemo, useState } from "react";

function UseMemo(){

 const [number, setNumber] = useState(0);
 const [dark, setDark] = useState(false);

//  const doubleNumber = slowFunction(number);
 const doubleNumber = useMemo(() => {
    return slowFunction(number)
 },[number])


 const theme = {
    backgroundColor: dark? "black" : "white",
    color: dark? "white": "black",
 };


    return(
        <>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}></input>
        <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
        <div style={theme}>{doubleNumber}</div>
        </>
    );
}

export default UseMemo;

 function slowFunction(number){
    for(let i =0; i<1000000000; i++){}
    return number*2;
 }
