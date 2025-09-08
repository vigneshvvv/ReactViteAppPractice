import { createContext, useState } from "react";
import VehicleModuleInfo from "./VehicleModuleInfo";

export const setContextmodel = createContext();

export default function Sample(){

    const [model, setModel] = useState({vehicleType: "SUV", region: "NA"});
    return(
        <setContextmodel.Provider value={{model}}>
        <VehicleModuleInfo/>
        </setContextmodel.Provider>
    
    );
}