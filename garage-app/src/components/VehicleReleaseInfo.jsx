export default function VehicleReleaseInfo({callingChild}){
        const sentToParant = () => {
        callingChild({releaseYear: "2025", validUpto: "2050"})
    }
 return(
    <>
    <h1>This is child info component </h1>
    <button onClick={sentToParant}>Send</button>
    </>
 );
}