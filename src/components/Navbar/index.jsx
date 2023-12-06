import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";
import UserAction from "@/components/Navbar/UserAction";

const Navbar= () =>{
    return (
        <header className="bg-color-accent ">
            <div className="flex flex-col sm:flex-row justify-between p-2 container mx-auto">
                <div className="flex flex-row p-2 gap-2">
                    <Link className="" href="/">
                <span className="font-bold text-white text-2xl sm:text-3xl text-color-dark">
                    {/*<img src="/logo.png" className="w-8 h-8 sm:w-10 sm:h-10" alt="logo" />*/}
                    FZ
                </span>
                    </Link>
                    <InputSearch />
                </div>
                <div className="flex flex-row p-2 gap-2 justify-end">
                    <UserAction />
                </div>
            </div>

        </header>

    )
}

export default Navbar