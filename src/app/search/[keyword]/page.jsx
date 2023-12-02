import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page  =  async ({params}) => {
    const keyword = params.keyword;
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${keyword}`);
    const searchAnime = await response.json()

    return (
        <div>
            <section>
                <Header title={`Pencarian ${keyword} ... `}/>
                <AnimeList api={searchAnime}/>
            </section>
        </div>
    )
}

export default Page