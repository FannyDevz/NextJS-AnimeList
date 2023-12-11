import Header from "@/components/Dashboard/Header";
import Link from "next/link";
import Image from "next/image";
import prisma from "@/libs/prisma";
import {authSession} from "@/libs/auth-libs";
import {getAnimeResponse} from "@/libs/api-libs";
import CommentList from "@/components/AnimeList/CommentList";

const Page = async () => {
    const user = await authSession();
    const userDb = await prisma.user.findFirst({
        where: {
            email: user?.email
        }
    })

    const getComment = await prisma.comment.findMany({
        where: {
            user_id: userDb?.id,
        },
        include: {
            user: true,
        },
    })
    return (
    <div className="container mx-auto mt-8 ">
        <header>
            <Header title={`My Comment`} />
        </header>
        <div className="flex flex-row px-8 pt-8 ">
            <div className="flex flex-col w-full bg-color-accent ">
                <div className="flex flex-row text-color-dark gap-4 justify-between">
                    <span className="py-2  px-4 ">List Komentar</span>
                </div>
            </div>
        </div>

        <CommentList getComment={getComment} email={user?.email} readmore/>
    </div>
    );
};
export default Page