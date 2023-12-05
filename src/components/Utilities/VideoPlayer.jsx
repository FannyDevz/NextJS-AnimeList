"use client"
import Youtube from "react-youtube";
import {XCircle} from "@phosphor-icons/react";
import {useState} from "react";
const VideoPlayer = ({youtubeId}) => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClose = () => {
        setIsOpen((prev) => !prev);
    };
    const handleOpen = () => {
        setIsOpen((prev) => !prev);
    };

    const opts = {
        height: "240",
        width: "360",
        playerVars: {
            autoplay: 0,
        },
    };

    const Player = () => {
        return (
            <div className="fixed bottom-2 right-0">
                <button className="text-color-dark hover:text-color-darksecondary transition-all  bg-color-accent hover:bg-color-error px-3 mb-1  " onClick={handleClose}>X</button>
                <Youtube
                    videoId={youtubeId}
                    onReady={(e) => e.target.pauseVideo()}
                    opts={opts}
                    onError={(e) => console.log(e)}
                />
            </div>
        )
    }
    const Trailer  = () => {
        return (
            <div className="fixed bottom-2 right-0">
                <button className="text-color-dark hover:text-color-darksecondary transition-all  bg-color-accent hover:bg-color-accentsecondary  p-3 mb-1  " onClick={handleOpen}>Tonton Trailer</button>
            </div>
        )
    }

    return isOpen ? <Player/> : <Trailer/>
}

export default VideoPlayer