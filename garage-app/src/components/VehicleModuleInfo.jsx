import { useContext } from "react";
import { setContextmodel } from "./Sample";
import VehicleReleaseInfo from "./VehicleReleaseInfo";

export default function VehicleModuleInfo(){

    const {model} = useContext(setContextmodel);

    const dataValidator = (childInput) => {
        console.log("value from child component", childInput);
    }
    return(
        <>
        <h1>This is samle model with vehicle type of {model.vehicleType}</h1>
        <VehicleReleaseInfo callingChild={dataValidator}/>
        </>
    );
}