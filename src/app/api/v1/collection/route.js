import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
        const { mal_id, email, name ,title, image, type ,user_image} = await request.json();


        const existingUser = await prisma.user.findFirst({
            where: {
                email: email,
            },
        });

        let createUser;
        if (existingUser) {
            createUser = existingUser;
        } else {
            createUser = await prisma.user.create({
                data: {
                    email,
                    name,
                    images : String(user_image),
                },
            });
        }

        const existingCollection = await prisma.collection.findFirst({
            where: {
                mal_id: String(mal_id),
                user_id: createUser?.id
            },
        });

        if (existingCollection) {
            const removeCollection = await prisma.collection.delete({
                where: {
                    id: existingCollection.id,
                },
            });
            return Response.json({ status: 200, success: true , type:"remove", message : "Successfully removed from collection"});
        } else {
            const createCollection = await prisma.collection.create({
                data: {
                    mal_id: String(mal_id),
                    user: {
                        connect: {
                            id: createUser.id,
                        },
                    },
                    title: String(title),
                    images: String(image),
                    type: String(type),
                },
            });
            return Response.json({ status: 200, success: true , type:"add" , message : "Successfully added to collection"});
        }

    } catch (error) {
        console.error('Error:', error);
        return Response.json({ status: 500, error: "Internal Server Error" });
    }
}
