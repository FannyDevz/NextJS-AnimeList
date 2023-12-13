import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {getAnimeResponse, getNestedAnimeResponse, shuffleArray} from "@/libs/api-libs";

const Home  = async () => {
    const topAnime = await getAnimeResponse({resource: "top/anime", query: "limit=8"})
    const recommendAnime = await getNestedAnimeResponse({resource: "recommendations/anime" , objectProperty: "entry"})
    const recommendAnimeRandom = shuffleArray(recommendAnime , 8);

    const seasonNow = await getAnimeResponse({resource: "seasons/now", query: "limit=8"})

    return (
        <div>
            <div className="container mx-auto mt-8 mb-4">
                <section>
                    <Header title="Rekomendasi" url="/rekomendasi"/>
                    <AnimeList api={recommendAnimeRandom}/>
                </section>
                <section>
                    <Header title="Popular" url="/populer" urlTitle="See More"/>
                    <AnimeList api={topAnime}/>
                </section>
                <section>
                    <Header title="Season Now" url="/season/now" urlTitle="See More"/>
                    <AnimeList api={seasonNow}/>
                </section>
            </div>
        </div>
    )
}

export default Home