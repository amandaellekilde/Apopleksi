import { PrismaClient } from '@prisma/client';

export async function GET({ request, cookies }) {
    const prisma = new PrismaClient();
    const res = await prisma.user.findMany({});
    return new Response(JSON.stringify(res), { status: 200 });
}
