import prisma from "@/libs/prisma";

export async function POST(request) {
    try {
        const { mal_id, email, name , comment,user_image, title} = await request.json();
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

        const createComment = await prisma.comment.create({
            data: {
                mal_id: String(mal_id),
                user: {
                    connect: {
                        id: createUser.id,
                    },
                },
                comment: String(comment),
                title: String(title),
            },
        });
        return Response.json({ status: 200, success: true , type:"add" , message : "Successfully added to comment"});


    } catch (error) {
        console.error('Error:', error);
        return Response.json({ status: 500, error: "Internal Server Error" });
    }
}
