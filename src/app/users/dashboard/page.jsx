import {authSession} from "@/libs/auth-libs";
import Image from "next/image";
import Link from "next/link";
const Dashboard = async () =>
{
    const user = await authSession();
    return (
        <>
            <div className="container mx-auto mt-8 ">
            <div className="flex flex-row items-center justify-center w-full mt-24 sm:mt-48 md:mt-48 lg:mt-48 xl:mt-48 xs:mt-24">
                <div className="flex flex-col justify-center w-full items-center">
                    <h3 className="text-3xl font-bold text-color-primary">Dashboard</h3>
                    <Image src={user?.image} alt="logo" className="m-4" width={100} height={100} />

                    <h3 className="text-xl font-bold text-color-primary ">{user?.name}</h3>
                    <h3 className="text-sm font-bold text-color-primary opacity-75">{user?.email}</h3>
                    <div className="flex flex-row gap-2 m-2">
                        <Link href="/users/dashboard/collection">
                            <button className="bg-color-accent hover:bg-color-accentsecondary transition-all text-color-dark font-bold  py-2 px-4 rounded">
                                My Collection
                            </button>
                        </Link>
                        <Link href="/users/dashboard/comment">
                            <button className="bg-color-accent hover:bg-color-accentsecondary transition-all text-color-dark font-bold  py-2 px-4 rounded">
                                My Comment
                            </button>
                        </Link>
                    </div>
                    <Link href="/api/auth/signout">
                        <button className="bg-color-accent hover:bg-color-error transition-all text-color-dark font-bold mb-4 py-2 px-4 rounded">
                            Sign out
                        </button>
                    </Link>
                </div>
            </div></div>
        </>
    )
}

export default Dashboard