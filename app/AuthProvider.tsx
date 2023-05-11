'use client'

import { SessionProvider } from 'next-auth/react';

interface Props { children: React.ReactNode; }

export default function AuthProvider({ children }: Props) {
  return (
    <SessionProvider>{children}</SessionProvider>
  );
}


// The SessionProvider needs to be wrapped\exported instead of used directly.
// It will error without the wrap because it uses client-side features
// but doesn't explicitly at-the-moment identify itself as client-only