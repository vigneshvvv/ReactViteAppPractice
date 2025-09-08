import ChildComponent from "./ChildComponent";

export default function ParantComponent(){

    const data = {name: "VK", Designation: "SW"};

  
    const datafunction = (childValue) => {
        console.log("This data is from child", childValue);
    }
    return(
        <>
        <h1>This is Parant Component</h1>
        <ChildComponent data ={datafunction}/>
        </>
    );
}