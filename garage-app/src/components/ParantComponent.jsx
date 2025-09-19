import ChildComponent from "./ChildComponent";
import ChildTestingComponent from "./ChildTestingComponent";

export default function ParantComponent(){

    const data = {name: "VK", Designation: "SW"};


    const datafunction = (childValue) => {
        console.log("This data is from child", childValue);
    }

  

    return(
        <>
        <h1>This is Parant Component</h1>
        <ChildComponent sendData ={datafunction}/>
        <ChildTestingComponent data={data}/>
        </>
    );
}