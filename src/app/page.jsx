import AnimeList from "@/components/AnimeList";
import SearchAnime from "@/components/SearchAnime";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
const Home  = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=12`);
    const anime = await response.json()
    return (
        <div>
            <div className="p-4 flex justify-between items-center">
                <div className="text-xl font-bold">Anime Populer</div>
                <Link href="/populer" className="text-md underline hover:text-blue-500 transition-all duration-300">
                    Lihat Semua
                </Link>
            </div>
            <div className="grid md:grid-cols-6  lg:grid-cols-6  sm:grid-cols-6  grid-cols-4 gap-4 px-4">
                {anime.data.map(data => {
                    return(
                        <div key={data.mal_id} className="shadow-xl">
                            <AnimeList title={data.title} id={data.mal_id} images={data.images.webp.image_url}/>
                        </div>
                    )
                })}
            </div>
            <div className="grid grid-cols-4 gap-4">
                <SearchAnime/>
            </div>
        </div>
    )
}

export default Home