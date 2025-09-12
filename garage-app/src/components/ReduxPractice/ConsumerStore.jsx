import { useSelector } from "react-redux";

function CustomerStore(){
   const store= useSelector((state) => state.customer);
   console.log("The value from customerStore",store);
    return(
        <>
        <h1> The react Customer Store Working fine</h1>
        </>
    );
}

export default CustomerStore;