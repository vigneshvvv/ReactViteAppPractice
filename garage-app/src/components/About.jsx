import Career from "./Career";

function About(){

  
     const handlefromChild = (dataFromChild) => {
        console.log("The Data from child", dataFromChild)
    }


    const data= {name: "vignesh", role: "SW"};
    return(
        <>
        <h1>This is about page</h1>
        <Career data= {data} onDataSend= {handlefromChild}/>
        </>
    );
}

export default About;