"use client"

import {List} from "@phosphor-icons/react";
import {useState} from "react";
import Link from "next/link";

const MenuList = () =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };

    return (
        <div className="relative inline-block ">
            <button
                onClick={toggleDropdown}
                className=" transition-all text-color-primary font-bold py-1 px-1 rounded"
            >
                <span><List className="text-color-dark" size={30}/></span>
            </button>

            {isDropdownOpen && (
                <div >
                    {/* Isi dropdown di sini */}
                    <ul className="absolute top-full left-0 w-40  rounded ">
                        <li className="p-2 bg-color-accent border my-0.5 border-color-darksecondary hover:bg-color-dark hover:text-color-accent hover:scale-105 rounded">
                            <Link href="/season" onClick={closeDropdown}>List Season</Link>
                        </li>
                        <li className="p-2 bg-color-accent border my-0.5 border-color-darksecondary hover:bg-color-dark hover:text-color-accent hover:scale-105 rounded">
                            <Link href="/genre"  onClick={closeDropdown}>List Genre</Link>
                        </li>
                       </ul>
                </div>
            )}

            {/* Event listener untuk menutup dropdown saat klik di luar dropdown */}
            {isDropdownOpen && (
                <div
                    className=" inset-0 h-full w-full cursor-pointer"
                    onClick={closeDropdown}
                />
            )}
        </div>
    );
};

export default MenuList