import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

/**** Query all Users and return them as a JSON object ****/
export async function GET(request: Request) {
  const users = await prisma.user.findMany();
  console.log({ users });

  return NextResponse.json(users);
}