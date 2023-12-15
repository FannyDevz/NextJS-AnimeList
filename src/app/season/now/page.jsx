"use client"
import AnimeList from "@/components/AnimeListInfinity";
import HeaderMenu from "@/components/Utilities/HeaderMenu";
import Header from "@/components/AnimeListInfinity/Header";
import {useEffect, useState} from "react";
import {getAnimeResponse} from "@/libs/api-libs";
const Page  =  () => {
    const [page, setPage] = useState(1);

    const [filter, setFilter] = useState("");
    const [sfw, setSfw] = useState(true);
    const [loading, setLoading] = useState(false);
    const [seasonNowAnime, setSeasonNowAnime] = useState({ pagination: {}, data: [] });

    const filterOptions = [
        {
            name: "tv",
            value: "TV",
        }, {
            name: "movie",
            value: "Movie",
        }, {
            name: "ova",
            value: "OVA",
        }, {
            name: "special",
            value: "Special",
        }, {
            name: "ona",
            value: "ONA",
        }, {
            name: "music",
            value: "Music",
        }
    ];
    const maxPage = seasonNowAnime.pagination?.last_visible_page;
    const fetchDataSecond = async ( page , filter , sfw) => {
        setPage(0)
        setLoading(true);
        setSeasonNowAnime( await getAnimeResponse({ resource: "seasons/now",
            query: `page=${page}${filter ? `&filter=${filter}` : ''}${sfw ? `&sfw=true` : ''}` }))
        setLoading(false);
    };
    const fetchData = async ( page , filter , sfw) => {
        setLoading(true);
        const data = await getAnimeResponse({ resource: "seasons/now",
            query: `page=${page}${filter ? `&filter=${filter}` : ''}${sfw ? `&sfw=true` : ''}` });
        if (page === 1) {
            setSeasonNowAnime(data)
        } else {
            await new Promise(resolve => setTimeout(resolve, 1000));
            setSeasonNowAnime((prevData) => ({
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
        fetchDataSecond(1 , filter , sfw)
    }, [sfw, filter]);

    useEffect(() => {
        fetchData(page , filter , sfw).then(() => {
            window.addEventListener('scroll', handleScroll);
        });
    }, [page]);


    return (
        <div className="container mx-auto mt-8 mb-4">
            <header>
                <HeaderMenu title={`Season Now Anime `} description={`List of seasonal anime now`}/>
            </header>
            <section>
                <div className="flex pb-4 justify-between items-center ">
                    <div className="hidden lg:inline">  <Header title="Season Now Anime Page"/></div>
                    <div className="flex flex-row pt-2 px-2 gap-0.5 justify-end">
                        <select className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded" onChange={(e) => setFilter(e.target.value)}>
                            <option value="">Type</option>
                            {filterOptions.map((option) => (
                                <option key={option.name} value={option.name}> {option.value}</option>
                            ))}
                        </select>
                        <label className="py-2 text-sm font-bold px-2 bg-color-accent text-color-dark rounded">
                            <span className="px-1">SFW</span>

                            <input
                                type="checkbox"
                                className=" text-sm font-bold  bg-color-accent text-color-dark rounded "
                                onChange={(e) => setSfw(e.target.checked)}
                                defaultChecked
                            />
                        </label>

                    </div>
                </div>
                <AnimeList api={seasonNowAnime}/>
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