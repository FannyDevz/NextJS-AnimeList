"use client"
import Image from 'next/image'
import Link from "next/link";
import {FileSearch} from "@phosphor-icons/react";
const AnimeList  = ({api}) => {
    return (
        <>
            {api.pagination?.items.total === 0  ? (
                <div className="min-h-screen max-w-xl  mx-auto flex justify-center items-center pb-32">
                    <div className="flex flex-col justify-center items-center gap-4">
                        <FileSearch className="text-color-accent " size={120} />
                        <h3 className="text-4xl font-bold text-color-accent "> NOT FOUND</h3>
                        <Link className="text-color-primary hover:text-color-accent transition-all underline" href="/">
                            Back
                        </Link>
                    </div>
                </div>
            ) : (
            <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-8 grid-cols-2 gap-4 px-4">
                {api.data?.map((anime) => (
                        <div key={anime.mal_id} className="shadow-xl bg-color-darksecondary relative hover:scale-105 transition-all duration-300 hover:opacity-75">
                            {anime.type ? (
                                <div className="font-bold lg:text-md md:text-md text-sm p-2  bg-color-accent text-color-dark absolute right-0 top-0 text-right opacity-90">
                                     <h3 className="text-xs font-semibold">{anime.type} </h3>
                                </div>
                            ) : null
                            }

                            <Link
                                href={`/anime/${anime.mal_id}`}
                                className="cursor-pointer text-color-primary hover:text-color-accent transition-all"
                                id={anime.mal_id}
                            >
                                <Image
                                    width={400}
                                    height={600}
                                    className="w-full max-h-64 object-cover"
                                    alt="..."
                                    src={anime.images.webp.image_url}
                                />
                                <h3 className="font-bold lg:text-md md:text-md text-sm p-4 text-center">
                                    {anime.title}
                                </h3>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </>

    )
}

export default AnimeList