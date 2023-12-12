import Link from "next/link";
import React from "react";

const DetailAnimeTable = ({anime}) =>{
    return (
        <>
            <div className="flex flex-row px-8 pt-8 ">
                <div className="flex flex-col w-full bg-color-accent ">
                    <div className="flex flex-row text-color-dark gap-4 py-2 px-4">
                        <h3 className="text-xl font-semibold ">Details</h3>
                    </div>
                </div>
            </div>
            <div className="flex flex-row px-8 ">
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
                            <span className="text-sm">Source:</span>
                            <span className="text-sm">{anime.data.source}</span>
                        </div>
                    ) : null}
                    {anime.data.status ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Status:</span>
                            <span className="text-sm">{anime.data.status}</span>
                        </div>
                    ) : null}
                    {anime.data.aired.string ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Airing:</span>
                            <span className="text-sm">{anime.data.aired.string}</span>
                        </div>
                    ) : null}
                    {anime.data.duration ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Duration:</span>
                            <span className="text-sm">{anime.data.duration}</span>
                        </div>
                    ) : null}
                    {anime.data.rating ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Rating:</span>
                            <span className="text-sm">{anime.data.rating}</span>
                        </div>
                    ) : null}
                    {anime.data.favorites ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Favorites:</span>
                            <span className="text-sm">{anime.data.favorites}</span>
                        </div>
                    ) : null}
                    {anime.data.broadcast.string ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Broadcast:</span>
                            <span className="text-sm">{anime.data.broadcast.string}</span>
                        </div>
                    ) : null}
                    {anime.data.producers ? (
                        <div className="flex flex-row text-color-primary gap-4 py-2 px-4 border-b-2 border-r-2 border-l-2">
                            <span className="text-sm">Producers:</span>
                            <span className="text-sm">{anime.data.producers.map((producer, index) => (  index === anime.data.producers.length - 1 ? producer.name : producer.name + " , "))}</span>
                        </div>
                    ) : null}
                </div>
            </div>
        </>
    )

}
export default DetailAnimeTable