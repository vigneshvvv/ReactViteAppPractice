export default function ChildComponent({sendData}){



    const sendValuetoParant = () => {
        sendData("This is data from child");
    }

    return(
        <>
        <h1>This is child component</h1>
        <button onClick={sendValuetoParant}>send</button>
        </>
    );
}