import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from 'bcryptjs'

export default async function GET() {
    const users = await prisma.user.findMany()
    return new Response(JSON.stringify(users), {
        headers: { "content-type": "application/json" },
    })
}

export async function POST(request: Request) {
    const data = await request.json()
    const password = await bcrypt.hash(data.password, 10)
    const user = await prisma.user.create({
        data: {
            name: data.name,
            email: data.email,
            password: password,
        }
    })

    return new Response(JSON.stringify(user), {
        headers: { "content-type": "application/json" },
    })
}

export async function PUT(request: Request, id: number) {
    const user = await prisma.user.update({
        where: {id: id},
        data: request.json()
    })

    return new Response(JSON.stringify(user), {
        headers: { "content-type": "application/json" },
    })
}

export async function DELETE(request: Request, id: number) {
    const user = await prisma.user.update({
        where: {id: id},
        data: {
            isActive: false
        }
    })

    return new Response(JSON.stringify(user), {
        headers: { "content-type": "application/json" },
    })
}