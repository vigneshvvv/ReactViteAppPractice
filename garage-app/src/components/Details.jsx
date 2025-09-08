import { useContext } from "react";
import DetailsSec from "./DetailsSec";
import { SearchContext } from "./Contact";

export default function Details({dataBase}){
    const {dataSet} = useContext(SearchContext);
    return(
        <>
        <h1>Hi you are viewing the {dataSet.product} course with {dataBase.duration} duration</h1>
        <DetailsSec data= {dataBase}/>
        </>
    );
}