import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page  =  async ({params}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime?limit=24`);
    const topAnime = await response.json()

    return (
        <div>
            <section>
                <Header title="Popular Anime Page"/>
                <AnimeList api={topAnime}/>
            </section>
        </div>
    )
}

export default Page