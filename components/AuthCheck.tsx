'use client'

import { useSession } from "next-auth/react";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
  const { data: session, status } = useSession();
  // status can be "loading" | "authenticated" | "unauthenticated"
  console.log('Auth check', session, status)

  if (status === "authenticated") {
    return <>{children}</>;
  } else {
    return <></>;
  }
}