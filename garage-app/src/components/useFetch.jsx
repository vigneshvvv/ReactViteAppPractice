import { useEffect, useState } from "react";
import axios from "axios";

function useFetch(url){

    const[productsNew, setProductsNew] = useState({});
    const[error,setError] = useState("");
    const[isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log("running useEffect");
      let response = async() => {
        try{
            let fetched = await fetch("https://dummyjson.com/products");
            //   let result = axios.get(url);
            if(fetched !== null){
            let result =  fetched.json();
            console.log(result);
            setProductsNew(result.products);
            }else{
                throw new error;
            }

        }catch(error){
            setError(error.message);
        }finally{
            setIsLoading(false)
        }

        }

    },[])

    return {productsNew, error, isLoading}
}

export default useFetch;