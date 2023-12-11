import prisma from "@/libs/prisma";
import {getAnimeResponse} from "@/libs/api-libs";
import Image from 'next/image'
import VideoPlayer from "@/components/Utilities/VideoPlayer";
import CollectionButton from "@/components/AnimeList/CollectionButton";
import Link from "next/link";
import React from "react";
import {authSession} from "@/libs/auth-libs";
import DetailAnimeTable from "@/components/AnimeList/DetailAnimeTable";
import CommentInput from "@/components/AnimeList/CommentInput";
import CommentList from "@/components/AnimeList/CommentList";

const Page = async ({params: {id}}) =>{


    const anime = await getAnimeResponse({resource: `anime/${id}`, query: ""})

    const user = await authSession()
    const userDb = await prisma.user.findFirst({
        where: {
            email: user?.email
        }
    })
    const collection = await prisma.collection.findFirst({
        where: {
            mal_id: String(anime.data.mal_id),
            user_id: userDb?.id
        }
    })

    const getComment = await prisma.comment.findMany({
        where: {
            mal_id: String(anime.data.mal_id),
        },
        include: {
            user: true,
        },
    })


    return (
        <>
            <div className="container mx-auto mt-8 mb-4">
            <div className="flex sm:flex-nowrap flex-wrap gap-2 text-color-primary px-8 pt-4 items-center mb-4">

                <div className="flex-col flex text-color-primary sm:flex-nowrap flex-wrap">
                    <a href={anime.data.url} target="_blank" className="text-xs text-color-primary hover:text-color-accent transition-all underline">My Anime List Page</a>
                    <h1 className="text-3xl font-semibold text-color-primary ">
                        {anime.data.title}
                        {
                            user ? (
                                collection ? (
                                    <CollectionButton status={true} mal_id={anime.data.mal_id}  title={anime.data?.title}   image={anime.data.images?.webp.image_url} type={anime.data?.type} email={user?.email} name={user?.name} user_image={user?.image}/>
                                ) : (
                                    <CollectionButton status={false} mal_id={anime.data.mal_id}  title={anime.data?.title}   image={anime.data.images?.webp.image_url} type={anime.data?.type} email={user?.email} name={user?.name} user_image={user?.image}/>
                                )
                            ) : null
                        }
                    </h1>
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
            <DetailAnimeTable anime={anime}/>
                <div className="flex flex-row px-8 pt-8 ">
                    <div className="flex flex-col w-full bg-color-accent ">
                        <div className="flex flex-row text-color-dark gap-4 justify-between">
                            <span className="py-2  px-4 ">Tinggalkan Komentar</span>
                            { !user && <span className="py-2 bg-color-error  px-4 ">Login Untuk Berkomentar</span>}
                        </div>
                    </div>
                </div>

                {user && <CommentInput mal_id={anime.data.mal_id} title={anime.data.title} name={user?.name} email={user?.email} user_image={user?.image}/>}
            <CommentList getComment={getComment}  email={user?.email}/>
        </div>
        <div>
            <VideoPlayer youtubeId={anime.data.trailer.youtube_id}/>
        </div>
    </>
    );
};
export default Page