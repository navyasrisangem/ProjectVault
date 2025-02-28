import { createContext, useContext } from "react";

let userContext = createContext(null);
export function Level1() {
    let context = useContext(userContext);
    return(
        <div className="p-3 m-3 bg-warning">
            <h3>Level-1 / {context}</h3>
            <Level2 />
        </div>
    )
}
export function Level2() {
    let context = useContext(userContext);
    return(
        <div className="p-3 m-3 bg-info">
            <h3>Level-2 / {context}</h3>
        </div>
    )
}
export function ContextDemo() {
    return(
        <div className="bg-dark text-white m-3 p-2">            
            <userContext.Provider value={'Navya'}>      
            <h3>Parent Level</h3>
                <Level1 />          
            </userContext.Provider>
        </div>
    )
}
