import { useState, useEffect } from "react";

export function useFilter(collection, searchString) {
    const [ data, setData ] = useState([]);
    useEffect(()=> {
       let stringincollection = collection.includes(searchString);
       setData(stringincollection);       
    },[collection, searchString]);
    return data;
}