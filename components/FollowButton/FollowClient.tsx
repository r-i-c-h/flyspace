"use client"
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';

interface FollowClientprops {
  targetUserId: string;
  isFollowing: boolean;
}

export default function FollowClient({ targetUserId, isFollowing }: FollowClientprops) {
  const router = useRouter();
  const [isFetching, setIsFetching] = useState(false);
  const [isPending, startTransition] = useTransition();
  const isMutating = isFetching || isPending;

  const follow = async () => {
    setIsFetching(true);
    const res = await fetch('/api/follow', {
      method: 'POST',
      body: JSON.stringify({ targetUserId }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    setIsFetching(false);

    console.log('Follow POST Response:', res)
    startTransition(() => {
      // Router Refresh:
      // - [Re]-fetches data and re-renders React-Server-Components
      // - ~~> Sends the updated React-Server-Component payload to the client
      // - ~~> Client merges the payload without losing unaffected client/browser-state
      router.refresh();
    });
  }

  const unfollow = async () => {
    setIsFetching(true);
    const res = await fetch(`/api/follow?targetUserId=${targetUserId}`, {
      method: 'DELETE',
    });
    setIsFetching(false);

    startTransition(() => router.refresh());
  }

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
  if (isFollowing) {
    return (
      <button onClick={unfollow}> {!isMutating ? 'Unfollow' : 'Working...'} </button>
    )
  } else {
    return (
      <button onClick={follow}> {!isMutating ? 'Follow' : 'Working...'} </button>
    )
  }
}