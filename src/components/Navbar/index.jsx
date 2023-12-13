import Link from "next/link";
import InputSearch from "@/components/Navbar/InputSearch";
import UserAction from "@/components/Navbar/UserAction";
import MenuList from "@/components/Navbar/MenuList";

const Navbar= () =>{
    return (
        <header className="bg-color-accent relative top-0 left-0 w-full ">
            <div className="flex flex-row justify-between p-2 container mx-auto">
                <div className="flex flex-row p-2  justify-between gap-2">
                    <MenuList />
                    <Link className="" href="/">
                      <span className="font-bold text-3xl sm:text-3xl text-color-dark">
                        {/* Gaya font akan berubah berdasarkan ukuran layar */}
                          <span className="lg:hidden">FZ</span>
                        <span className="hidden lg:inline">FZAnime</span>
                      </span>
                     </Link>
                </div>
                <div className="flex flex-row p-2 w-full  justify-end  gap-2">
                    <InputSearch />
                    <UserAction />
                </div>
            </div>

        </header>

    )
}

export default Navbar