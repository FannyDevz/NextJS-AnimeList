"use client"
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import Header from "@/components/AnimeList/Header";
import {useEffect, useState} from "react";
import {getAnimeResponse} from "@/libs/api-libs";
const Page  =  () => {

    const [page , setPage] = useState(1)
    const [type , setType] = useState("")
    const [filter , setFilter] = useState("")
    const [rating , setRating] = useState("")
    const [sfw , setSfw] = useState(true)
    const [topAnime , setTopAnime] = useState([])

    const fetchData = async () => {
        const data = await getAnimeResponse({resource: "top/anime", query: `page=${page}${type ? `&type=${type}` : ''}${filter ? `&filter=${filter}` : ''}${rating ? `&rating=${rating}` : ''}${sfw ? `&sfw=true` : ''}`});
       console.log(data)
        setTopAnime(data);
    }

    useEffect(() => {
        fetchData()
    }, [page, type, filter, rating, sfw]);

    return (

        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Popular Anime `} description={`List of popular anime ${page !== 1 ? `#${page}` : ''}`}/>
            </header>
            <section>
                <div className="flex pb-4 justify-between items-center ">
                    <div className="hidden lg:inline"><Header title="Popular Anime Page"/></div>
                    <div className="flex flex-row pt-2 px-2 gap-0.5 justify-end">
                        <select className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded" onChange={(e) => setType(e.target.value)}>
                            <option value="">Type</option>
                            <option value="tv">TV</option>
                            <option value="movie">Movie</option>
                            <option value="ova">OVA</option>
                            <option value="special">Special</option>
                            <option value="ona">ONA</option>
                            <option value="music">Music</option>
                        </select>
                        <select className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded" onChange={(e) => setFilter(e.target.value)}>
                            <option value="">Filter</option>
                            <option value="airing">Airing</option>
                            <option value="upcoming">Upcoming</option>
                            <option value="bypopularity">Popularity</option>
                            <option value="favorite">Favorite</option>
                        </select>
                        <select className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded" onChange={(e) => setRating(e.target.value)}>
                            <option value="">Rating</option>
                            <option value="g">G</option>
                            <option value="pg">PG</option>
                            <option value="pg13">PG-13</option>
                            <option value="r17">R-17+</option>
                            <option value="r">R+</option>
                            <option value="rx">Rx</option>
                        </select>
                        <label className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded">
                            <span className="px-1">SFW</span>

                            <input
                                type="checkbox"
                                defaultChecked
                                className=" text-sm font-bold  bg-color-accent text-color-dark rounded "
                                onChange={(e) => setSfw(e.target.checked)}
                            />
                        </label>

                    </div>
                </div>
                <AnimeList api={topAnime}/>
            </section>
            <footer>
                <Pagination page={page} setPage={setPage} lastPage = {topAnime.pagination?.last_visible_page} />
            </footer>
        </div>
    )
}

export default Page