import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch(url).then(response => response.json()).then(data => setData(data));
    },[url]);   //give url here becoz if url is changed it gets excecuted again, otherwise only one time.
    return data;    
}