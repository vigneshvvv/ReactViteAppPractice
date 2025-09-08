function Career({data, onDataSend}){

    const sendToparant = () => {
        onDataSend({ job: "software Engineer", experience: "5"});
    }
    return (
        <>
        <h1> I am {data.name} woring as {data.role} </h1>
        <button onClick={sendToparant}>Send</button>
        
        </>
    );
}
export default Career;  