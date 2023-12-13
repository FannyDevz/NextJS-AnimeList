"use client"
import AnimeList from "@/components/AnimeListInfinity";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Header from "@/components/AnimeListInfinity/Header";
import {useEffect, useState} from "react";
import {getAnimeResponse} from "@/libs/api-libs";
import Link from "next/link";
import Image from "next/image";
import AnimeSeasonList from "@/components/AnimeList/AnimeSeasonList";
const Page  = async () => {

    const seasonList = await getAnimeResponse({ resource: "seasons" });
    return (
        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Season Now Anime `} description={`List of seasonal anime `}/>
            </header>
            <div>
                {seasonList?.data?.map((season, index) => (
                    <div key={index}>
                        <div  className="flex flex-row px-8 pt-8 justify-end">
                            <div className="flex flex-col w-full bg-color-accent justify-end">
                                <div className="flex flex-row text-color-dark gap-4 justify-end">
                                    <span className="py-2 text-3xl font-bold px-4 ">{season.year}</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row gap-4 items-center justify-center px-8 pt-4 mb-6">
                        {season?.seasons?.map((data, index) => (
                            <AnimeSeasonList season={season} data={data} key={index} />
                        ))}
                        </div>
                    </div>
                ))}
            </div>
            {/*<footer>*/}
            {/*    /!*<Pagination page={page} setPage={setPage} lastPage = {seasonNowAnime.pagination?.last_visible_page} />*!/*/}
            {/*</footer>*/}
        </div>
    )
}

export default Page