import { useEffect, useMemo, useState } from "react";

function UseMemoEx(){
    const [num, setNum] = useState(0);
    const [dark, setDark] = useState(false);

    // const doubleNumber = slowFunction(num);
    const doubleNumber = useMemo(() => {
        return slowFunction(num);
    },[num]);

    // const [doubleNumber, setDoubleNumber] = useState();
    // useEffect(() => {
    //     setDoubleNumber(slowFunction(num));
    // },[num])

    const template = 
        {
    backgroundColor: dark? "black" : "white",
    color: dark? "white": "black",
 };
    

    return(<>

        <input type="number" value={num} onChange={(e) => setNum(e.target.value)}/>
          <button onClick={() => setDark((curr) => !curr)}>Toggle Theme</button>
        <div style={template}>{doubleNumber}</div>
    </>);
}

export default UseMemoEx;

function slowFunction(num){
    for(let i =0; i<1000000000; i++){};
    return num*2;
}