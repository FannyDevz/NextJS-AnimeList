import Link from "next/link";
import InputSearch from "@/components/Utilities/Navbar/InputSearch";

const Navbar= () =>{
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-4 gap-2">
                <Link className="font-bold text-white text-2xl" href="/" >Anime List</Link>
                <InputSearch/>
            </div>
        </header>
    )
}

export default Navbar