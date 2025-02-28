import { useEffect, useState } from "react";

export function Login() {  //login component
    useEffect(()=> {
        console.log("Login component mounted");
        return()=> {
            console.log("Login component unmounted");
        }
    },[]);
    return(
        <div>
            <h3>User Login</h3>
        </div>
    )
}

export function Register() {    //register component
    useEffect(()=> {
        console.log("Register component mounted");
        return()=> {
            console.log("Register component unmounted");
        }
    },[]);
    return(
        <div>
            <h3>Register User</h3>
        </div>
    )
}

export function HookDemo() {    //hookdemo hook
     const [ view, setView ] = useState();
     function handlelogin() {              //this is an example of conditional rendering
        setView(<Login />);                // and also writing multiple components in one file
     }
     function handleregister() {
        setView(<Register />);
     }
     return(
        <div>
            <h2>Shopping App</h2>
            <button onClick={handlelogin}>login</button>
            <button onClick={handleregister}>Register</button>
            <hr/>
            <div>
                {view}
            </div>
        </div>
     )
}