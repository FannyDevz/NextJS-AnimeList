import AnimeList from "@/components/AnimeList";
import SearchAnime from "@/components/SearchAnime";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Link from "next/link";
import Header from "@/components/AnimeList/Header";
const Home  = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=8`);
    const topAnime = await response.json()

    return (
        <div>
            <section>
                <Header title="Popular" url="/populer" urlTitle="Lihat Semua"/>
                <AnimeList api={topAnime}/>
            </section>
        </div>
    )
}

export default Home