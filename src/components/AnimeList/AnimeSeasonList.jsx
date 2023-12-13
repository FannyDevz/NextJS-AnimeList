import Link from "next/link";
import Image from "next/image";

const AnimeSeasonList = ({season, data}) => {

    return(
        <div  className="shadow-xl bg-color-darksecondary relative hover:scale-105 transition-all duration-300 hover:opacity-75">
            <Link
                href={`/season/${season.year}/${data}`}
                className="cursor-pointer text-color-accent relative hover:text-color-accent transition-all"
            >
                <Image
                    width={900}
                    height={900}
                    quality={100}
                    className="w-full object-cover opacity-50 "
                    alt="..."
                    src={`/${data}.png`}
                />
                <h3 className="font-bold lg:text-lg md:text-md text-xs bottom-0 left-0 bg-color-darksecondary w-full bg-opacity-50 absolute py-4 text-center">
                    { data.toLocaleUpperCase()}
                </h3>
            </Link>
        </div>
    )
}

export default AnimeSeasonList