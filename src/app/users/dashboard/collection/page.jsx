import Header from "@/components/Dashboard/Header";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/libs/prisma";
import {authSession} from "@/libs/auth-libs";
import {getAnimeResponse} from "@/libs/api-libs";

const Page = async () => {
    const user = await authSession();
    const userDb = await prisma.user.findFirst({
        where: {
            email: user?.email
        }
    })
    const collection = await prisma.collection.findMany({
        where: {
            user_id: userDb?.id
        }
    })

    return (
    <div className="container mx-auto mt-8 ">
        <header>
            <Header title={`My Collection`} />
        </header>
        {collection.length === 0 && (
            <div className="flex flex-row px-8 mb-20 mt-20">
                <div  className="flex flex-col w-full  pb-10 ">
                    <div className="flex flex-row text-color-dark gap-4 justify-center">
                        <span className="my-10 p-2  px-4  bg-color-error rounded">Collection Kosong</span>
                    </div>
                </div>
            </div>
        )}
        <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 grid-cols-2 gap-4 px-4">

            {collection.map ((anime) =>  (
                <div key={anime.mal_id} className="shadow-xl bg-color-darksecondary relative hover:scale-105 transition-all duration-300 hover:opacity-75">
                    <div className="font-bold lg:text-md md:text-md text-sm p-2 bg-color-accent text-color-dark absolute right-0 top-0 text-right opacity-90">
                        <h3 className="text-xs font-semibold">{anime.type}</h3>
                    </div>
                    <Link
                        href={`/anime/${anime.mal_id}`}
                        className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
                    >
                        <Image
                            width={400}
                            height={600}
                            className="w-full max-h-64 object-cover"
                            src={anime.images}
                            alt={anime.images}
                        />
                        <h3 className="font-bold lg:text-md md:text-md text-sm p-4 text-center">{anime.title}
                        </h3>
                    </Link>
                </div>
                )
            )}
        </div>
    </div>
    );
};
export default Page