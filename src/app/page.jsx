import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {getAnimeResponse} from "@/libs/api-libs";

const Home  = async () => {
    const topAnime = await getAnimeResponse({resource: "top/anime", query: "limit=8"})
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