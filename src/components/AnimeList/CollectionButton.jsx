"use client"
import {BookmarkSimple} from "@phosphor-icons/react";
import React from "react";

const CollectionButton = ({mal_id, email, name, status, title, image, type,user_image }) =>
{
    const [icon , setIcon] = React.useState(status);
    const handleCollection = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch("/api/v1/collection", {
                method: "POST",
                body: JSON.stringify({
                    mal_id,
                    email,
                    name,
                    title,
                    image,
                    type,
                    user_image
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            const collection = await response.json();

            if (collection.status === 200 && collection.type === "remove") {
                setIcon(false);
            } else if (collection.status === 200 && collection.type === "add") {
                setIcon(true);
            }else {
                throw new Error(`Request failed with status: ${response.status}`);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <>
            <button onClick={handleCollection} className="ml-2 text-xs text-color-primary hover:text-color-accent transition-all underline">{icon ? <BookmarkSimple weight="fill" size={20}/> : <BookmarkSimple size={20}/>}</button>
        </>
    )
}

export default CollectionButton;