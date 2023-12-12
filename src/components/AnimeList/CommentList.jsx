"use client"
import Image from "next/image";
import Link from "next/link";
import React, {useState} from "react";
import {useRouter} from "next/navigation";

const CommentList = ({getComment, email, readmore}) =>{
    const router=useRouter()
    const [notif , setNotif] = useState('')
    const handleDelete = async (id) => {
        try {
            const response = await fetch("/api/v1/comment", {
                method: "DELETE",
                body: JSON.stringify({
                    id,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (response.status === 200) {
                router.refresh()
                setNotif('Komentar Berhasil di hapus')
            }
            else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        }
        catch (error) {
            console.error('Error:', error);
        }
    }
    const renderStars = ({rating}) => {
        const maxRating = 5;
        const stars = [];
        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span
                    key={i}
                    className={`text-2xl ${
                        i <= rating ? 'text-color-dark' : 'text-color-primary'
                    }`}
                >
                &#9733;
            </span>
            );
        }
        return stars;
    };

    return (
            <div className="flex flex-row px-8 mb-20">
                <div  className="flex flex-col w-full bg-color-darksecondary pb-10 ">
                    {getComment.length === 0 && (
                        <div className="flex flex-row text-color-dark gap-4 justify-center">
                            <span className="my-10 p-2  px-4  bg-color-error rounded">Komentar Kosong</span>
                        </div>
                    )}
                    {notif && <div className="flex flex-row text-color-dark justify-center w-full bg-color-error p-2 my-2" onClick={() => setNotif('')}>{notif}</div>}
                    {getComment.map((item) => {
                        return item.user.email !== email ? (
                            <div key={item.id} className="flex flex-row py-2 px-4 mt-4 gap-1 ">
                                <div className="w-20 p-2 border-0 rounded">
                                    <Image src={item.user.images} width={70} height={70} alt="" />
                                </div>
                                <div className="w-full p-4 border-0 bg-color-accent rounded">
                                    <div className="flex flex-col gap-0">
                                    <span className="text-md font-bold">{item.user.name}
                                        {readmore && ` - ${item.title}` }</span>
                                        <span className="text-xs">{item.comment}</span>
                                        <span className="text-xs">{renderStars({rating: item.rating})}</span>
                                        {readmore &&
                                            <Link className="mt-2" href={`/anime/${item.mal_id}`}>
                                                <button className="text-xs bg-color-dark hover:bg-color-darksecondary transition-all text-color-accent font-bold py-2 px-4 rounded">
                                                    Read More
                                                </button>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className="w-20 rounded p-4 border-0"></div>
                            </div>
                        ) : <div key={item.id} className="flex flex-row py-2 px-4 mt-4 gap-1">
                            <div className="w-20 rounded p-2 m-2 border-0">
                                <button className="text-xs bg-color-error hover:bg-color-darksecondary hover:text-color-error transition-all text-color-dark font-bold py-2 px-4 rounded" onClick={handleDelete.bind(this, item.id)}>
                                    Delete
                                </button>

                            </div>
                            <div className="w-full p-4 border-0 bg-color-accent rounded">
                                <div className="flex flex-col gap-0">
                                    <span className="text-md font-bold">{item.user.name}
                                        {readmore && ` - ${item.title}` }</span>
                                    <span className="text-sm">{item.comment}</span>
                                    <span className="text-xs text-color-primary">{renderStars({rating: item.rating})}</span>
                                    {readmore &&
                                        <Link className="mt-2" href={`/anime/${item.mal_id}`}>
                                            <button className="text-xs bg-color-dark hover:bg-color-darksecondary transition-all text-color-accent font-bold py-2 px-4 rounded">
                                                Read More
                                            </button>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div className="w-20 p-2 border-0 rounded">
                                <Image src={item.user.images} width={70} height={70} alt="" />
                            </div>
                        </div>;
                    })}
                </div>
            </div>

    )
}
export default CommentList