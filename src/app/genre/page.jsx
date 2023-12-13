"use client"
import AnimeList from "@/components/AnimeListInfinity";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import {getAnimeResponse} from "@/libs/api-libs";
import Link from "next/link";
import Image from "next/image";
import AnimeSeasonList from "@/components/AnimeList/AnimeSeasonList";
const Page  = async () => {

    const genreList = await getAnimeResponse({ resource: "genres/anime" , query: `` });
    return (
        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Genres List`} description={`List of genre anime `}/>
            </header>
            <div>

                <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4  px-8 pt-4 mb-6">
                {genreList?.data?.map((genre) => (
                    <Link key={genre.mal_id} href={`${genre.url}`}>
                        <button className="flex flex-col bg-color-accent text-color-dark w-full hover:scale-105 rounded p-2 items-center justify-center" key={genre.mal_id}>
                            <span className="font-bold text-2xl">{genre.count}</span>
                            <span>{genre.name}</span>
                        </button>
                    </Link>

                ))}
                </div>
            </div>
            {/*<footer>*/}
            {/*    /!*<Pagination page={page} setPage={setPage} lastPage = {seasonNowAnime.pagination?.last_visible_page} />*!/*/}
            {/*</footer>*/}
        </div>
    )
}

export default Page