import { PrismaClient } from '@prisma/client';

export async function GET({ request }) {
    const prisma = new PrismaClient();
    const res = await prisma.report.findMany({
        where: {
            authorId: request.user.id
        }
    });

    return new Response(JSON.stringify(res), {status: 200});
}
