import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { ProfileForm } from "./ProfileForm";
import { redirect } from 'next/navigation';
import { authOptions } from "../api/auth/[...nextauth]/route"; // necessary for ver13

export default async function Dashboard() {
  const session = await getServerSession(authOptions); // might not be necessary for future versions

  if (!session) {
    redirect('/api/auth/signin');
  }

  const currentUserEmail = session?.user?.email!;
  const user = await prisma.user.findUnique({
    where: {
      email: currentUserEmail,
    },
  });

  return (<>
    <h1>User Settings Dashboard</h1>
    <ProfileForm user={user} />
  </>);
}