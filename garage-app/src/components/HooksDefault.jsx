import makeApiCall from "./makeApiCall";
import { useSelector } from "react-redux";


function HooksDefault(){

    const consumer = useSelector((state) => state.customer);
    console.log("The value consumed from redux is", consumer);

    const consumerNew = useSelector((state) => state.customer);
    console.log("consumed value was", consumerNew);
    const {productsNew} = makeApiCall("https://dummyjson.com/products");
    console.log(productsNew);
    return (
        <>


        </>
    );
}

export default HooksDefault;