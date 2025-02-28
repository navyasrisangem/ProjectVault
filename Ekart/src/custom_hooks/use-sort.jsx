import { useState, useEffect } from "react";
export function useSort(collection, boolean = false) {
    const [data, setData] = useState([]);
    useEffect(()=> {
        let sortedArray = [...collection];  //copy collection to avoid the modification to original array
        sortedArray.sort();
        if(boolean) {
            sortedArray.reverse();
        }
        if(JSON.stringify(data) !== JSON.stringify(sortedArray)) { // this condition is used to avoid infinite loop
            setData(sortedArray);
        }        
    },[collection, boolean, data]);   //when the collection, boolean and data values are changed
    return data;
}