
import {getAnimeResponse} from "@/libs/api-libs";
import Image from 'next/image'
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import Link from "next/link";
import React from "react";
import {authSession} from "@/libs/auth-libs";

const Page = async ({params: {id}}) =>{

    const anime = await getAnimeResponse({resource: `anime/${id}`, query: ""})
    const user = await authSession()

    return (
        <>
            <div className="container mx-auto mt-8 mb-4">
            <div className="flex sm:flex-nowrap flex-wrap gap-2 text-color-primary px-8 pt-4 items-center mb-4">

                <div className="flex-col flex text-color-primary sm:flex-nowrap flex-wrap">
                    <a href={anime.data.url} target="_blank" className="text-xs text-color-primary hover:text-color-accent transition-all underline">My Anime List Page</a>
                    <h1 className="text-3xl font-semibold text-color-primary ">
                        {anime.data.title}<CollectionButton  mal_id={anime.data.mal_id} email={user?.email} name={user?.name}/></h1>
                    <p className="text-lg text-color-primary opacity-50">
                        {anime.data.title_english}
                    </p>
                </div>

            </div>

            <div className="flex md:flex-nowrap flex-wrap gap-8 text-color-primary px-8 pt-4">

                    <Image
                        src={anime.data.images.jpg.image_url}
                        alt={anime.data.images.webp.image_url}
                        width={700}
                        height={1000}
                        quality={100}
                        className="rounded-lg object-cover"
                        priority
                    />
                <div className="flex-col flex gap-4 text-color-primary ">
                    <div className="flex-row flex gap-2 text-color-primary sm:flex-nowrap flex-wrap ">
                        {anime.data.year ? (
                            <div className=" flex-col flex rounded border bg-color-accent px-4 py-1 text-color-dark">
                                <h3 className="text-md font-semibold">{anime.data.year}</h3>
                                <p className="text-xs">{anime.data.season?.toUpperCase()}</p>
                            </div>
                        ) : null}
                        {anime.data.score ? (
                            <div className=" flex-col flex rounded border bg-color-accent px-4 py-1 text-color-dark">
                                <h3 className="text-md font-semibold">Score</h3>
                                <p className="text-xs">{anime.data.score}</p>
                            </div>
                        ) : null}

                        {anime.data.rank ? (
                        <div className=" flex-col flex rounded border bg-color-accent px-4 py-1 text-color-dark">
                            <h3 className="text-md font-semibold">Rank</h3>
                            <p className="text-xs">#{anime.data.rank}</p>
                        </div>
                        ) : null}
                        {anime.data.popularity ? (
                        <div className=" flex-col flex rounded border bg-color-accent px-4 py-1 text-color-dark">
                            <h3 className="text-md font-semibold">Popularity</h3>
                            <p className="text-xs">#{anime.data.popularity}</p>
                        </div>
                        ) : null}

                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-semibold">Synopsis</h3>
                        <p className="w-full text-justify text-sm">{anime.data.synopsis ? (anime.data.synopsis) : "..."}</p>
                    </div>
                    <div className="w-full">
                        <h3 className="text-lg font-semibold">Background</h3>
                        <p className="w-full text-justify text-sm">{anime.data.background ? (anime.data.background) : "..."}</p>
                    </div>

                </div>

            </div>
            <div className="flex flex-row px-8 pt-8 ">
                <div className="flex flex-col w-full bg-color-accent ">
                    <div className="flex flex-row text-color-dark gap-4 py-2 px-4">
                        <h3 className="text-xl font-semibold ">Details</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-8 mb-24">
                <div className="flex flex-col w-full bg-color-darksecondary ">
                    {anime.data.type ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Type :</span>
                        <span className="text-sm">{anime.data.type}</span>
                    </div>
                    ) : null}
                    {anime.data.episodes ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Episodes :</span>
                        <span className="text-sm">{anime.data.episodes}</span>
                    </div>
                    ) : null}
                    {anime.data.genres ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Genre :</span>
                        <span className="text-sm">{anime.data.genres.map((genre, index) => (  index === anime.data.genres.length - 1 ? (
                            <span key={index}>
                                <Link href={`${genre.type}/genre/${genre.name}`} className="text-color-primary hover:text-color-accent transition-all">{genre.name}</Link>
                            </span>
                        ) : (
                            <span key={index}>
                                <Link href={`${genre.type}/genre/${genre.name}`} className="text-color-primary hover:text-color-accent transition-all">{genre.name}</Link><> , </>
                            </span>
                        )))}
                        </span>
                    </div>
                    ) : null}
                    {anime.data.source ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Source :</span>
                        <span className="text-sm">{anime.data.source}</span>
                    </div>
                    ) : null}
                    {anime.data.status ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Status :</span>
                        <span className="text-sm">{anime.data.status}</span>
                    </div>
                    ) : null}
                    {anime.data.aired.string ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Airing :</span>
                        <span className="text-sm">{anime.data.aired.string}</span>
                    </div>
                    ) : null}
                    {anime.data.duration ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Duration :</span>
                        <span className="text-sm">{anime.data.duration}</span>
                    </div>
                    ) : null}
                    {anime.data.rating ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Rating :</span>
                        <span className="text-sm">{anime.data.rating}</span>
                    </div>
                    ) : null}
                    {anime.data.favorites ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Favorites :</span>
                        <span className="text-sm">{anime.data.favorites}</span>
                    </div>
                    ) : null}
                    {anime.data.broadcast.string ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Broadcast :</span>
                        <span className="text-sm">{anime.data.broadcast.string}</span>
                    </div>
                    ) : null}
                    {anime.data.producers ? (
                    <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                        <span className="text-sm">Producers :</span>
                        <span className="text-sm">{anime.data.producers.map((producer, index) => (  index === anime.data.producers.length - 1 ? producer.name : producer.name + " , "))}</span>
                    </div>
                    ) : null}
                </div>
            </div>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
    </>
    );
};
export default Page