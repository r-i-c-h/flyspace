import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function PUT(req: Request) {
  const session = await getServerSession(authOptions);
  const currentUserEmail = session?.user?.email!; //!! MUST come from server, *not* from client due to 🔒 concerns

  const data = await req.json();
  data.age = Number(data.age);

  //TODO: Validate\Sanitize user data object: name, bio, age, image...

  const user = await prisma.user.update({
    where: {
      email: currentUserEmail
    },
    data
  })

  return NextResponse.json(user);
}