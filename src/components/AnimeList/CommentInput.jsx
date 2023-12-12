"use client"
import React, {useEffect, useState} from "react";
import Image from "next/image";
import CommentList from "@/components/AnimeList/CommentList";
import {useRouter} from "next/navigation";


const CommentInput =  ({mal_id, email, name, title , user_image}) => {

    const [comment, setComment] = useState('')
    const [rating, setRating] = useState('')
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState('');
    const handleInput = (e) => {
        setComment(e.target.value)
    }
    const router = useRouter()
    const validateComment = () => {
        if (comment.trim() === '' || comment.length < 3) {
            setError('Comment must not be empty and should be at least 3 characters long.');
            return false;
        } else if (rating < 1 || rating === "") {
            setError('Please input a rating.');
            return false;
        }
        return true;
    };
    const handleSend = async (event) => {
        event.preventDefault();
        if (!validateComment()) {
            return;
        }

        try {
            const response = await fetch("/api/v1/comment", {
                method: "POST",
                body: JSON.stringify({
                    mal_id,
                    email,
                    name,
                    comment,
                    user_image,
                    title,
                    rating,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const collection = await response.json();

            if (collection.status === 200 && collection.type === "add") {
                setSuccess(true)
                setComment('')
                router.refresh()
            }else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }
    const handleRatingChange = (newRating) => {
        setRating(newRating);
    };
    const renderStars = () => {
        const maxRating = 5;
        const stars = [];

        for (let i = 1; i <= maxRating; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleRatingChange(i)}
                    className={`cursor-pointer text-2xl ${
                        i <= rating ? 'text-color-accent' : 'text-color-primary'
                    }`}
                >
                &#9733;
            </span>
            );
        }

        return stars;
    };

    return (
        <>

            <div className="flex flex-row px-8  ">
                <div className="flex flex-col w-full bg-color-darksecondary">
                    <div className="flex flex-row text-color-dark gap-4 py-2 px-4  mt-4">
                        <textarea className="ag-input-wrapper text-sm w-full rounded p-4 border-0 "  rows="8" onChange={handleInput} ></textarea>
                     </div>
                     <div className="flex flex-row text-color-dark gap-4 py-2 px-4 mb-4 justify-end">
                         <div className="mx-2 m-1 text-color-primary">Rating: {renderStars()}</div>
                        <button className="bg-color-accent p-2 rounded text-color-dark hover:bg-color-success transition-all  w-full lg:w-40 md:w-40 sm:w-40" onClick={handleSend}>Post Komentar</button>
                    </div>
                    <div className="flex flex-row text-color-dark gap-4 py-2 px-4 mb-4 w-full">
                    {success && <button className="bg-color-error py-2  px-4  w-full " onClick={() => setSuccess(false)}>Berhasil Post
                        Komentar</button>}
                    {error && <button className="bg-color-error py-2  px-4  w-full " onClick={() => setError('')}>{error}</button>}
                    </div>
                </div>
            </div>
        </>
    )
}
export default CommentInput