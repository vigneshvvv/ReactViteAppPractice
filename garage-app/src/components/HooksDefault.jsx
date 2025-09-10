import makeApiCall from "./makeApiCall";
import { useSelector } from "react-redux";

function HooksDefault(){

    const consumer = useSelector((state) => state.consumer);
    console.log("The value consumed from redux is", consumer);

    const {productsNew} = makeApiCall("https://dummyjson.com/products");
    console.log(productsNew);
    return (
        <>


        </>
    );
}

export default HooksDefault;