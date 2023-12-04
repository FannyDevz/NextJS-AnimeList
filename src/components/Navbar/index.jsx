import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";

const Navbar= () =>{
    return (
        <header className="bg-color-accent">
            <div className="flex md:flex-row flex-col justify-between md:items-center p-2 gap-2">
                <Link href="/">
                    <span className="flex items-center font-bold text-white text-2xl text-color-dark gap-2">
                        <img src="/logo.png" className="w-7 h-7" alt="logo" />
                          FZAnime
                    </span>
                </Link>
                <InputSearch />
            </div>
        </header>
    )
}

export default Navbar