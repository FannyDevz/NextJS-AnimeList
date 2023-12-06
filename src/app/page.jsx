import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {getAnimeResponse, getNestedAnimeResponse} from "@/libs/api-libs";

const Home  = async () => {
    const topAnime = await getAnimeResponse({resource: "top/anime", query: "limit=8"})

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    let recommendAnime = await getNestedAnimeResponse({resource: "recommendations/anime" , objectProperty: "entry"})
    shuffleArray(recommendAnime);
    recommendAnime = {data : recommendAnime.slice(0,8)}

    return (
        <div>
            <section>
                <Header title="Rekomendasi" url="/rekomendasi"/>
                <AnimeList api={recommendAnime}/>
            </section>
            <section>
                <Header title="Popular" url="/populer" urlTitle="Lihat Semua"/>
                <AnimeList api={topAnime}/>
            </section>
        </div>
    )
}

export default Home