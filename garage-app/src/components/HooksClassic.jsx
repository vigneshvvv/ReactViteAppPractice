import setFetchAPI from "./setFetchAPI";

function HooksClassic(){

    const value = setFetchAPI("https://dummyjson.com/products");
    console.log("The value from the fethapi is", value);
    return(
        <>
        </>
    );
}
export default HooksClassic;