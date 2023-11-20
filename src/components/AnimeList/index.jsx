import Image from 'next/image'
import Link from "next/link";

const AnimeList  = ({title, id, images}) => {
    return (
        <Link href={`/anime/${id}`} className="cursor-pointer">
            <div id={id}><Image width={400} height={600} className="w-full max-h-64 object-cover" alt="..." src={images}/>
                <h3 className="font-bold lg:text-md md:text-md text-sm p-4 text-center">{title}</h3>
            </div>
        </Link>
    )
}

export default AnimeList