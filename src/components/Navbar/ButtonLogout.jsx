"use client"
import {SignOut} from "@phosphor-icons/react";

const ButtonLogin = () =>{
    return(
        <button className="bg-color-dark hover:bg-color-darksecondary transition-all text-color-primary font-bold py-3 px-4 rounded">
            <SignOut/>
        </button>
    )
}
export default ButtonLogin