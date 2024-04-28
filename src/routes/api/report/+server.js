import { PrismaClient } from '@prisma/client';

export async function POST({ request, cookies }) {
    const body = await request.json();
    const prisma = new PrismaClient();
    const res = await prisma.report.create({
        data: {
            authorId: request.user.id, //Sat af server-hook'en
            sys: body.sys,
            dia: body.dia,
        }
    });
    return new Response('Created', { status: 201 });
}
