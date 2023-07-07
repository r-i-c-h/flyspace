import { getServerSession } from 'next-auth';
import FollowClient from './FollowClient';
import { prisma } from '@/lib/prisma';
import { authOptions } from '../../app/api/auth/[...nextauth]/route'


interface FollowButtonProps {
  targetUserId: string;
}

export default async function FollowButton({ targetUserId }: FollowButtonProps) {
  const session = await getServerSession(authOptions);

  const currentUserEmail = session?.user?.email!; // fix @TS error in `findUnique()`

  const currentUserId = await prisma.user!
    .findUnique({ where: { email: currentUserEmail } })
    .then((user) => user?.id);

  const isFollowing = await prisma.follows.findFirst({
    where: {
      followerId: currentUserId,
      followingId: targetUserId
    },
  });

  const boolIsFollowing = Boolean(isFollowing);

  return (
    <FollowClient targetUserId={targetUserId} isFollowing={boolIsFollowing} />
  );
}