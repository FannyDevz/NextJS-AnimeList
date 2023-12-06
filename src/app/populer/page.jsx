"use client"
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import Header from "@/components/AnimeList/Header";
import {useEffect, useState} from "react";
import {getAnimeResponse} from "@/libs/api-libs";
const Page  =  () => {

    const [page , setPage] = useState(1)
    const [topAnime , setTopAnime] = useState([])

    const fetchData = async () => {
        const data = await getAnimeResponse({resource: "top/anime", query: `page=${page}`})
        setTopAnime(data);
    }

    useEffect(() => {
        fetchData().then(r => (console.log(r)))
    }, [page]);

    return (

        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Popular Anime `} description={`List of popular anime ${page !== 1 ? `#${page}` : ''}`}/>
            </header>
            <section>
                <Header title="Popular Anime Page"/>
                <AnimeList api={topAnime}/>
            </section>
            <footer>
                <Pagination page={page} setPage={setPage} lastPage = {topAnime.pagination?.last_visible_page} />
            </footer>
        </div>
    )
}

export default Page