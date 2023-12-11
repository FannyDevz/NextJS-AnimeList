"use client"
import {BookmarkSimple} from "@phosphor-icons/react";
import React from "react";

const CollectionButton = ({mal_id, email, name}) =>
{
    const [icon , setIcon] = React.useState(<BookmarkSimple size={20}/>);
    const handleCollection = async () => {
        event.preventDefault()
        const data = {
            mal_id,
            email,
            name
        }
        const response = await fetch("/api/v1/collection", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const collection = await response.json();
        if (collection.status === 200) {
            setIcon(<BookmarkSimple weight="fill" size={20}/>)
        } else {
            setIcon(<BookmarkSimple size={20}/>)
        }
    }
    return (
        <>
            <button onClick={handleCollection} className="ml-2 text-xs text-color-primary hover:text-color-accent transition-all underline">{icon}</button>
        </>
    )
}

export default CollectionButton;