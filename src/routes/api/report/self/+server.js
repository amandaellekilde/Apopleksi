import { PrismaClient } from '@prisma/client';


export async function GET({ request, cookies }) {
    const prisma = new PrismaClient();
    const res = await prisma.report.findMany({
        where: {
            authorId: request.user.id //Fra server-hook'en
        }
    });
    return new Response(JSON.stringify(res), { status: 200 });
}
