import { useEffect, useState } from "react";

function setFetchAPI(url){

    const[productsNew, setProductsNew] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const callApi  = async () => {
            try{
            const response = await fetch(url);
            if(response !== null){
                   const resp = await response.json();
                   setProductsNew(resp.products); 
            }else{
                throw new error;
            }
        
        }catch(error){
            setError("Error occured")
        }

        }
        callApi();
    },[]);

    return {productsNew, error, isLoading}
}

export default setFetchAPI;

