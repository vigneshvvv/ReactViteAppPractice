import { useSelector } from "react-redux";

function StoreFetch(){
    const fetchedData = useSelector((state) => state.customer);
    console.log(fetchedData);

    return(
        <>
        <h1>Store Fetch component</h1>
        </>
    );
}
export default StoreFetch;