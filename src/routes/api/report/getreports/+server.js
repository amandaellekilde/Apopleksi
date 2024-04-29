import { PrismaClient } from '@prisma/client';

export async function GET({ request,url }) {
    const id = url.searchParams.get("id");
    //const body = request.json();
    const prisma = new PrismaClient();
    const res = await prisma.report.findMany({
        where: {
            authorId: id
        }
    });

    return new Response(JSON.stringify(res), {status: 200});
}
