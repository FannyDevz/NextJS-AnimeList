"use client"
import Link from "next/link";
import { ArrowLeft} from "@phosphor-icons/react";
import {useRouter} from "next/navigation";

const Header = ({title}) => {
    const router = useRouter();
    const handleBack = (event) => {
        event.preventDefault();
        router.back();
    };
    return (

    <div className="p-4 mt-4 flex justify-between items-center ">
        <button href="/users/dashboard" className="text-xl font-bold text-color-accent border-b-1 border-color-accent" onClick={handleBack}><ArrowLeft size={32}/></button>
        <div className="text-xl font-bold text-color-accent border-b-1 border-color-accent">{title}</div>
    </div>
    )
}

export default Header;