import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export async function POST({ request, cookies }) {
    const body = await request.json();
    const { username, password } = body;
    const prisma = new PrismaClient();
    const user = await prisma.user.findFirst({ where: { email: username } });
    console.log(user);
    const match = bcrypt.compareSync(password, user.hashPass);
    if (match) {
        const token = jwt.sign({ id: user.id, email: user.email}, "s3cretStuff"); //Secret for signing - should not be in code.
        cookies.set('token', token, { httpOnly: true, path: '/' });
        return new Response('OK', { status: 200 });
    } else {
        return new Response('Unauthorized', { status: 401 });
    }
}

