"use client"


import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Pagination from "@/components/Utilities/Pagination";
import Header from "@/components/AnimeList/Header";
import {useEffect, useState} from "react";
const Page  =  () => {

    const [page , setPage] = useState(1)
    const [topAnime , setTopAnime] = useState([])

    const fetchData = async () => {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?page=${page}`);
        const data = await response.json()
        setTopAnime(data);
    }

    useEffect(() => {
        fetchData()
    }, [page]);

    return (
        <div>
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