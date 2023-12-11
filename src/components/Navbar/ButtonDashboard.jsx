"use client"

import {House} from "@phosphor-icons/react";

const ButtonDashboard = () =>{
    return(
        <button className="bg-color-dark hover:bg-color-darksecondary transition-all text-color-primary font-bold py-3 px-4 rounded">
            <House/>
        </button>
    )
}
export default ButtonDashboard