import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import {getAnimeResponse} from "@/libs/api-libs";

const Page  =  async ({params}) => {
    const keyword = params.keyword;
    const searchAnime = await getAnimeResponse({resource: "anime", query: `q=${keyword}`})
    const decodedKeyword = decodeURI(keyword)

    return (
        <div>
            <section>
                <Header title={`Pencarian ${decodedKeyword}... `}/>
                <AnimeList api={searchAnime}/>
            </section>
        </div>
    )
}

export default Page