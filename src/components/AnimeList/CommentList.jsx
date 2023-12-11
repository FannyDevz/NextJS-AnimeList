import Image from "next/image";
import Link from "next/link";

const CommentList = ({getComment, email, readmore}) =>{

    return (
            <div className="flex flex-row px-8 mb-20">
                <div  className="flex flex-col w-full bg-color-darksecondary pb-10 ">
                    {getComment.length === 0 && (
                        <div className="flex flex-row text-color-dark gap-4 justify-center">
                            <span className="my-10 p-2  px-4  bg-color-accent rounded">Komentar Kosong</span>
                        </div>
                    )}
                    {getComment.map((item) => {
                        return item.user.email !== email ? (
                            <div key={item.id} className="flex flex-row py-2 px-4 mt-4 gap-1 ">
                                <div className="w-20 p-2 border-0 rounded">
                                    <Image src={item.user.images} width={70} height={70} alt="" />
                                </div>
                                <div className="w-full p-4 border-0 bg-color-accent rounded">
                                    <div className="flex flex-col gap-0">
                                    <span className="text-md font-bold">{item.user.name}
                                        {readmore && ` - ${item.title}` }</span>
                                        <span className="text-xs">{item.comment}</span>
                                        {readmore &&
                                            <Link className="mt-4" href={`/anime/${item.mal_id}`}>
                                                <button className="text-xs bg-color-dark hover:bg-color-darksecondary transition-all text-color-accent font-bold py-2 px-4 rounded">
                                                    Read More
                                                </button>
                                            </Link>
                                        }
                                    </div>
                                </div>
                                <div className="w-20 rounded p-4 border-0"></div>
                            </div>
                        ) : <div key={item.id} className="flex flex-row py-2 px-4 mt-4 gap-1">
                            <div className="w-20 rounded p-4 border-0"></div>
                            <div className="w-full p-4 border-0 bg-color-accent rounded">
                                <div className="flex flex-col gap-0">
                                    <span className="text-md font-bold">{item.user.name}
                                        {readmore && ` - ${item.title}` }</span>
                                    <span className="text-sm">{item.comment}</span>
                                    {readmore &&
                                        <Link className="mt-4" href={`/anime/${item.mal_id}`}>
                                            <button className="text-xs bg-color-dark hover:bg-color-darksecondary transition-all text-color-accent font-bold py-2 px-4 rounded">
                                                Read More
                                            </button>
                                        </Link>
                                    }
                                </div>
                            </div>
                            <div className="w-20 p-2 border-0 rounded">
                                <Image src={item.user.images} width={70} height={70} alt="" />
                            </div>
                        </div>;
                    })}
                </div>
            </div>

    )
}
export default CommentList