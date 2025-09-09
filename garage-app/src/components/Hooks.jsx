import useFetch from "./useFetch";

function Hooks(){

   

    let {productsNew} =  useFetch("https://dummyjson.com/products"); 
    console.log("products", productsNew);
    return(
        <>
        <button>click</button>
        </>
    );
}

export default Hooks;