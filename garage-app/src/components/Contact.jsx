import { createContext, useState } from "react";
import Details from "./Details";

export const SearchContext = createContext();
export default function Contact(){
    const dataBase = {product: "Java Course", duration: "12 hrs"};
    const [dataSet, setDataSet] = useState({product: "Java Course", duration: "12 hrs"});
    return(
        <>
        <SearchContext.Provider value= {dataSet}>
        <h1> Welcome to contact Page</h1>
        <Details dataBase ={dataBase}/>
        </SearchContext.Provider>
        </>
    );
}