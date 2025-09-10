import axios from "axios";
import { useEffect, useState } from "react";

function makeApiCall(url){

    const[productsNew, setProductsNew] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError]= useState("");
  useEffect(() => {
        const apiResponse = async () => {
            try{
            const response = await fetch(url);
            // const response = await axios.get(url);
            if(response !== null ){
                const result = await response.json();
                setProductsNew(result.products);
            }
            }catch(error){
                setError("Error occured");
            }

        }
          apiResponse();
  },[])


  return{productsNew, isLoading, error};

}

export default makeApiCall;