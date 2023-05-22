'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import LoadingSpinner from "./LoadingSpinner";

export function SignInButton() {
  const { data: session, status } = useSession();
  console.log('Client SignIn Button Auth check', session, status)

  if (status === 'loading') {
    return <LoadingSpinner size={32} />
  }

  if (status === 'authenticated') {
    const avatarImage = session.user?.image ?? `/mystery-avatar.svg`;
    return (
      <Link href={`/dashboard`}>
        <Image
          src={avatarImage}
          alt="Avatar"
          width={32}
          height={32}
        />
      </Link>
    )
  }
  // Default UNauthenticated User State
  return <button onClick={() => signIn()}>Sign In</button>;
}

export function SignOutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>
}