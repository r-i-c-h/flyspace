import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "../auth/[...nextauth]/route";

// Create a Following Relationship:
export async function POST(req: Request) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email!; // fix @TS error in `findUnique()`
  const currentUserId = await prisma.user!
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id);
  const { targetUserId } = await req.json(); // the "other" user

  const record = await prisma.follows.create({
    data: {
      followerId: currentUserId!,
      followingId: targetUserId
    }
  });

  return NextResponse.json(record);
}

// Kill a Following Relationship:
export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const targetUserId = req.nextUrl.searchParams.get('targetUserId')!; // get as a URL param (unlike above)

  const currentUserEmail = session?.user?.email!;
  const currentUserId = await prisma.user!
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id!);

  const record = await prisma.follows.delete({
    where: {
      followerId_followingId: {
        followerId: currentUserId,
        followingId: targetUserId
      }
    }
  })
  return NextResponse.json(record);
}