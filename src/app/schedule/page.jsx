"use client"
import AnimeList from "@/components/AnimeListInfinity";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Header from "@/components/AnimeListInfinity/Header";
import {useEffect, useState} from "react";
import {getAnimeResponse} from "@/libs/api-libs";
const Page  =  () => {
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [scheduleAnime, setScheduleAnime] = useState({ pagination: {}, data: [] });
    const maxPage = scheduleAnime.pagination?.last_visible_page;
    const fetchData = async () => {
        setLoading(true);
        const data = await getAnimeResponse({ resource: "schedules", query: `page=${page}` });
        if (page === 1) {
            setScheduleAnime(data)
        } else { await new Promise(resolve => setTimeout(resolve, 1000));
            setScheduleAnime((prevData) => ({
                pagination: data.pagination || {},
                data: [...prevData.data, ...(data.data || [])],
            }));
        }
        setLoading(false);
    };

    const handleScroll = () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        const clientHeight = document.documentElement.clientHeight || window.innerHeight;
        if ( scrollTop + clientHeight >= scrollHeight - 10) {
            setPage((prevPage) => prevPage + 1);
            window.removeEventListener('scroll', handleScroll);
        }
    };

    useEffect(() => {
        fetchData(page).then(() => {
            console.log(page, maxPage)
            window.addEventListener('scroll', handleScroll);
        });
    }, [page]);

    return (
        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Schedule Anime `} description={`List of schedule anime`}/>
            </header>
            <section>
                <Header title="Schedule Anime Page"    />
                <AnimeList api={scheduleAnime}/>
                {loading && page <= maxPage &&<div className="p-12 flex justify-center items-center flex-row w-full">
                    <div className="custom-loader" ></div>
                </div>}
            </section>
            {/*<footer>*/}
            {/*    /!*<Pagination page={page} setPage={setPage} lastPage = {seasonNowAnime.pagination?.last_visible_page} />*!/*/}
            {/*</footer>*/}
        </div>
    )
}

export default Page