"use client"
import {SignIn} from "@phosphor-icons/react";

const ButtonLogin = () =>{
    return(
        <button className="bg-color-dark hover:bg-color-darksecondary transition-all text-color-primary font-bold py-3 px-4 rounded">
            <SignIn/>
        </button>
    )
}
export default ButtonLogin