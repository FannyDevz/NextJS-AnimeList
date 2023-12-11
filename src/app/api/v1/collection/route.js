export  async function POST(request)
{
    const {mal_id, email, name} = await request.json();
    const createUser =  await prisma.user.create({
            data: {
                email,
                name
            }
        }
    )
    const createCollection = await prisma.collection.create({
        data: {
            mal_id,
            user: {
                connect: {
                    id: createUser.id,
                },
            },
        },
    });

    if (createCollection) {
        return Response.json({status :200 , data : createCollection, user : createUser});
    } else {
        return Response.json({ status :500 , error : "Internal Server Error"});
    }
}
