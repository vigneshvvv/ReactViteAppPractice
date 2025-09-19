import ChildPlusComponent from "./ChildPlusComponent";

function ChildTestingComponent({data}){
 console.log(data);
   
    return (
        <>
        <h1>ChildTestingComponent woring fine</h1>
        <ChildPlusComponent data={data}/>
        </>
    );
}

export default ChildTestingComponent;