"use client"
import { MagnifyingGlass } from "@phosphor-icons/react";
import {useRef} from "react";
import {useRouter} from "next/navigation";


const InputSearch = () => {
    const searchRef = useRef();
    const router = useRouter()

    const handleSearch = (event) => {
        if (event.key === 'Enter' || event.type === 'click') {
            event.preventDefault();
            const key = searchRef.current.value
            router.push(`/search/${key}`)
        }
    }

    return (
        <div className="relative">
            <input placeholder="search" className="w-full p-2 rounded" ref={searchRef}
                   onKeyDown={handleSearch}/>
            <button className="absolute top-2 end-2 " onClick={handleSearch} >
                <MagnifyingGlass  size={24} />
            </button>
        </div>
    )
}

export default InputSearch;